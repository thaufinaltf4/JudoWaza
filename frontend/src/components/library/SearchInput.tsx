interface Props {
  val: string
  onUpdate: (value: string) => void
}

export function SearchInput({ val, onUpdate }: Props) {
  return (
    <div className="relative">
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none"
        fill="none" stroke="currentColor"
        viewBox="0 0 24 24"
      >
          <path strokeLinecap="round" strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
        />
      </svg>
        <input
          type="search"
          value={val}
        onChange={e => onUpdate(e.currentTarget.value)}
        placeholder="Search techniques..."
          className="w-full bg-stone-900 border border-stone-800 rounded-lg pl-10 pr-4 py-2.5 text-stone-200
                   placeholder:text-stone-600 focus:outline-none focus:border-red-600 transition-colors text-sm"
        />
    </div>
  )
}
