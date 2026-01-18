export function TasklistPanel() {
  return (
    <div
      className="flex max-h-full grow flex-col overflow-auto rounded-[8px] border-2
        border-base-border bg-base-surface"
    >
      <div className="flex min-h-box-md shrink-0 items-center border-b-2 border-base-border"></div>
      <div className="min-h-100 overflow-auto rounded-b-[8px] bg-base-bg"></div>
    </div>
  )
}
