import { ImageIcon, ImageOffIcon, KeyIcon, LucideIcon, MailIcon, TelescopeIcon } from "lucide-react-native"
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
iconWithClassName(MailIcon)
iconWithClassName(KeyIcon)
iconWithClassName(TelescopeIcon)

export { ImageOffIcon, ImageIcon, MailIcon, KeyIcon, TelescopeIcon }
