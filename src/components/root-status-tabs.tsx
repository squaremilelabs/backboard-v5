"use client"

import { Tab, TabList, Tabs } from "react-aria-components"
import { CheckIcon, ClockIcon, InboxIcon, LucideIcon } from "lucide-react"
import { cn } from "@/ui/utils/tailwind"

type StatusItem = {
  id: string
  label: string
  Icon: LucideIcon
}

const items: StatusItem[] = [
  { id: "now", label: "Now", Icon: InboxIcon },
  { id: "later", label: "Later", Icon: ClockIcon },
  { id: "done", label: "Done", Icon: CheckIcon },
]

export function RootStatusTabs() {
  return (
    <Tabs keyboardActivation="manual">
      <TabList items={items} className="flex gap-8">
        {(item) => (
          <Tab
            id={item.id}
            aria-label={item.label}
            className={cn(
              `flex h-box-md cursor-default items-center gap-6 rounded-[8px] border-2
              border-base-border/60 px-12 transition-all`,
              "text-neutral-text data-selected:text-base-text",
              `data-selected:border-base-border data-selected:bg-base-surface
              data-selected:font-medium`,
              `opacity-50 data-focus-visible:opacity-100 data-hovered:opacity-100
              data-selected:opacity-100`,
              "data-focus-visible:scale-105 data-pressed:scale-95"
            )}
          >
            <item.Icon />
            {item.label}
          </Tab>
        )}
      </TabList>
    </Tabs>
  )
}
