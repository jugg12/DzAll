export interface CartItem {
  id: number,
}

type ActionType = 'SET_MAIN_STATE'
export interface Action {
  type: ActionType,
}

export type SortType = 'HIGH' | 'LOW'

export interface ArendaCardProtuct {
  readonly id: number
  readonly url: string
  readonly sent: string
  readonly kolvo: string           
  readonly komnati: string 
  readonly ploshad: string
  readonly adress: string
  readonly metro: string
  readonly rayon: string
  readonly opisanie: string
  readonly imageVladelec: string
  readonly name: string
  readonly number: string
  readonly mail: string
  readonly linkViber: string
  readonly linkWats: string
  readonly linkMail: string
}

export interface ReducerState {
  readonly arenda: ArendaCardProtuct[]
  cart: CartItem[]
  searchString?: string

}