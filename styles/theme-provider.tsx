import { PropsWithChildren, useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ThemeProvider as ReactThemeProvider, Theme } from "@react-navigation/native"
import { SplashScreen } from "expo-router"

import { useColorScheme } from "@/lib/useColorScheme"

import { NAV_THEME } from "./nav_theme"

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
}
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme()
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false)

  useEffect(() => {
    ; (async () => {
      const theme = await AsyncStorage.getItem("theme")
      console.log(theme)

      if (!theme) {
        AsyncStorage.setItem("theme", colorScheme)
        setIsColorSchemeLoaded(true)
        return
      }
      const colorTheme = theme === "dark" ? "dark" : "light"
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme)
        setIsColorSchemeLoaded(true)
        return
      }
      setIsColorSchemeLoaded(true)
    })().finally(() => {
      SplashScreen.hideAsync()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isColorSchemeLoaded) {
    return null
  }
  return <ReactThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>{children}</ReactThemeProvider>
}
