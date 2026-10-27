import ReactMarkDown from "react-markdown";
import type { Route } from "./+types/details";
import type { PostMeta } from "~/types";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;
  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error("Failed to fetch data!");

  const index = await res.json();

  const postMeta = index.find((post: PostMeta) => post.slug === slug);

  if (!postMeta) throw new Response("Not found!", { status: 404 });

  // Dynamically import raw markdown
  const markdown = await import(`../../posts/${slug}.md?raw`);

  return { postMeta, markdown: markdown.default };
}

type BlogPostDetailsProps = {
    loaderData: {
        postMeta: PostMeta,
        markdown: string
    };

}

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsProps) => {
    const {postMeta, markdown} = loaderData;
    console.log(postMeta, markdown);

  return <>Blog</>;
};

export default BlogPostDetailsPage;
