export type IComment = {
  id: number
  authorId: number
  articleId: number
  content: string
  createdAt: Date
}

export type ICreateComment = {
  articleId: string
  content: string
}
