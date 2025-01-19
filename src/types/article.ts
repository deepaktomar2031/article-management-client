export type IArticle = {
  id: number
  title: string
  content: string
  authorId: number
  createdAt: Date
}

export type ICreateArticle = {
  title: string
  content: string
}
