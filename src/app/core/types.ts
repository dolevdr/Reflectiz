export type Form = {
  fullName: string
  gender: 'male' | 'female'
  email: string
  birthDate: Date
  location: Location
  hobbies: string[]
  favoriteColor: string
  amountOfSeats: number
  motorType: 'electric' | 'fuel'
}

type Location = {
  city: string
  country: string
  address: string
}

const initialLocation: Location = {
  city: '',
  country: '',
  address: ''
}

export const initialForm: Form = {
  fullName: '',
  gender: 'male',
  email: '',
  birthDate: new Date(),
  location: initialLocation,
  hobbies: [],
  favoriteColor: '',
  amountOfSeats: 2,
  motorType: 'electric'
}
