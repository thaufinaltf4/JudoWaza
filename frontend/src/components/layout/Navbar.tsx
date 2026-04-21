import { NavLink } from 'react-router-dom'
import { cn } from '@/utils/cn'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/[0.05]">
      <div className="absolute inset-0 bg-[#0c0a09]/90 backdrop-blur-md" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">

        <NavLink to="/" className="flex items-center gap-2.5 group">
            <span className="block w-[3px] h-5 bg-red-600 rounded-full shrink-0 transition-all duration-200 group-hover:h-7" />
          <span className="font-display text-[20px] tracking-[0.12em] text-stone-100">
            JUDOWAZA
          </span>
        </NavLink>

          <div className="flex items-center gap-8">
          <NavLink to="/" end
            className={({ isActive }) =>
              cn('text-[11px] font-medium tracking-[0.18em] transition-colors duration-150',
                isActive ? 'text-stone-100' : 'text-stone-600 hover:text-stone-300',
              )
            }
          >
            LIBRARY
          </NavLink>
            <NavLink
              to="/quiz"
              end
              className={({ isActive }) =>
                cn(
                  'text-[11px] font-medium tracking-[0.18em] transition-colors duration-150',
                  isActive ? 'text-stone-100' : 'text-stone-600 hover:text-stone-300',
                )
              }
            >
              QUIZ
            </NavLink>
            <NavLink
              to="/gokyo"
              end
              className={({ isActive }) =>
                cn(
                  'text-[11px] font-medium tracking-[0.18em] transition-colors duration-150',
                  isActive ? 'text-stone-100' : 'text-stone-600 hover:text-stone-300',
                )
              }
            >
              GO-KYO
            </NavLink>
        </div>

      </div>
    </nav>
  )
}
