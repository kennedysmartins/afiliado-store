export interface Product {
  id: string
  customId: string
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

export interface UserData {
  id: string
  name: string
  username: string
  email: string
  passwordHash: string
  createdAt: string
  updatedAt: string
  token: string
}

export type StoreInfo = {
  id: string
  storeName: string
  storeDescription: string | null
  storeLogo: string | null
  storeContact: {
    socialFacebook: string | null
    socialInstagram: string | null
    socialTelegram: string | null
    socialWhatsApp: string | null
    address: string | null
    phone: string | null
    email: string | null
  } | null
  storeConfig: {
    color: string | null
    navbar: string | null
    banners: Array<string> | null
  } | null
}