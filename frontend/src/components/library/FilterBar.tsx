import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { categories, difficulties, tags, goKyoLabels, type CategoryFilter, type DifficultyFilter, type TagFilter, type GoKyoFilter } from '@/data/techniques'

interface Props {
  cat: CategoryFilter
  diff: DifficultyFilter
  tag: TagFilter
  goKyo: GoKyoFilter
  onCatChange: (c: CategoryFilter) => void
  onDiffChange: (d: DifficultyFilter) => void
  onTagChange: (t: TagFilter) => void
  onGoKyoChange: (g: GoKyoFilter) => void
}

const diffActive: Record<string, string> = {
  All: 'text-stone-200 bg-stone-800',
  beginner: 'text-emerald-400 bg-emerald-950/60',
  intermediate: 'text-amber-400 bg-amber-950/60',
  advanced: 'text-red-400 bg-red-950/60',
}

const tagLabels: Record<string, string> = {
  All: 'All',
  counter: 'Counter',
  'illegal-ijf': 'Illegal IJF',
}

export function FilterBar({ cat, diff, tag, goKyo, onCatChange, onDiffChange, onTagChange, onGoKyoChange }: Props) {
const catBtns: any[] = []
categories.forEach((c) => {
    catBtns.push(
      <button
        key={c}
          onClick={() => onCatChange(c)}
        className={cn(
          'relative px-3 pb-2.5 text-[11px] font-medium uppercase tracking-[0.16em] whitespace-nowrap',
          'transition-colors duration-150',
          cat === c ? 'text-stone-100' : 'text-stone-600 hover:text-stone-400',
        )}
      >
        {c}
        {cat === c && (
          <motion.span layoutId="cat-indicator"
            className="absolute bottom-0 left-0 right-0 h-px bg-red-600"
            transition={{ type: 'spring', stiffness: 500, damping: 38 }}
          />
        )}
      </button>
    )
  })

  return (
    <div className="flex flex-col gap-2">

      <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-0">
        <div className="flex items-end gap-0 border-b border-stone-800 flex-1 overflow-x-auto">
          {catBtns}
        </div>

        <div className="flex items-center gap-1 sm:pl-5 pb-0.5 flex-wrap">
          {difficulties.map(d => (
            <button key={d}
              onClick={() => onDiffChange(d)}
              className={cn(
                'px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide transition-colors duration-150',
                diff === d ? diffActive[d] : 'text-stone-700 hover:text-stone-500',
              )}
            >
              {d}
            </button>
          ))}
          <span className="w-px h-3 bg-stone-800 mx-1 hidden sm:block" />
          {tags.map(t => (
            <button key={t}
              onClick={() => onTagChange(t)}
              className={cn(
                'px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide transition-colors duration-150',
                tag === t
                  ? t === 'counter'
                    ? 'text-sky-400 bg-sky-950/60'
                    : t === 'illegal-ijf'
                    ? 'text-orange-400 bg-orange-950/60'
                    : 'text-stone-200 bg-stone-800'
                  : 'text-stone-700 hover:text-stone-500',
              )}
            >
              {tagLabels[t]}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1 flex-wrap pb-0.5">
        <span className="text-[9px] uppercase tracking-[0.2em] text-stone-700 mr-1">Go-kyo</span>
        <button
          onClick={() => onGoKyoChange('All')}
          className={cn(
            'px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide transition-colors duration-150',
            goKyo === 'All' ? 'text-stone-200 bg-stone-800' : 'text-stone-700 hover:text-stone-500',
          )}
        >
          All
        </button>
        {([1, 2, 3, 4, 5] as const).map(n => (
          <button key={n}
            onClick={() => onGoKyoChange(n)}
            className={cn(
              'px-2 py-0.5 rounded text-[10px] font-medium tracking-wide transition-colors duration-150',
              goKyo === n ? 'text-violet-400 bg-violet-950/60' : 'text-stone-700 hover:text-stone-500',
            )}
          >
            {n} · {goKyoLabels[n]}
          </button>
        ))}
        <button
          onClick={() => onGoKyoChange('none')}
          className={cn(
            'px-2 py-0.5 rounded text-[10px] font-medium tracking-wide transition-colors duration-150',
            goKyo === 'none' ? 'text-stone-400 bg-stone-800' : 'text-stone-700 hover:text-stone-500',
          )}
        >
          Non-Go-kyo
        </button>
      </div>

    </div>
  )
}
