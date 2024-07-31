export const randomImages = [
  "https://img.freepik.com/free-photo/outdoor-closeup-shot-chainsaw-stump-wood_176532-14593.jpg?t=st=1722402577~exp=1722406177~hmac=9f3e353d0ad0608217239dd4f9221ae6728594e02453fee29405ccb82ba30c97&w=2000",
  "https://img.freepik.com/free-photo/outdoor-shot-unknown-person-worker-fixing-chainsaw-before-after-deforestation_176532-14592.jpg?t=st=1722402587~exp=1722406187~hmac=7506e51de12b1db069939d90c8ac8e5f3642721ca3f9553cb7cc2f1a08f340ec&w=2000",
  "https://img.freepik.com/free-photo/female-carpenter-using-electric-saw_23-2148813329.jpg?t=st=1722402595~exp=1722406195~hmac=ab5cbf6cd605db62d171df62f8acff20416d1cb168aa20110373cfe31583c45e&w=2000",
  "https://img.freepik.com/free-photo/female-carpenter-working-studio-with-electric-saw_23-2148813326.jpg?t=st=1722402603~exp=1722406203~hmac=3c4e114a97e88d4f3ad2a4280ff0443d4834266e6fe10f16d4af321f3072af33&w=1060",
  "https://img.freepik.com/free-photo/carpenter-works-with-tree_1157-18669.jpg?t=st=1722402557~exp=1722406157~hmac=37361f577db69c42acd9a4e8c29a8cea0c1bac860fe36c6ab9b911157d5d31e3&w=2000",
  "https://img.freepik.com/free-photo/craftsman-using-circular-saw_1157-45889.jpg?t=st=1722402562~exp=1722406162~hmac=84aa0fca83ef38919196626f6227dffc20535bb03fef1f28a8b312194a1ff44d&w=2000",
  "https://img.freepik.com/free-photo/close-up-ax-log-mountain_158595-6127.jpg?t=st=1722406739~exp=1722410339~hmac=11e11c77d37502d8a84f20d5486abdcc774e7fb0d329f47a5d65d02b75b5b282&w=1060",
  "https://img.freepik.com/free-photo/great-custom-made-shoes-trendy-people-from-experienced-shoe-master_613910-3334.jpg?t=st=1722406915~exp=1722410515~hmac=e7cf1e828ccadaaf4c74d66cd6ae67dc9f116a22976f8c28ef41679ae116c21a&w=2000",
  "https://img.freepik.com/free-photo/friends-toasting-with-beer-glasses-bar-counter_107420-94805.jpg?t=st=1722406918~exp=1722410518~hmac=850520543c8cb9d996d5a58a494b89e0e79b9cf2370ce26ad1b4c82d3f7eb60a&w=2000",
  "https://img.freepik.com/free-photo/elderly-person-is-serving-boot-service-his-own-personal-workshop_613910-17409.jpg?t=st=1722406906~exp=1722410506~hmac=3f3e5ea6b551f64c9e2b9087b1c36c359be9c402829b0d1673521ffb6bafbac4&w=2000",
  "https://img.freepik.com/free-photo/machine-tool-table-with-shoes-making-holes-laces-cobbler-s-workshop_613910-3304.jpg?t=st=1722406889~exp=1722410489~hmac=922231005a54095b20e02dfa957a3441bc048e8e7c93934a9f634113344cbe35&w=2000",
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
