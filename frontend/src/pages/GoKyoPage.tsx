import { motion } from 'framer-motion'

const groups = [
  {
    number: 1,
    name: 'Ikkyo',
    jpName: '一教',
    description: 'The foundation. Eight fundamental throws covering the core principles of reaping, sweeping, and hip technique. Every judoka learns these first — they establish the basic patterns of kuzushi, tsukuri, and kake that all throwing technique builds on.',
    techniques: [
      'De-ashi-harai', 'Hiza-guruma', 'Sasae-tsurikomi-ashi', 'Uki-goshi',
      'O-soto-gari', 'O-uchi-gari', 'Seoi-nage', 'O-goshi',
    ],
  },
  {
    number: 2,
    name: 'Nikyo',
    jpName: '二教',
    description: 'Combination and momentum. Seven throws that require a higher level of timing and often chain naturally from Ikkyo techniques. The judoka begins developing the sensitivity to combine techniques and exploit movement rather than static balance.',
    techniques: [
      'Ko-soto-gari', 'Ko-uchi-gari', 'Koshi-guruma', 'Tsurikomi-goshi',
      'Okuri-ashi-harai', 'Tai-otoshi', 'Harai-goshi', 'Uchi-mata',
    ],
  },
  {
    number: 3,
    name: 'Sankyo',
    jpName: '三教',
    description: 'Depth and commitment. Seven throws demanding a deep entry, full hip engagement, or precise foot placement. Technique execution requires committing fully to the throw — partial attempts do not work. The judoka learns to generate force from the whole body, not just the arms.',
    techniques: [
      'Ko-soto-gake', 'Tsuri-goshi', 'Yoko-otoshi', 'Ashi-guruma',
      'Hane-goshi', 'Harai-tsurikomi-ashi', 'Tomoe-nage', 'Kata-guruma',
    ],
  },
  {
    number: 4,
    name: 'Yonkyo',
    jpName: '四教',
    description: 'Advanced displacement. Six throws focused on breaking uke\'s posture or balance in unusual directions — upward, sideways, or through sacrifice. Many require the ability to read and redirect uke\'s force rather than overpower it.',
    techniques: [
      'Sumi-gaeshi', 'Tani-otoshi', 'Hane-makikomi', 'Sukui-nage',
      'Utsuri-goshi', 'O-guruma', 'Sode-tsurikomi-goshi', 'O-soto-guruma',
    ],
  },
  {
    number: 5,
    name: 'Gokyo',
    jpName: '五教',
    description: 'Counter technique. The most advanced group, focusing entirely on counters — throwing the opponent in the middle of their own attack. Mastering this group requires not only technical skill but a deep understanding of each base technique being countered.',
    techniques: [
      'Ko-uchi-gaeshi', 'O-soto-gaeshi', 'O-uchi-gaeshi', 'Hane-goshi-gaeshi',
      'Harai-goshi-gaeshi', 'Uchi-mata-gaeshi',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.3, ease: 'easeOut' },
  }),
}

export function GoKyoPage() {
  return (
    <div className="min-h-screen bg-[#0c0a09]">

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="border-b border-stone-800/50 py-14 sm:py-20">
          <p className="text-red-600 text-[10px] uppercase tracking-[0.28em] font-medium mb-4">
            Kodokan
          </p>
          <h1 className="font-display text-[72px] sm:text-[96px] leading-[0.9] text-stone-100 mb-8">
            Go-kyo<br />no Waza
          </h1>
          <p className="text-stone-400 text-base leading-relaxed max-w-xl">
            The Kodokan's official classification of 40 throwing techniques into five sequential
            teaching groups. Established in 1895 by Jigoro Kano and revised to its current form
            in 1920, the Go-kyo remains the structural backbone of judo's technical curriculum worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-800/40 rounded-xl overflow-hidden">
          {[
            { label: 'Established', value: '1895' },
            { label: 'Revised', value: '1920' },
            { label: 'Throwing techniques', value: '40' },
            { label: 'Groups', value: '5' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[#0c0a09] px-6 py-5">
              <p className="text-[9px] uppercase tracking-[0.22em] text-stone-600 mb-1">{label}</p>
              <p className="font-display text-4xl text-stone-100">{value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-4 mb-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-medium">History</p>
            <span className="flex-1 h-px bg-stone-800" />
          </div>
          <p className="text-stone-400 text-sm leading-relaxed">
            When Jigoro Kano founded judo at the Kodokan in 1882, techniques were not formally
            organised into a teaching progression. As the school grew, a structured curriculum became
            essential. In 1895, Kano introduced the first Go-kyo classification — a five-group
            system that ordered techniques by the difficulty and complexity of their execution.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed">
            The 1895 version was refined over the following decades as the technical understanding
            of throwing deepened. In 1920, the Kodokan revised the Go-kyo into its current form —
            reassigning several techniques across groups and replacing others to better reflect
            the progressive demands of each stage. This 1920 classification has remained largely
            unchanged for over a century.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed">
            Techniques outside the Go-kyo — such as leg-grab throws and most sacrifice techniques —
            are formally designated <span className="text-stone-300">Shinmeisho-no-waza</span> (newly
            recognised techniques) or <span className="text-stone-300">Habukareta-waza</span> (discarded
            techniques). They are valid Kodokan judo but sit outside the core teaching classification.
          </p>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-4 mb-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-medium">How It's Used</p>
            <span className="flex-1 h-px bg-stone-800" />
          </div>
          <p className="text-stone-400 text-sm leading-relaxed">
            The Go-kyo serves as the technical foundation for grading examinations in many national
            judo federations. Practitioners are expected to demonstrate throws from each group as
            part of their progression toward black belt and beyond. Teaching a group in order gives
            instructors a principled way to sequence instruction — ensuring each new technique builds
            on established mechanics rather than introducing arbitrary complexity.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed">
            In kata practice, Nage-no-kata draws its five pairs of techniques directly from the
            first five groups, with each pair representing a category of throwing principle. The
            Go-kyo also informs how coaches structure randori development — beginners are encouraged
            to focus on Ikkyo attacks before layering in the combination and counter work of later groups.
          </p>
        </div>

        <div className="pt-4">
          <div className="flex items-center gap-4 mb-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-medium">The Five Groups</p>
            <span className="flex-1 h-px bg-stone-800" />
          </div>

          <div className="space-y-6">
            {groups.map((group, i) => (
              <motion.div
                key={group.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border border-stone-800/60 rounded-xl overflow-hidden"
              >
                <div className="px-6 py-5 border-b border-stone-800/40 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-display text-[48px] leading-none text-violet-500/80">
                        {group.number}
                      </span>
                      <div>
                        <p className="font-display text-2xl text-stone-100 leading-none">{group.name}</p>
                        <p className="text-stone-600 text-xs mt-0.5">{group.jpName}</p>
                      </div>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed mt-3 max-w-lg">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 py-4 flex flex-wrap gap-2">
                  {group.techniques.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800/60 text-stone-400 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}
