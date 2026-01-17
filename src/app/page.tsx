import { RootScopeSelector } from "@/components/root-scope-selector"
import { RootStatusTabs } from "@/components/root-status-tabs"
import { TasklistPanel } from "@/components/tasklist-panel"

export default function Page() {
  return (
    <div className="flex max-h-full w-md max-w-full flex-col">
      <header className="w-md max-w-full shrink-0 bg-base-bg p-8">
        <h1
          className="pointer-events-none font-semibold tracking-tight underline
            decoration-primary-bg decoration-[2.5px] underline-offset-3 select-none"
        >
          backboard.work
        </h1>
      </header>
      <nav className="flex shrink-0 justify-between gap-8 bg-base-bg p-8">
        <RootStatusTabs />
        <RootScopeSelector />
      </nav>
      <main className="max-h-full grow overflow-auto p-8 pt-0">
        <TasklistPanel />
      </main>
    </div>
  )
}
