import { ArticleLink, ArticlePage } from "../../types";
import Layout from "../../components/Layout";
import ArticleHeader from "../../components/ArticleHeader";
import { getPostDetails, getPosts } from "../../services";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { parserOptions } from "../../services/parserUtils";
import DarkFade from "../../components/DarkFade";
import dayjs from "dayjs";
import dynamic from "next/dynamic";

type Props = {
  post: ArticlePage;
  relatedPosts: ArticleLink[];
};

const DynamicLinks = dynamic(() => import("../../components/ArticleLinks"), {
  ssr: false,
});

const BlogPost = ({ post, relatedPosts }: Props): JSX.Element => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Coming soon(tm)</h1>;
  }

  return (
    <Layout title={post.seoTitle} description={post.excerpt} article={post}>
      <ArticleHeader image={post.featuredImage} headerText={post.headerTitle} />
      <main className="mb-12 container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-0 sm:gap-2 md:gap-8 lg:gap-12 mt-8">
        <div>
          <div className="relative md:sticky sm:top-8 overflow-hidden mb-6 sm:mb-0">
            <DynamicLinks
              className={"my-4 sm:mt-1 text-2xl"}
              links={relatedPosts}
              active={post.title}
            />
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 mx-auto">
          <div className={"px-1 md:px-2"}>
            <span className={"block"}>
              Created: {dayjs(post.createdAt).format("D MMM YYYY")} - Updated{" "}
              {dayjs(post.updatedAt).format("D MMM YYYY")}
            </span>
          </div>
          <article className={"prose prose-invert prose-xl px-1 md:px-2 article"}>
            {parse(post.content.html, parserOptions)}
          </article>
        </div>
        <div>
          <div className="hidden md:block relative md:sticky top-8">
            <div>
              <p>On this page:</p>
              {/*{post.contentLinks.links.map((link, i) => (*/}
              {/*  <p key={i}>{link.title}</p>*/}
              {/*))}*/}
            </div>
          </div>
        </div>
        <DarkFade />
      </main>
      {/*<section title={"comments"} className="container max-w-3xl">*/}
      {/*  <div>comments</div>*/}
      {/*</section>*/}
    </Layout>
  );
};

export default BlogPost;

// Fetch data at build time
export async function getStaticProps({ params }: any) {
  const fullPath = params.slug.reduce((acc: string, next: string) => acc.concat("/" + next));

  const data = await getPostDetails(fullPath);

  return {
    props: {
      post: data.post,
      relatedPosts: data.posts,
    },
    revalidate: 24 * 60 * 60, // 24 hours
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }: any) => ({
      params: { slug: slug.split("/") },
    })),
    fallback: true,
  };
}
