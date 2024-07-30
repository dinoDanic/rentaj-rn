type FirebaseRefArguments = {
  userId: string
  productId: string
  fileName: string
}

export const setFirebaseRef = {
  productImage: (args: FirebaseRefArguments) => `${args.userId}/${args.productId}/${args.fileName}`,
}
