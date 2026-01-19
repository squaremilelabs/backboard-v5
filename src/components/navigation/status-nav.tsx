"use client"

import { Tab, TabList, Tabs } from "react-aria-components"
import { CheckIcon, ClockIcon, InboxIcon, LucideIcon } from "lucide-react"
import { cn } from "@/ui/utils/tailwind"
import { button } from "@/ui/primitives/button"

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

export function StatusNav() {
  return (
    <Tabs keyboardActivation="manual">
      <TabList items={items} className="flex gap-8">
        {(item) => (
          <Tab
            id={item.id}
            aria-label={item.label}
            className={button({
              withScaleEffect: true,
              hoverEffect: "fill",
              className: cn(
                `flex h-box-md cursor-default items-center gap-6 rounded-[8px] border-2
                border-base-border/60 px-12 transition-all`,
                `text-neutral-text data-focus-visible:text-base-text data-hovered:text-base-text
                data-selected:text-base-text`,
                `data-selected:border-base-border data-selected:bg-base-surface
                data-selected:font-medium`,
                `opacity-50 data-focus-visible:opacity-100 data-hovered:opacity-100
                data-selected:opacity-100`
              ),
            })}
          >
            <item.Icon />
            {item.label}
          </Tab>
        )}
      </TabList>
    </Tabs>
  )
}
