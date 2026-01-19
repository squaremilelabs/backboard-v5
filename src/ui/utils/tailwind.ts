import { extendTailwindMerge } from "tailwind-merge"
import { createTV, ClassValue } from "tailwind-variants"

/**
 * Tailwind Merge configuration to be applied to
 * global `cn` (tailwind-merge) & `tv` (tailwind-variants) functions below.
 * https://github.com/dcastil/tailwind-merge/blob/main/docs/configuration.md
 */
const twMergeConfig: Parameters<typeof extendTailwindMerge>[0] = {}

/** Global tailwind-merge function - preconfigured with twMergeConfig */
export const cn = (...inputs: ClassValue[]) => extendTailwindMerge(twMergeConfig)(inputs)

/** Global tailwind-variants function - preconfigured with twMergeConfig */
export const tv = createTV({ twMergeConfig })

export type { ClassValue }

/**
 * Type utility for extracting slotted class names from a tailwind-variants function
 * With optionality for passing as a function with render props as an argument
 */
export type SlottedClassNames<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Can't create a generic tv return type
  T extends (...args: any[]) => any,
  R extends object | null = null,
> = R extends object
  ? (renderProps: R) => {
      [K in keyof ReturnType<T>]: ClassValue
    }
  : {
      [K in keyof ReturnType<T>]: ClassValue
    }
