import { PropsWithChildren } from "react"
import { MotiView } from "moti"

export const FadeIn = (props: PropsWithChildren) => {
  return (
    <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring" }}>
      {props.children}
    </MotiView>
  )
}
