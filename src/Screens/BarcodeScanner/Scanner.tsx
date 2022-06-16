import React, { useState, useEffect } from "react"
import ProductInfo from "../../Components/Scanner/ProductInfo"
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image
} from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import Header from "../Home/components/Header/Header"
import Outlier from "../../Assets/Scanner/outlier.png"

interface Product {
  name: string
  barcode: string
  isIsraeli: boolean
}

function Scanner() {
  const [hasPermission, setHasPermission] = useState(false)
  const [isItemScanned, setIsItemScanned] = useState(false)
  const [scannedProduct, setScannedtProduct] = useState<Product>({
    name: "",
    barcode: "",
    isIsraeli: false
  })
  const [isProductFound, setIsProductFound] = useState(false)

  useEffect(() => {
    BarCodeScanner.requestPermissionsAsync().then(({ status }) => {
      setHasPermission(status === "granted")
    })
  }, [])

  if (hasPermission === null) {
    return <Text>accessing camera</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.main}>
        {isItemScanned || (
          <BarCodeScanner
            onBarCodeScanned={isItemScanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        )}
        {isItemScanned ? (
          <ProductInfo
            setIsScanned={setIsItemScanned}
            productInfo={scannedProduct}
            isProductFound={isProductFound}
          />
        ) : (
          <Image style={styles.outlier} source={Outlier} />
        )}
      </View>
    </SafeAreaView>
  )

  function handleBarCodeScanned({ data: scannedBarcode }: { data: string }) {
    products.forEach(function ({ name, barcode }) {
      if (barcode == scannedBarcode) {
        setIsProductFound(true)
        setScannedtProduct({
          name,
          barcode,
          isIsraeli: barcode.substring(0, 3) == "729"
        })
      } else {
        setIsProductFound(false)
      }
    })
    setIsItemScanned(true)
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#FDE8DB",
    flex: 1
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  outlier: {
    width: 220,
    height: 220
  },
  containerScanned: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)"
  }
})

export default Scanner

const products: Product[] = [
  {
    barcode: "1234567890128",
    name: "milk",
    isIsraeli: false
  },
  {
    barcode: "8473829573672",
    name: "milk",
    isIsraeli: false
  },
  {
    barcode: "7290016006162",
    name: "Schweppes",
    isIsraeli: false
  }
]
