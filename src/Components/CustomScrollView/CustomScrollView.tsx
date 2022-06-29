import React, { FC } from "react"
import { ScrollView, ScrollViewProps } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
// import { ScrollView } from "react-native-virtualized-view"

const CustomScrollView: FC<
	Omit<ScrollViewProps, "keyboardShouldPersistTaps">
> = ({ children, contentContainerStyle, ...props }) => {
	return (
		<ScrollView
			contentContainerStyle={[
				{
					flexGrow: 1
				},
				contentContainerStyle
			]}
			keyboardShouldPersistTaps="always"
			{...props}
		>
			<KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
		</ScrollView>
	)
}

export default CustomScrollView
