import { PropsWithChildren } from "react"
import { MotiView } from "moti"

import { cn } from "@/lib/utils"

import { Button } from "../../button"
import { BasePageBuilderContent } from "../../page/base/base-page-builder"
import { useEditableView } from "./use-editable-view"

export type EditableViewOptions = {
  title: string
  onPress: () => void
}

export type EditableViewProps = {
  options?: EditableViewOptions
  i: number
} & PropsWithChildren &
  Pick<BasePageBuilderContent, "showComponentInEdit">

export const EditableView = (props: EditableViewProps) => {
  const { isEditMode, toggleEditMode } = useEditableView()

  const delay = props.i * 50

  const isEditable = props.options !== undefined

  const onPress = () => {
    props.options?.onPress()
    toggleEditMode()
  }

  if (props.showComponentInEdit) {
    return (
      <MotiView className="relative">
        <MotiView
          animate={{ opacity: isEditMode ? 1 : 0, scale: isEditMode ? 1 : 0.85 }}
          transition={{ type: "spring", delay: delay }}
        >
          {props.children}
        </MotiView>
      </MotiView>
    )
  }

  if (!isEditable)
    return (
      <MotiView animate={{ scale: isEditMode ? 0.85 : 1, opacity: isEditMode ? 0.2 : 1 }} transition={{ delay: delay }}>
        {props.children}
      </MotiView>
    )

  return (
    <MotiView className="relative">
      <MotiView
        animate={{ opacity: isEditMode ? 0.2 : 1, scale: isEditMode ? 0.85 : 1 }}
        transition={{ type: "spring", delay: delay }}
      >
        {props.children}
      </MotiView>
      <MotiView
        animate={{ scale: isEditMode ? 1 : 1.5, opacity: isEditMode ? 1 : 0 }}
        transition={{ type: "spring", delay: delay }}
        className={cn("absolute flex h-full w-full items-center justify-center", !isEditMode && "z-[-100]")}
      >
        <Button
          titleClassName="shadow-md shadow-black"
          onPress={onPress}
          variant="link"
          className="underline"
          size="sm"
          title={props.options?.title}
        />
      </MotiView>
    </MotiView>
  )
}
