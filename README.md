
  const uploadImage = async (image: ImagePickerAsset) => {
    // setUploading(true)
    const response = await fetch(image.uri)
    const blob = await response.blob()
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1)

    const storageRef = ref(storage, "some-child")
    try {
      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log(snapshot)
        console.log("Uploaded a blob or file!")
      })
    } catch (error) {
      //
    }
  }

