import React, { FC } from "react"
import { StyleSheet, TextInput, TextInputProps } from "react-native"
import theme from "../../utils/theme"

const calculateHeightBasedOnNumberOfLines = (
	numberOfLines: number | undefined
) => (numberOfLines ? numberOfLines - 1.2 : 1) * 25
type Props = TextInputProps & { fullwidth?: boolean }
const CustomInput: FC<Props> = ({
	style: customStyles,
	fullwidth = false,
	...props
}) => {
	const fullwidthStyle = fullwidth ? styles.fullwidth : {}
	const multilineStyle = props.multiline
		? {
				maxHeight: calculateHeightBasedOnNumberOfLines(props.numberOfLines),
				minHeight: calculateHeightBasedOnNumberOfLines(props.numberOfLines)
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  }
		: {}
	return (
		<TextInput
			style={[styles.textInput, fullwidthStyle, multilineStyle, customStyles]}
			{...props}
		/>
	)
}

const styles = StyleSheet.create({
	textInput: {
		borderBottomWidth: 1,
		borderColor: theme.textInput.borderColor,
		paddingVertical: 2,
		paddingHorizontal: 5,
		width: 100,
		fontSize: 15
	},
	fullwidth: {
		minWidth: "100%"
	}
})

export default CustomInput
