import {
  ArrowLeftRightIcon,
  ChevronLeft,
  ImageIcon,
  ImageOffIcon,
  ImagesIcon,
  KeyIcon,
  LucideIcon,
  MailIcon,
  PlusCircleIcon,
  PlusIcon,
  SlidersVerticalIcon,
  TelescopeIcon,
  XCircleIcon,
  XIcon,
} from "lucide-react-native"
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
iconWithClassName(ArrowLeftRightIcon)
iconWithClassName(PlusCircleIcon)
iconWithClassName(SlidersVerticalIcon)
iconWithClassName(XCircleIcon)
iconWithClassName(XIcon)
iconWithClassName(PlusIcon)
iconWithClassName(ChevronLeft)
iconWithClassName(ImagesIcon)

export {
  ImagesIcon,
  ChevronLeft,
  XIcon,
  PlusIcon,
  XCircleIcon,
  SlidersVerticalIcon,
  PlusCircleIcon,
  ArrowLeftRightIcon,
  ImageOffIcon,
  ImageIcon,
  MailIcon,
  KeyIcon,
  TelescopeIcon,
}
