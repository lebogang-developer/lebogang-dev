import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lebo Sekaleli | Full Stack Developer" },
    { name: "description", content: "Portfolio Website for Lebo Sekaleli" },
  ];
}

export default function Home() {
  return <section>
  My App
  </section>;
}
