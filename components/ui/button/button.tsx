import * as React from "react"
import { Text, TextClassContext } from "~/components/ui/text"
import { cn } from "~/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { ActivityIndicator, Pressable, View } from "react-native"

import { WithSideIcon } from "./width-sideicon"

const buttonVariants = cva(
  "group flex items-center justify-center rounded-xl web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary web:hover:opacity-90 active:opacity-90",
        light: "bg-primary-foreground  active:opacity-90",
        destructive: "bg-destructive web:hover:opacity-90 active:opacity-90",
        outline:
          "border border-input bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        secondary: "bg-secondary web:hover:opacity-80 active:opacity-80",
        ghost: "web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        link: "web:underline-offset-4 web:hover:underline web:focus:underline ",
      },
      size: {
        default: "h-10 px-4 py-2 native:h-14 native:px-5 native:py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 native:h-14",
        icon: "h-10 w-10 rounded-full",
        iconSm: "h-8 w-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const buttonTextVariants = cva(
  "web:whitespace-nowrap text-sm native:text-base font-bold text-foreground web:transition-colors",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        light: "text-primary",
        destructive: "text-destructive-foreground",
        outline: "group-active:text-accent-foreground",
        secondary: "text-secondary-foreground group-active:text-secondary-foreground",
        ghost: "group-active:text-accent-foreground",
        link: "text-primary group-active:underline",
      },
      size: {
        default: "",
        sm: "",
        lg: "text-lg",
        icon: "",
        iconSm: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    title?: string
    sideIcon?: React.ReactNode
    icon?: React.ReactNode
    loading?: boolean
  }

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const titleContent = <Text>{props.title}</Text>

    const titleWithIcon = props.title ? (
      <View className="flex-row items-center gap-sm">
        {props.icon}
        {titleContent}
      </View>
    ) : (
      props.icon
    )

    const titleVariant = props.icon ? titleWithIcon : titleContent
    const title = props.loading ? <ActivityIndicator className="text-primary-foreground" /> : titleVariant

    return (
      <TextClassContext.Provider
        value={cn(props.disabled && "web:pointer-events-none", buttonTextVariants({ variant, size }))}
      >
        <Pressable
          className={cn(
            props.disabled && "opacity-50 web:pointer-events-none",
            buttonVariants({ variant, size, className })
          )}
          ref={ref}
          role="button"
          {...props}
        >
          {props.sideIcon && <WithSideIcon>{props.sideIcon}</WithSideIcon>}
          {title}
        </Pressable>
      </TextClassContext.Provider>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonTextVariants, buttonVariants }
export type { ButtonProps }
