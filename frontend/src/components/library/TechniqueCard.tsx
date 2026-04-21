import { motion } from 'framer-motion'
import type { Technique } from '@/types'
import { DifficultyBadge } from './DifficultyBadge'

interface Props {
  tech: Technique
  onSelect: (t: Technique) => void
}

export function TechniqueCard({ tech, onSelect }: Props) {
  return (
    <motion.button
      onClick={() => onSelect(tech)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="group relative w-full text-left bg-stone-900 border border-stone-800/80
                 rounded-xl overflow-hidden cursor-pointer
                 hover:border-red-600/50
                 transition-colors duration-200
                 focus:outline-none focus-visible:ring-1 focus-visible:ring-red-600"
    >
      <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center" />

      <div className="relative p-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-stone-600 mb-2">{tech.subcat}</p>

        <h3 className="font-display text-[26px] leading-none text-stone-100
                       group-hover:text-red-500 transition-colors duration-150 pr-10">
          {tech.name}
        </h3>
          <p className="text-stone-500 text-sm mt-1 mb-4">{tech.jpName}</p>

        <p className="text-stone-500 text-[13px] leading-relaxed line-clamp-2 mb-5">
            {tech.desc}
        </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 flex-wrap">
              <DifficultyBadge diff={tech.difficulty} />
              {tech.tags?.includes('counter') && (
                <span className="px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide bg-sky-950/60 text-sky-400 border border-sky-700/50">Counter</span>
              )}
              {tech.tags?.includes('illegal-ijf') && (
                <span className="px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide bg-orange-950/60 text-orange-400 border border-orange-700/50">Illegal IJF</span>
              )}
            </div>
              <span className="text-stone-700 text-[10px] uppercase tracking-[0.15em] group-hover:text-stone-500 transition-colors">
                {tech.category}
              </span>
          </div>
      </div>
    </motion.button>
  )
}
