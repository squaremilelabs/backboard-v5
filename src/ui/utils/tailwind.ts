import { twMerge } from "tailwind-merge"
import { ClassValue } from "tailwind-variants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(inputs)
}
