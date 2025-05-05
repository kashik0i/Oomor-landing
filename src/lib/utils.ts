import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function assertIsDefined<T>(value: T, message = "Value is undefined"): asserts value is NonNullable<T> {
  console.log(import.meta.env)
  if (value === undefined) {
    throw new Error(message)
  }
}