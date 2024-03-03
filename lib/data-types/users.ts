export interface User {
    id: string
    name: string
    email: string
    phone: string
    type: "shopper" | "seller" | "executive"
}