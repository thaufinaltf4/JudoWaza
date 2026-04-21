import { motion } from 'framer-motion'

const stack = [
  {
    layer: 'Frontend',
    items: [
      { name: 'React 18', detail: 'UI framework. Component model keeps the library grid and quiz state cleanly separated.' },
      { name: 'Vite', detail: 'Build tool. Near-instant dev server and fast production builds out of the box.' },
      { name: 'Tailwind CSS', detail: 'Utility-first styling. Lets me move fast without context-switching to a stylesheet.' },
      { name: 'Framer Motion', detail: 'Animations. Card hover lifts, modal entrance, and the sliding filter indicator.' },
      { name: 'TanStack Query', detail: 'Data fetching and caching. Handles stale data and loading states without boilerplate.' },
      { name: 'React Router v6', detail: 'Client-side routing between the library, quiz, and this page.' },
    ],
  },
  {
    layer: 'Backend',
    items: [
      { name: 'Python + FastAPI', detail: 'REST API. Async by default, auto-generates OpenAPI docs, and Pydantic handles validation.' },
      { name: 'PostgreSQL', detail: 'Stores techniques, categories, and quiz attempt history for weak spot tracking.' },
      { name: 'SQLAlchemy 2.0', detail: 'Async ORM. Clean separation between database I/O and route logic.' },
      { name: 'Alembic', detail: 'Database migrations. Schema changes are versioned and repeatable.' },
    ],
  },
  {
    layer: 'Infrastructure',
    items: [
      { name: 'Vercel', detail: 'Frontend hosting. Deploys automatically on every push to main.' },
      { name: 'Railway', detail: 'Backend and database hosting. Runs the FastAPI server and PostgreSQL instance.' },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.3, ease: 'easeOut' },
  }),
}

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0c0a09]">

    <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="border-b border-stone-800/50 py-14 sm:py-20">
            <p className="text-red-600 text-[10px] uppercase tracking-[0.28em] font-medium mb-4">
              Thaufin
            </p>
          <h1 className="font-display text-[72px] sm:text-[96px] leading-[0.9] text-stone-100 mb-8">
            How I Built<br />This
          </h1>
          <p className="text-stone-400 text-base leading-relaxed max-w-xl">
            Hi, I'm Thaufin! I'm a Computer Engineering student and a Judoka. I built this
            because I wanted a single place where I could consistently reference Judo techniques.
            Whether it's during randori and you're arguing about which technique was used, or a
            random technique pops into your head and you can't remember the name of it. JudoWaza
            curates technique demonstrations from the Kodokan YouTube channel and puts them all
            in one convenient place.
          </p>
        </div>
      </div>


      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-24 space-y-14">

        {stack.map((group, gi) => (
        <div key={group.layer}>
            <div className="flex items-center gap-4 mb-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-medium">
                  {group.layer}
              </p>
                <span className="flex-1 h-px bg-stone-800" />
            </div>
          <div className="space-y-2">
              {group.items.map((item, i) => (
                <motion.div key={item.name}
                  custom={gi * 4 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-b border-stone-800/40 py-3"
                >
                    <span className="font-display text-[22px] text-stone-100 shrink-0 w-48">
                      {item.name}
                    </span>
                  <span className="text-stone-500 text-sm leading-relaxed">{item.detail}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
