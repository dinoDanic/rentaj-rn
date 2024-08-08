import { PropsWithChildren } from "react"
import { MotiView } from "moti"

type Props = PropsWithChildren & {
  className?: string
  delay?: number
}

export const FadeIn = (props: Props) => {
  return (
    <MotiView
      className={props.className}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", delay: props.delay }}
    >
      {props.children}
    </MotiView>
  )
}
