import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import About2 from "./components/About2";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import { LayoutGroup, useMotionValueEvent, useScroll } from "motion/react";
import Reviews from "./components/Reviews";

function App() {
  const [startMove, setStartMove] = useState(false);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setStartMove(latest > 0.356);
  });

  const [products, setProducts] = useState([
    {
      color: "Artic White",
      wishlist: false,
      cart: false,
    },
    {
      color: "Midnight Black",
      wishlist: false,
      cart: false,
    },
    {
      color: "Navy Blue",
      wishlist: false,
      cart: false,
    },
    {
      color: "Royal Purple",
      wishlist: false,
      cart: false,
    },
    {
      color: "Forest Green",
      wishlist: false,
      cart: false,
    },
    {
      color: "Sand Beige",
      wishlist: false,
      cart: false,
    },
    {
      color: "Blush Pink",
      wishlist: false,
      cart: false,
    },
    {
      color: "Sky Blue",
      wishlist: false,
      cart: false,
    },
  ]);

  return (
    <LayoutGroup>
      <div className="h-fit bg-white text-[#050505] selection:bg-[#c289c8]">
        <Hero />
        <About startMove={startMove} />
        <About2 startMove={startMove} />
        <Collections products={products} setProducts={setProducts} />
        <Reviews />
        <Footer />
      </div>
    </LayoutGroup>
  );
}

export default App;
