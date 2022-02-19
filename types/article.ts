export type ArticleLink = {
  name: string
  link: string
  active?: boolean
}

export  type ArticlePage = {
  name: string
  url: string
  headerTitle: string
  description: string
  internalLinks: ArticleLink[]
  headerImg: string
  content: string
}

export type Article = {
  name: string
  root: string
  pages: ArticlePage[]
}