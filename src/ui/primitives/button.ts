import { tv } from "tailwind-variants"

export const button = tv({
  base: "flex items-center transition-all",
  variants: {
    hoverEffect: {
      fade: "data-hovered:opacity-80",
      fill: "data-hovered:bg-neutral-muted-bg/50",
    },
    withScaleEffect: {
      true: "data-focus-visible:scale-105 data-pressed:scale-95",
    },
  },
})
