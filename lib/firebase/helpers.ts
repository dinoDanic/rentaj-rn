import { deleteObject, listAll, ref, StorageReference } from "firebase/storage"

import { storage } from "."

type FirebaseRefArguments = {
  userId: string
  productId: string
  fileName: string
}

export const setFirebaseRef = {
  productImage: (args: FirebaseRefArguments) => `${args.userId}/${args.productId}/${args.fileName}`,
}

const deleteSpecificFolder = async (storageRef: StorageReference) => {
  try {
    const listResult = await listAll(storageRef)

    for (const itemRef of listResult.items) {
      await deleteObject(itemRef)
    }

    for (const prefixRef of listResult.prefixes) {
      await deleteSpecificFolder(prefixRef)
    }
  } catch (error) {
    console.log("err", error)
  }
}

const deleteFolder = async (location: string) => {
  const folderRef = ref(storage, location)
  try {
    const listResult = await listAll(folderRef)

    for (const itemRef of listResult.items) {
      await deleteObject(itemRef)
    }

    for (const prefixRef of listResult.prefixes) {
      await deleteSpecificFolder(prefixRef)
    }
  } catch (error) {
    console.log("err", error)
  }
}

export const firebase = {
  deleteFolder,
}
