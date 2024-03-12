import { Product } from "./products"

export interface Order {
    user_id: string
    user_name: string
    user_loc: {latitude: number, longitude: number }
    cart: Product[]
    subtotal: number
    delivery: number
    status: 'created' | 'transit' | 'delivered'
}