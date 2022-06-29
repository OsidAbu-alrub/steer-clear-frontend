import { ImageSourcePropType } from "react-native"
import { useQuery } from "react-query"
import request from "../../axios"
import { useAuth } from "../../Context/Auth/useAuth"
import { getErrorMessage } from "../../utils/getErrorMessage"
import getValidImage from "../../utils/getValidImage"
import { showSnackbar } from "../../utils/showSnackbar"

export interface Product {
	id: string
	name: string
	barcode: string
	isBadProduct: boolean
	image: ImageSourcePropType
}

export interface Category {
	id: string
	name: string
	description: string
}

export const useCategories = () => {
	const {
		data: categories,
		isLoading: isFetchingCategories,
		refetch: fetchCategories,
		error
	} = useQuery("fetchCategories", async () => {
		try {
			const res = await request.post(`category/retrieve`)
			return res.data.data as Category[]
		} catch (e: any) {
			throw getErrorMessage(e)
		}
	})

	if (error) showSnackbar(error as string)

	return { categories: categories ?? [], isFetchingCategories, fetchCategories }
}

export const useProductsByCategory = (categoryId: string) => {
	const { user } = useAuth()
	const {
		data: products,
		isLoading: isFetchingProducts,
		refetch: fetchProducts,
		error
	} = useQuery(
		["fetchProductsByCategory", categoryId],
		async () => {
			try {
				const res = await request.post(`product/retrieve`, {
					categoryId,
					continentId: user.continentId
				})
				return res.data.data
					.filter((product: any) => !product.isBadProduct)
					.map((product: any) => ({
						...product,
						image: getValidImage(product.image)
					})) as Product[]
			} catch (e: any) {
				throw getErrorMessage(e)
			}
		},
		{
			enabled: !!categoryId
		}
	)

	if (error) showSnackbar(error as string)

	return {
		products: products ?? [],
		isFetchingProducts,
		fetchProducts
	}
}
