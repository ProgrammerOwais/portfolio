import Header from "./components/Header";
import Mainsec from "./components/Mainsec";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const mainRef = useRef(null);
  const callBack = function () {
    return mainRef.current;
  };
  // console.log(callBack());

  return (
    <div className="parent">
      <Header pass={callBack}></Header>
      <main ref={mainRef}>
        <Mainsec></Mainsec>
        <Service></Service>
        <Skills></Skills>
        <Projects></Projects>
        <Experience></Experience>
        <Work></Work>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      {window.addEventListener("scroll", () => {
        var scrolling1 = document.querySelectorAll(".top"); // Access those elements which you wanna scroll
        var scrolling2 = []; // declare other variables as an array in order to get every element height from top

        for (let i = 0; i < scrolling1.length; i++) {
          // run below coding for every scrolling element
          scrolling2[i] = scrolling1[i].getBoundingClientRect().top; // get the height of every scroll element from top
          if (scrolling2[i] <= window.innerHeight * 0.75) {
            scrolling1[i].classList.add("topShow"); // At 3/4 or 75% from the top adding following classes to
          }
        }
      })}
    </div>
  );
}

export default App;
