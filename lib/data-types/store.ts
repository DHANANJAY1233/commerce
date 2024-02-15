export interface Store {
    name: string
    is_commercial: boolean
    loc: Location
    store_ui: StoreUIInterface
  }
  
  interface Location {
    lat: number
    long: number
  }
  
  interface StoreUIInterface {
    pos: string
    store_url: string
    image_src: string
  }