export type AuthBody = {
  email: string
  password: string
}

export type JwtPayload = {
  sub: number
  email: string
  isAdmin: number
  iat: number
  exp: number
}
