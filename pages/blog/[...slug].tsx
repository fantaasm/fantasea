import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage} from "next";
import articles from "../../public/articles.json";
import {Article, ArticleLink, ArticlePage} from "../../types/article";
import Layout from "../../components/Layout";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleLinks from "../../components/ArticleLinks";
import {ParsedUrlQuery} from "querystring";

type Props = {
  page: ArticlePage
  externalLinks: ArticleLink[]
}

interface IParams extends ParsedUrlQuery {
  slug: string[]
}

const BlogPost: NextPage = ({page, externalLinks}: Props) => {
  if (!page || !externalLinks) return <></> // dev returns null on re render

  return (
    <Layout title={page.headerTitle} description={page.description}>
      <ArticleHeader image={page.headerImg} headerText={page.headerTitle} />
      <div className={`flex flex-col md:flex-row md:justify-between 
        gap-4 md:gap-0 
        sm:px-0 md:px-6 lg:px-32 xl:px-48 mt-4 md:mt-8 
        mx-auto max-w-8xl`}>
        <ArticleLinks className={"my-4 sm:mt-1 text-2xl"} links={externalLinks} active={page.name} />
        <article className={"prose prose-invert prose-xl px-1 md:px-2"} dangerouslySetInnerHTML={{__html: page.content}} />
        <ArticleLinks className={"hidden md:block text-xl mt-2"} links={page.internalLinks} internal={true}>
          <p className={"text-xl border-b border-slate-700 font-bold"}>On this page</p>
        </ArticleLinks>
      </div>
    </Layout>
  )
}

export default BlogPost


export const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
  const {slug}: string[] = context.params as IParams // path array

  // Concat slug into path
  const path: string = slug.reduce((accumulator: string, next: string) => accumulator.concat("/" + next));

  // Find root of article base on first relative path
  const articleRoot: Article | undefined = articles.find((article) => article.root === slug[0])

  // Find post with specified path
  const page: ArticlePage |undefined = articleRoot?.pages.find(page => page.url === path)

  // Find paths
  const externalLinks = articleRoot?.pages.map((page) => {
    return{name: page.name, link: page.url}
  })

  // Return props
  return {props: {page, externalLinks}}
}

export const getStaticPaths: GetStaticPaths = () => {

  let paths = []

  // For each article find all sub article paths
  articles.forEach((article:Article) => {
    paths = paths.concat(article.pages.map((page:ArticlePage) => ({params: {slug: page.url.split("/")}})))
  })

  return {
    paths, // [ { params: { slug: [ 'controlled-difficulty', 'commands' ] } }, { params: { slug: [ 'controlled-difficulty' ] } } ]
    fallback: false
  }

}
