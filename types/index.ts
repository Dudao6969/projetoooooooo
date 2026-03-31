export interface Game {
  id: number
  title: string
  price: number
  discount?: number
  image: string
  rating: number
  category: string
}

export interface CartItem {
  id: number
  title: string
  price: number
  discount?: number
  quantity: number
}
