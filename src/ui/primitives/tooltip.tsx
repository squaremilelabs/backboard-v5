import { Tooltip as AriaTooltip, TooltipProps, OverlayArrow } from "react-aria-components"
import { ClassValue, cn, tv } from "../utils/tailwind"

export const tooltip = tv({
  slots: {
    base: "h-box-sm rounded-[8px] bg-base-text px-8 py-4 text-sm font-medium text-base-bg",
    arrow: "",
  },
})

export function Tooltip({
  children,
  className,
  ...props
}: Omit<TooltipProps, "children" | "className"> & {
  children: React.ReactNode
  className?: ClassValue
}) {
  return (
    <AriaTooltip
      {...props}
      className={cn(
        "group h-box-sm rounded-[8px] bg-base-text px-8 py-4 text-sm font-medium text-base-bg",
        className
      )}
    >
      <OverlayArrow
        className={({ placement }) =>
          cn([
            placement === "bottom" && "scale-y-[-1]",
            placement === "left" && "-rotate-90",
            placement === "right" && "rotate-90",
          ])
        }
      >
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </AriaTooltip>
  )
}
