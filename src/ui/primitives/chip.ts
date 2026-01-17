import { tv } from "tailwind-variants"

export const chip = tv({
  base: "flex items-center rounded-[8px] px-8 font-medium",
  variants: {
    color: {
      neutral: "bg-neutral-muted-bg text-neutral-muted-fg",
      primary: "bg-primary-muted-bg text-primary-muted-fg",
    },
    size: {
      default: "h-content-md text-sm",
      xs: "h-content-sm text-xs",
    },
  },
  defaultVariants: {
    color: "neutral",
    size: "default",
  },
})
