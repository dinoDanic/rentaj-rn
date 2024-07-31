export const randomImages = [
  "https://img.freepik.com/free-psd/product-display-3d-podium-background_47987-11315.jpg?ga=GA1.1.495706252.1719334737&semt=sph",
  "https://img.freepik.com/free-photo/skin-care-product-beige-stones_23-2148761437.jpg?ga=GA1.1.495706252.1719334737&semt=sph",
  "https://img.freepik.com/free-psd/product-display-3d-podium-background_47987-11307.jpg?ga=GA1.1.495706252.1719334737&semt=sph",
  "https://img.freepik.com/free-photo/outdoor-closeup-shot-chainsaw-stump-wood_176532-14593.jpg?t=st=1722402577~exp=1722406177~hmac=9f3e353d0ad0608217239dd4f9221ae6728594e02453fee29405ccb82ba30c97&w=2000",
  "https://img.freepik.com/free-photo/outdoor-shot-unknown-person-worker-fixing-chainsaw-before-after-deforestation_176532-14592.jpg?t=st=1722402587~exp=1722406187~hmac=7506e51de12b1db069939d90c8ac8e5f3642721ca3f9553cb7cc2f1a08f340ec&w=2000",
  "https://img.freepik.com/free-photo/female-carpenter-using-electric-saw_23-2148813329.jpg?t=st=1722402595~exp=1722406195~hmac=ab5cbf6cd605db62d171df62f8acff20416d1cb168aa20110373cfe31583c45e&w=2000",
  "https://img.freepik.com/free-photo/female-carpenter-working-studio-with-electric-saw_23-2148813326.jpg?t=st=1722402603~exp=1722406203~hmac=3c4e114a97e88d4f3ad2a4280ff0443d4834266e6fe10f16d4af321f3072af33&w=1060",
  "https://img.freepik.com/free-photo/carpenter-works-with-tree_1157-18669.jpg?t=st=1722402557~exp=1722406157~hmac=37361f577db69c42acd9a4e8c29a8cea0c1bac860fe36c6ab9b911157d5d31e3&w=2000",
  "https://img.freepik.com/free-photo/craftsman-using-circular-saw_1157-45889.jpg?t=st=1722402562~exp=1722406162~hmac=84aa0fca83ef38919196626f6227dffc20535bb03fef1f28a8b312194a1ff44d&w=2000",
  "https://img.freepik.com/free-vector/realistic-cream-advertisement_52683-8159.jpg?t=st=1722402368~exp=1722405968~hmac=3a6d12008a5a5332f3187e8822a969108d3a9fde93d23a48cba58a993a4849d9&w=2000",
  "https://img.freepik.com/free-photo/monochrome-beauty-product-skincare_23-2151307316.jpg?t=st=1722402380~exp=1722405980~hmac=a6918668d33ac293f2905ef74223b39beb2838c599ce85698e5ca68b6d000bbb&w=2000",
  "https://img.freepik.com/free-vector/cosmetic-realistic-vector-background_88138-57.jpg?t=st=1722402389~exp=1722405989~hmac=18f7f8d88bc02187380886bbef4e2f28c450d9d3dad2a8f22bb8529b94693acf&w=2000",
  "https://img.freepik.com/free-photo/3d-cartoon-beauty-products_23-2151503319.jpg?t=st=1722402395~exp=1722405995~hmac=b8416616f5fff43058253918055751ab808c38f41fb5a9c56b138ae1d53478b1&w=2000",
]

export const getRandomImage = (): string => {
  const imagesCount = randomImages.length
  const randomIndex = Math.round(Math.random() * imagesCount)
  return randomImages[randomIndex]
}

export const getRandomImages = (count: number): string[] => {
  const shuffledImages = [...randomImages].sort(() => 0.5 - Math.random())
  return shuffledImages.slice(0, count)
}
