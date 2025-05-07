import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function assertIsDefined<T>(value: T, message = "Value is undefined", throws = false): asserts value is NonNullable<T> {
  if (value === undefined) {
    if (throws) {
      throw new Error(message)
    }
    console.warn(message)
  }
}