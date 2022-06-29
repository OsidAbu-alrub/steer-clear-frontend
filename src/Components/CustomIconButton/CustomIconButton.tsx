import React, {
	ComponentProps,
	FC,
	ReactNode,
	useEffect,
	useState
} from "react"
import {
	GestureResponderEvent,
	TouchableOpacity,
	TouchableOpacityProps
} from "react-native"
import { ActivityIndicator } from "react-native-paper"
import theme from "../../utils/theme"

interface Props {
	onPress?: (event: GestureResponderEvent) => Promise<void>
	buttonProps?: Omit<TouchableOpacityProps, "disabled" | "onPress">
	loaderProps?: ComponentProps<typeof ActivityIndicator>
	icon: ReactNode
}

const CustomIconButton: FC<Props> = ({
	onPress = () => {},
	icon,
	buttonProps: { style: buttonStyle, ...buttonProps } = {},
	loaderProps: { style: loaderStyle, color: loaderColor, ...loaderProps } = {}
}) => {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		return () => setIsLoading(false)
	}, [])
	return (
		<TouchableOpacity
			style={[
				{
					backgroundColor: "rgba(255,255,255,0.9)",
					height: 50,
					width: 50,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 25
				},
				buttonStyle
			]}
			onPress={async (event) => {
				setIsLoading(true)
				await onPress(event)
				setIsLoading(false)
			}}
			disabled={isLoading}
			{...buttonProps}
		>
			{isLoading ? (
				<ActivityIndicator
					color={loaderColor || theme.color.main}
					style={loaderStyle}
					{...loaderProps}
				/>
			) : (
				icon
			)}
		</TouchableOpacity>
	)
}

export default CustomIconButton
