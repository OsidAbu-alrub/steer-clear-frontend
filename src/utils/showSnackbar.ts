import { WToast } from "react-native-smart-tip"
import theme from "./theme"

type SnackbarVariant = "success" | "error" | "info"
const VARIANT_TO_COLOR: { [key in SnackbarVariant]: string } = {
	success: "green",
	error: "red",
	info: theme.color.light
}

const VARIANT_TEXT_COLOR: { [key in SnackbarVariant]: string } = {
	success: theme.color.secondary,
	error: theme.color.secondary,
	info: theme.text.secondary
}

export const showSnackbar = (
	message: string,
	variant: SnackbarVariant = "success"
) => {
	WToast.show({
		data: message,
		position: WToast.position.TOP,
		backgroundColor: VARIANT_TO_COLOR[variant],
		textColor: VARIANT_TEXT_COLOR[variant],
		duration: WToast.duration.LONG
	})
}
