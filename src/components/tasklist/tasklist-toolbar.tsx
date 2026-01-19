"use client"

import { Button, Separator, Toolbar, TooltipTrigger } from "react-aria-components"
import { ArrowUpDownIcon, PlusIcon, Repeat2Icon } from "lucide-react"
import { button } from "@/ui/primitives/button"
import { cn } from "@/ui/utils/tailwind"
import { Tooltip } from "@/ui/primitives/tooltip"

const buttonCn = button({
  hoverEffect: "fill",
  withScaleEffect: true,
  className: "h-box-sm gap-2 rounded-[4px] pr-8 pl-4 text-md text-neutral-text",
})

export function TasklistToolbar() {
  return (
    <Toolbar className="flex w-full items-center gap-8">
      <Button className={buttonCn}>
        <PlusIcon /> Add
      </Button>
      <Button className={buttonCn}>
        <ArrowUpDownIcon /> Reorder
      </Button>
      <Separator className="invisible grow" />
      <TooltipTrigger delay={300} closeDelay={300}>
        <Button className={cn(buttonCn, "box-border pr-4")}>
          <Repeat2Icon />
        </Button>
        <Tooltip placement="bottom end" offset={8} arrowBoundaryOffset={8}>
          Recurring Tasks
        </Tooltip>
      </TooltipTrigger>
    </Toolbar>
  )
}
