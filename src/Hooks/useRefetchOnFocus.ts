import { useFocusEffect } from "@react-navigation/native"
import { useEffect, useState } from "react"

type AsyncFunction = () => Promise<any>

export const useRefetchOnFocus = (
	refetch: AsyncFunction,
	canRefetch = true
) => {
	const [isScreenFocused, setIsScreenFocused] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	useFocusEffect(() => {
		setIsScreenFocused(true) // when I focus the screen
		return () => setIsScreenFocused(false) // when I quit the screen
	})

	/* the screen still always active in cache so we need to check that the screen is focused in a use effect
  to dispatch the refetch only one time to avoid the infinity loop*/
	useEffect(() => {
		if (isScreenFocused && canRefetch) {
			;(async () => {
				setIsLoading(true)
				await refetch()
				setIsLoading(false)
			})()
		}
	}, [canRefetch, isScreenFocused, refetch])

	return isLoading
}
