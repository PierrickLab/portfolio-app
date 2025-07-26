import { About } from "../components/About";
import { Info } from "../components/Info";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { ThemeToggle } from "../components/ThemeToggle";
// import { StarBackground} from "@/components/StarBackground"
import { Footer } from "../components/Footer";


export const Home = () => {
  return <div className="min-h-screen bg-invert-pattern">

    {/* theme toggle */}
    <ThemeToggle />
    {/* Background effect */}
    {/* <StarBackground /> */}
    {/* Navbar */}
    <Navbar />
    {/* Main Content */}
    <main>
      <About />
      <Info />
      <Skills />
      <Projects />
      <Contact />
    </main>
    {/* Footer */}
    <Footer />

  </div>;
};
