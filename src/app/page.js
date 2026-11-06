
// import Navbar from "@/components/Navbar";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen pt-32">
//         <section id="home" className="container-width">
//           <h1 className="text-5xl font-bold">
//             Welcome to my <span className="gradient-text">Portfolio</span>
//           </h1>

//           <p className="mt-5 text-gray-400">
//             Junior Full Stack Web Developer
//           </p>
//         </section>
//       </main>
//     </>
//   );
// }



import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "./About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
