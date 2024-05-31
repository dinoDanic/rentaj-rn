import { useState } from "react"
import { MotiView } from "moti"
import { Pressable, Modal as RN_Modal, ModalProps as RN_ModalProps, View } from "react-native"

import { XIcon } from "@/lib/icons/icon-with-classname"

import { Button } from "./button"
import { ButtonProps } from "./button/button"
import { Text } from "./text"

type ModalProps = RN_ModalProps & {} & ButtonProps

export const Modal = ({ ...buttonProps }: ModalProps) => {
  const [visible, setVisible] = useState(false)
  const [opacity, setOpacity] = useState(0)

  const setVisiblity = (state: boolean) => {
    console.log(state)

    if (state) {
      setVisible(state)
      setTimeout(() => {
        setOpacity(1)
      }, 350)
    } else {
      setOpacity(0)
      setTimeout(() => {
        setVisible(state)
      }, 200)
    }
  }

  return (
    <>
      <Button variant="secondary" size="icon" onPress={() => setVisiblity(!visible)} {...buttonProps} />
      <RN_Modal animationType="slide" transparent={true} visible={visible}>
        <Pressable onPress={() => setVisiblity(!visible)} className="fixed top-0 h-full w-full">
          <MotiView className="flex-1" animate={{ opacity: opacity }} transition={{ type: "spring" }}>
            <View className="flex-1 bg-black/50" />
          </MotiView>
        </Pressable>
        <View className="absolute bottom-0 min-h-[5%] w-full rounded-t-2xl border border-border bg-background p-screen shadow-md">
          <View className="items-end">
            <Button
              variant="ghost"
              size="icon"
              icon={<XIcon className="text-foreground" />}
              onPress={() => setVisiblity(!visible)}
            />
          </View>
          <Text>Kita</Text>
          <Text>Kita</Text>
          <Text>Kita</Text>
          <Text>Kita</Text>
          <Text>Kita</Text>
          <Text>Kita</Text>
          <Text>Kita</Text>
          <Text>Kita</Text>
          <Text>Kita</Text>
          <Text>Kita</Text>
          <Text>Kita</Text>
          <Text>Kita</Text>
        </View>
      </RN_Modal>
    </>
  )
}
