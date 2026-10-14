import { Outlet } from "react-router";
import type { Route } from '../about/+types';


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lebo Sekaleli | Full Stack Developer" },
    { name: "description", content: "Portfolio Website for Lebo Sekaleli" },
  ];
}

const MainLayout = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-8">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
