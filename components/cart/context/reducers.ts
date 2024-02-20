import { Product } from "lib/data-types";

export enum CartActionTypes {
  ADD = 'ADD',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
  SYNC = 'SYNC'
}

interface SyncAction {
  type: CartActionTypes.SYNC;
  payload?: Product[]
}

interface AddAction {
  type: CartActionTypes.ADD;
  payload?: Product
}

interface UpdateAction {
  type: CartActionTypes.UPDATE;
  payload?: Pick<Product, "id" | "count">
}

interface DeleteAction {
  type: CartActionTypes.DELETE;
  payload?: Pick<Product, "id">
}

export type CartAction = SyncAction | AddAction | UpdateAction | DeleteAction

export const cartReducer = (state:Product[], action:CartAction):Product[] => {
    switch(action.type) {
      case CartActionTypes.SYNC:
        return action.payload || []
      case CartActionTypes.ADD:
        if(action.payload) return [...state, action.payload]
        return state
      case CartActionTypes.UPDATE:
        const newState = state
        if(action.payload) {
          return newState.map((item) => {
            if(item.id === action.payload?.id) {
              return {...item, count: action.payload?.count || item.count}
            }
            return item
          })
        }
        return newState
      case CartActionTypes.DELETE:
        if(action.payload) {
          return state.filter(item => item.id !== action.payload?.id)
        }
        return state
      default:
        return state
    }
  };
  