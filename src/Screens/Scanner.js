import React, { useState, useEffect } from "react";
import ProductInfo from "../Components/Scanner/Product_Info";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Header from "../Components/Home/Header";

function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedProduct, seScannedtProduct] = useState({
    Name: "",
    Code: "",
    Israeli: false,
  });
  const [found, setFound] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    products.forEach(function (product) {
      if (product.Code == data) {
        setFound(true);
        if (product.Code.substring(0, 3) == "729") {
          seScannedtProduct({
            Name: product.Name,
            Code: product.Code,
            Israeli: true,
          });
        } else {
          seScannedtProduct({
            Name: product.Name,
            Code: data,
            Israeli: false,
          });
        }
      }
      else{
        setFound(false);
      }
    });
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>accessing camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.main}>
        {scanned || (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        )}
        {scanned ? (
          <ProductInfo
            setScanned={setScanned}
            scannedProduct={scannedProduct}
            found={found}
          />
        ) : (
          <Image
            style={styles.outlier}
            source={require("../assets/Scanner/outlier.png")}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#FDE8DB",
    flex: 1,
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  outlier: {
    width: 220,
    height: 220,
  },
  containerScanned: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#FDE8DB",
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default Scanner;

const products = [
  {
    Code: "1234567890128",
    Name: "milk",
  },
  {
    Code: "8473829573672",
    Name: "milk",
  },
  {
    Code: "7290016006162",
    Name: "Schweppes",
  },
];
