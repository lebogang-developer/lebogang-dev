import ReactMarkDown from "react-markdown";
import type { Route } from "./+types/details";
import type { PostMeta } from "~/types";
import { Link } from "react-router";

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
    postMeta: PostMeta;
    markdown: string;
  };
};

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsProps) => {
  const { postMeta, markdown } = loaderData;
  console.log(postMeta, markdown);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
      <h1 className="text-3xl text-blue-400 mb-2 font-bold">
        {postMeta.title}
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(postMeta.date).toLocaleDateString()}
      </p>

      <div className="prose prose-invert max-w-none mb-12">
        <ReactMarkDown>{markdown}</ReactMarkDown>
      </div>

      <Link
        to="/blog"
        className="inline-block text-white bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        ← Back to Posts
      </Link>
    </div>
  );
};

export default BlogPostDetailsPage;
