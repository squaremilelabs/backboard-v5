export type SomedayValue = 32503593600000 // 2999-12-31
export const someday: SomedayValue = 32503593600000

export type Scope = {
  id: string
  name: string
}

export type Task = {
  id: string
  title: string
  scope_id: string | null
  content: RichTextValue
  created_at: number
  last_snoozed_at: number | null
  last_unsnoozed_at: number | null
  snoozed_until: number | null // timestamp or SomedayValue - 2999-12-31
  done_at: number | null
}

export type RichTextValue = {
  plain: string
  md: string
  json: string
}

export const scopes: Scope[] = [
  { id: "1", name: "Nistas" },
  { id: "2", name: "SML" },
  { id: "3", name: "Life" },
  { id: "4", name: "CCNY" },
]
