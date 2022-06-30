import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddProduct from "../Screens/BarcodeScanner/AddProduct"
import Search from "../Screens/Search/Search"
import Profile from "../Screens/Profile/Profile"
import CreatePost from "../Screens/CreatePost/CreatePost"
import BottomTab from "./BottomTab"
import { Product } from "../Screens/BarcodeScanner/api"
import ProductInfo from "../Screens/BarcodeScanner/ProductInfo"
import Scanner from "../Screens/BarcodeScanner/Scanner"
import { User } from "../Components/Post/api"
import PostProfile from "../Screens/Profile/PostProfile"
import CreateCampaign from "../Screens/CreateCampaign/CreateCampaign"

export type MainRootStack = {
	BottomTab: undefined
	CreatePost: undefined
	CreateCampaign: undefined
	Search: undefined
	Register: undefined
	BarcodeScanner: undefined
	ProductInfo: Product
	AddProduct: {
		barcode: string
	}
	Profile: User
	PostProfile: User
}

const Stack = createNativeStackNavigator<MainRootStack>()

export default function Main() {
	return (
		<Stack.Navigator initialRouteName="BottomTab">
			<Stack.Screen
				name="BottomTab"
				component={BottomTab}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="CreatePost"
				component={CreatePost}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="CreateCampaign"
				component={CreateCampaign}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Search"
				component={Search}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="AddProduct"
				component={AddProduct}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="PostProfile"
				component={PostProfile}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ProductInfo"
				component={ProductInfo}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="BarcodeScanner"
				component={Scanner}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	)
}
