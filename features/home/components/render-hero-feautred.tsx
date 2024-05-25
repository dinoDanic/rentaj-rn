import HeroCard, { HeroCardType } from "@/components/ui/cards/hero-card/hero-card"
import { HeroCardBuilder } from "@/components/ui/cards/hero-card/hero-card-builder"

const fakeData: HeroCardType[] = [
  { id: 0, title: "Position 0" },
  { id: 1, title: "Position 1" },
  { id: 2, title: "Position 2" },
  { id: 3, title: "Position 3" },
]

export default function RenderHeroFeature() {
  return <HeroCardBuilder data={fakeData} renderItem={(item) => <HeroCard {...item.item} />} />
}
