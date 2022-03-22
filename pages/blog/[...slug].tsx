import {ArticlePage} from "../../types/types";
import Layout from "../../components/Layout";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleLinks from "../../components/ArticleLinks";
import {getPostDetails, getPosts} from "../../services";
import {useRouter} from "next/router";
import parse from "html-react-parser";
import {parserOptions} from "../../services/parserUtils";

type Props = {
  post: ArticlePage;
  relatedPosts: any;
};

const BlogPost = ({post, relatedPosts}: Props): JSX.Element => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Coming soon(tm)</h1>;
  }

  return (
    <Layout title={post.headerTitle} description={post.excerpt}>
      <ArticleHeader image={post.featuredImage} headerText={post.headerTitle} />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-0 sm:gap-2 md:gap-8 lg:gap-12 mt-8">
        <div>
          <div className="relative md:sticky sm:top-8 overflow-hidden mb-6 sm:mb-0">
            <ArticleLinks
              className={"my-4 sm:mt-1 text-2xl"}
              links={relatedPosts}
              active={post.title}
            />
            {/* <div>{`Created At: ${dayjs(post.createdAt).format(
              "D MMM YYYY"
            )}`}</div> */}
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 mx-auto">
          <article className={"prose prose-invert prose-xl px-1 md:px-2 article"}>
            {parse(post.content.html, parserOptions)}
          </article>
        </div>
        <div>
          <div className="hidden md:block relative md:sticky top-8">
            <div>
              <p>On this page:</p>
              <p>Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

// Fetch data at build time
export async function getStaticProps({params}) {
  const fullPath = params.slug.reduce((acc: string, next: string) =>
    acc.concat("/" + next)
  );

  const data = await getPostDetails(fullPath);

  return {
    props: {
      post: data.post,
      relatedPosts: data.posts,
    },
    revalidate: 240 * 60, // 240 mins
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();


  return {
    paths: posts.map(({node: {slug}}) => ({
      params: {slug: slug.split("/")},
    })),
    fallback: true,
  };
}
