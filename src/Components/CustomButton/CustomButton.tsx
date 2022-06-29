import React, { FC } from "react"
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps
} from "react-native"
import theme from "../../utils/theme"

type Props = TouchableOpacityProps & { title?: string; fullwidth?: boolean }
const CustomButton: FC<Props> = ({
	title = "",
	fullwidth = false,
	style: customeStyle = {},
	children,
	...props
}) => {
	const fullwidthStyle = fullwidth ? styles.fullwidth : {}
	return (
		<TouchableOpacity
			style={[styles.button, fullwidthStyle, customeStyle]}
			{...props}
		>
			{title ? <Text style={styles.titleColor}>{title}</Text> : children}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	titleColor: {
		color: theme.text.main
	},
	button: {
		paddingHorizontal: 25,
		alignItems: "center",
		paddingVertical: 10,
		borderRadius: 10,
		backgroundColor: theme.color.main
	},
	fullwidth: {
		minWidth: "100%"
	}
})

export default CustomButton
