import {
  ArrowLeftRightIcon,
  ChevronLeft,
  ChevronRight,
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

import { cn } from "../utils"
import { iconSizes } from "../sizes"

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
iconWithClassName(ChevronRight)

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

type IconProps = {
  size?: number
  className?: string
}

const defualtIconStyle = "text-muted-foreground"

export const ICONS = ({ size = iconSizes.md, className }: IconProps) => ({
  xIcon: <XIcon size={size} className={cn(defualtIconStyle, className)} />,
  chevronLeft: <ChevronLeft size={size} className={cn(defualtIconStyle, className)} />,
  chevronRight: <ChevronRight size={size} className={cn(defualtIconStyle, className)} />,
})
