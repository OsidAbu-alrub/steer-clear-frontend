import { useCallback, useState } from "react"

type AsyncFunction = () => Promise<any>

const useRefresh = (refetch: AsyncFunction): [boolean, () => Promise<void>] => {
	const [isRefreshing, setIsRefreshing] = useState(false)
	const handleRefresh = useCallback(async () => {
		setIsRefreshing(true)
		await refetch()
		setIsRefreshing(false)
	}, [refetch])

	return [isRefreshing, handleRefresh]
}

export default useRefresh
