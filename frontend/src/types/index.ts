export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export type Category = 'Nage-waza' | 'Ne-waza'

export type Tag = 'counter' | 'illegal-ijf'

export interface Technique {
  id: number
  name: string
  jpName: string
  category: Category
  subcat: string
  difficulty: Difficulty
  youtubeVideoId: string
  startSeconds: number
  endSeconds: number
  desc: string
  keyPts: string[]
  tags?: Tag[]
  tagDetails?: Partial<Record<Tag, string>>
  goKyo?: 1 | 2 | 3 | 4 | 5
  family?: string
}
