import Feed from "../components/Feed/Feed";
import Head from "./Helper/Head";

export default function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Feed" />
      <Feed />
    </section>
  );
}
