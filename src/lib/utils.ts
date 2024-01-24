import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumber = (num: number = 0) => {
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

export function formatCurrency(amount: any) {
  const options = { minimumFractionDigits: 2 }
  const formattedAmount = new Intl.NumberFormat("pt-BR", options).format(amount)

  return formattedAmount
}

export function formatDate(dataString: any) {
  const data = new Date(dataString)
  const options: object = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }
  const formatadorDeData = new Intl.DateTimeFormat("pt-BR", options)
  return formatadorDeData.format(data)
}