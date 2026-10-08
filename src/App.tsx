import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero title="IronPeak Fitness" subtitle="Build strength that lasts" />
        <Services />
      </main>
    </>
  );
}