export interface Product {
  id: string
  title: string
  image: string
  currentPrice: number
  originalPrice: number
  recurrencePrice: number | null
  buyLink: string
  announcement: string | null
  productCode: string
  catchyText: string
  conditionPayment: string
  website: string
  cupom: string
  cupomValue: number
  totalClicks: number
  totalViews: number
  createdAt: string
  updatedAt: string
  published: boolean
}