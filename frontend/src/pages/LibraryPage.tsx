import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { techniques, type CategoryFilter, type DifficultyFilter, type TagFilter } from '@/data/techniques'
import type { Technique } from '@/types'
import { FilterBar } from '@/components/library/FilterBar'
import { SearchInput } from '@/components/library/SearchInput'
import { TechniqueGrid } from '@/components/library/TechniqueGrid'
import { TechniqueModal } from '@/components/library/TechniqueModal'

export function LibraryPage() {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState<CategoryFilter>('All')
  const [diff, setDiff] = useState<DifficultyFilter>('All')
  const [tag, setTag] = useState<TagFilter>('All')
  const [active, setActive] = useState<Technique | null>(null)

  const diffOrder = { beginner: 0, intermediate: 1, advanced: 2 }

  const filtered = useMemo(() => {
    const norm = (s: string) => s.toLowerCase().replace(/-/g, ' ').trim()
    const q = norm(query)
    return techniques
      .filter(t => cat === 'All' || t.category === cat)
      .filter(t => diff === 'All' || t.difficulty === diff)
      .filter(t => tag === 'All' || (t.tags ?? []).includes(tag as 'counter' | 'illegal-ijf'))
      .filter(t => !q || norm(t.name).includes(q) || t.jpName.toLowerCase().includes(q) || norm(t.subcat).includes(q))
      .sort((a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty])
  }, [query, cat, diff, tag])

  return (
    <div className="min-h-screen bg-[#0c0a09]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="border-b border-stone-800/50 py-14 sm:py-20">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
      <div>
      <p className="text-red-600 text-[10px] uppercase tracking-[0.28em] font-medium mb-4">
                Kodokan
              </p>
              <h1 className="font-display text-[80px] sm:text-[110px] leading-[0.9] text-stone-100">
                Technique<br />Library
              </h1>
            </div>
            <div className="lg:text-right shrink-0">
              <p className="font-display leading-none tabular-nums">
               <span className="text-stone-100 text-6xl">{String(filtered.length).padStart(2, '0')}</span>
             <span className="text-stone-700 text-3xl"> / {techniques.length}</span>
              </p>
              <p className="text-stone-600 text-[10px] uppercase tracking-[0.2em] mt-1.5">
                techniques shown
              </p>
            </div>
          </div>
        </div>
      </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-8 space-y-4">
      <SearchInput val={query} onUpdate={setQuery} />
        <FilterBar
            cat={cat}
            diff={diff}
            tag={tag}
            onCatChange={setCat}
            onDiffChange={setDiff}
            onTagChange={setTag}
        />
    </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
          <TechniqueGrid items={filtered} onPick={setActive} />
      </div>

        <TechniqueModal item={active} onClose={() => setActive(null)} />

      <div className="border-t border-stone-800/40 max-w-7xl mx-auto px-6 lg:px-8 py-8 flex items-center justify-between">
          <p className="text-stone-700 text-xs">Thaufin's Judo Library</p>
        <Link
          to="/about"
          className="text-xs font-medium text-stone-400 px-4 py-2 rounded-lg border border-red-600/30
                       hover:border-red-600 hover:text-stone-100 hover:bg-red-600/10
                     transition-all duration-200"
        >
          How I built this
        </Link>
      </div>
    </div>
  )
}
