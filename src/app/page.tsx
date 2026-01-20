import { Navigation } from "@/components/navigation"
import { Tasklist } from "@/components/tasklist"

export default function Page() {
  return (
    <div className="flex max-h-full w-md max-w-full flex-col">
      <header className="flex h-box-lg w-md max-w-full shrink-0 items-center bg-base-bg px-8">
        <h1
          className="pointer-events-none font-semibold tracking-tight underline
            decoration-primary-bg decoration-[2.5px] underline-offset-3 select-none"
        >
          backboard.work
        </h1>
      </header>
      <nav className="flex h-box-lg shrink-0 items-center px-8">
        <Navigation />
      </nav>
      <main className="max-h-full grow overflow-auto p-8">
        <Tasklist />
      </main>
    </div>
  )
}
