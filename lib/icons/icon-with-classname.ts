import { ImageIcon, ImageOffIcon, LucideIcon } from "lucide-react-native"
import { cssInterop } from "nativewind"

export function iconWithClassName(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  })
}

iconWithClassName(ImageOffIcon)
iconWithClassName(ImageIcon)

export { ImageOffIcon, ImageIcon }
