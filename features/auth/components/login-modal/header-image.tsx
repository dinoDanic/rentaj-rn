import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, View } from "react-native"

import { ImageIcon } from "@/lib/icons/icon-with-classname"
import { useColorScheme } from "@/lib/useColorScheme"

export const HeaderImage = () => {
  const { isDarkColorScheme } = useColorScheme()
  return (
    <View className="flex-[0.8]">
      {/* <Image */}
      {/*   source={ */}
      {/*     "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" */}
      {/*   } */}
      {/*   style={{ flex: 1 }} */}
      {/* /> */}
      <View className="flex-1 items-center justify-center bg-muted">
        <ImageIcon size={50} className="text-muted-foreground" />
      </View>

      {isDarkColorScheme && (
        <LinearGradient
          colors={["transparent", isDarkColorScheme ? "rgba(2,8,23,1)" : "rgba(255,255,255, 1)"]}
          style={styles.background}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 130,
  },
})
