export type IAuthor = {
  id: number
  name: string
  email: string
  isAdmin: boolean
}

export type ICreateAuthor = {
  name: string
  email: string
  password: string
}
