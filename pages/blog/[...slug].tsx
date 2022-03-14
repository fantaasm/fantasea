import { ArticlePage } from "../../types/article";
import Layout from "../../components/Layout";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleLinks from "../../components/ArticleLinks";
import { ParsedUrlQuery } from "querystring";
import { getPosts, getPostDetails } from "../../services";
import { useRouter } from "next/router";
import parse from "html-react-parser";
// import dayjs from "dayjs";

type Props = {
  post: ArticlePage;
  relatedPosts: any;
};

interface IParams extends ParsedUrlQuery {
  slug: string[];
}

const BlogPost = ({ post, relatedPosts }: Props): JSX.Element => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Coming soon(tm)</h1>;
  }

  return (
    <Layout title={post.headerTitle} description={post.excerpt}>
      <ArticleHeader image={post.featuredImage} headerText={post.headerTitle} />

      <div className="container mx-auto grid grid-cols-5 gap-12 mt-8">
        <div>
          <div className="relative lg:sticky top-8">
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
        <div className="col-span-3 place-content-center content-center justify-center mx-auto">
          <article
            className={"prose prose-invert prose-xl px-1 md:px-2 w-full"}
          >
            {parse(post.content.html)}
          </article>
        </div>
        <div>
          <div className="relative lg:sticky top-8">
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
export async function getStaticProps({ params }) {
  const fullPath = params.slug.reduce((acc: string, next: string) =>
    acc.concat("/" + next)
  );
  const data = await getPostDetails(fullPath);

  return {
    props: {
      post: data.post,
      relatedPosts: data.posts,
    },
    revalidate: 7200,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  console.log(posts);

  return {
    // paths: posts.map(({ node: { slug } }) => ({ params: { slug } })), // this is for [slug] class name
    paths: posts.map(({ node: { slug } }) => ({
      params: { slug: slug.split("/") },
    })),
    fallback: true,
  };
}
