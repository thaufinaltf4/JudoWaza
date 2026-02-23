import type { Technique } from '@/types'
import { TechniqueCard } from './TechniqueCard'

interface Props {
  items: Technique[]
  onPick: (t: Technique) => void
}

export function TechniqueGrid({ items, onPick }: Props) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="font-display text-4xl text-stone-700 mb-2">No techniques found</p>
        <p className="text-stone-600 text-sm">Try adjusting your filters or search term</p>
      </div>
    )
  }

  const cards: any[] = []
  items.forEach(item => {
    cards.push(<TechniqueCard key={item.id} tech={item} onSelect={onPick} />)
  })

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards}
    </div>
  )
}
