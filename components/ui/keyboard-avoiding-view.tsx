import { KeyboardAvoidingViewProps, KeyboardAvoidingView as NATIVE_KeyboardAvoidingView, Platform } from "react-native"

const keyboardVerticalOffset = Platform.OS === "ios" ? 120 : 0

export const KeyboardAvoidingView = (props: KeyboardAvoidingViewProps) => (
  <NATIVE_KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset} {...props} />
)
