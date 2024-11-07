import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/app/resident/homepage/client"), {
  ssr: false,
});

export default function HomePage() {
  return <Home />;
}
