import { ReactNode } from "react"
import { ActivityIndicator, ScrollView, View } from "react-native"

import { FadeIn } from "@/components/animations/fade-in"

import { Separator } from "../../separator"
import { EditableView, EditableViewOptions } from "../../views/editable-view/editable-view"

export type BasePageBuilderContent = {
  Component: () => ReactNode
  showComponentInEdit?: boolean
  editable?: EditableViewOptions
  seperator?: boolean
  id: number
}

export type BasePageBuilderProps = {
  content: BasePageBuilderContent[]
  isLoading?: boolean
}

export const BasePageBuilder = (props: BasePageBuilderProps) => {
  if (props.isLoading) {
    return (
      <FadeIn>
        <View className="h-[200] items-center justify-center">
          <ActivityIndicator />
        </View>
      </FadeIn>
    )
  }

  return (
    <ScrollView className="px-screen" contentInsetAdjustmentBehavior="automatic">
      <View className="gap-xl">
        {props.content.map((c, i) => {
          return <BasePageBuilderItem key={c.id} i={i} {...c} />
        })}
      </View>
    </ScrollView>
  )
}

const BasePageBuilderItem = (c: BasePageBuilderContent & { i: number }) => {
  return (
    <EditableView showComponentInEdit={c.showComponentInEdit} options={c.editable} i={c.i}>
      <FadeIn key={c.id} className="gap-xl" delay={c.i * 200}>
        {c.Component && <c.Component />}
        {c.seperator !== false && <Separator />}
      </FadeIn>
    </EditableView>
  )
}
