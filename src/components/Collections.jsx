import React, { useState } from "react";
import { motion } from "motion/react";

function Collections({ products, setProducts }) {
  const [clicked, setClicked] = useState(0);
  const [selected, setSelected] = useState("all");

  return (
    <div id="collections" className="w-full h-fit xl:px-30 lg:px-25 md:px-15 px-10 py-5">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium italic ">Our Collections</h1>
      <div className="h-0.75 w-50 bg-linear-to-r from-transparent via-[#E579F1] to-95% to-transparent "></div>
      <div className="flex flex-row gap-8 mt-5 lg:text-lg sm:text-base text-sm text-neutral-400 sm:mb-0 mb-5">
        <p
          onClick={() => setSelected("all")}
          className={
            selected == "all" ? "underline cursor-pointer" : "cursor-pointer"
          }
        >
          All
        </p>
        <p
          onClick={() => setSelected("wish")}
          className={
            selected == "wish" ? "underline cursor-pointer" : "cursor-pointer"
          }
        >
          Wishlist
        </p>
        <p
          onClick={() => setSelected("cart")}
          className={
            selected == "cart" ? "underline cursor-pointer" : "cursor-pointer"
          }
        >
          Cart
        </p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 xl:p-25 md:p-15">
        {selected == "all" &&
          products.map((p, idx) =>
            ItemBox(p, idx, products, setProducts, setClicked),
          )}

        {selected == "wish" &&
          products.map(
            (p, idx) =>
              p.wishlist && ItemBox(p, idx, products, setProducts, setClicked),
          )}

        {selected == "cart" &&
          products.map(
            (p, idx) =>
              p.cart && ItemBox(p, idx, products, setProducts, setClicked),
          )}
      </div>
    </div>
  );
}

function ItemBox(p, idx, products, setProducts, setClicked) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * idx }}
      onClick={() => setClicked(idx)}
      key={idx}
      className="border-neutral-300 border h-fit p-4 rounded-xl text-black"
    >
      <img
        src={`img${idx + 1}.png`}
        className="h-50 bg-neutral-200 px-10  mx-auto mb-2"
        alt=""
      />
      <div>
        <h1 className="text-lg font-medium">Aero AirDopes - {p.color}</h1>
        <p className="text-neutral-600 text-sm italic">
          Water Resistant, Noise Cancellation
        </p>
        <div className="flex flex-row gap-2 items-center">
          <p className="font-semibold text-2xl">&#8377;1540 </p>
          <p className="line-through">&#8377;2200</p>
          <div className="w-fit bg-[#E579F1] px-1 rounded mr-20">30% off</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() =>
              setProducts((prev) =>
                prev.map((product, i) =>
                  i === idx
                    ? {
                        ...product,
                        wishlist: !product.wishlist,
                      }
                    : product,
                ),
              )
            }
            fill={p.wishlist ? "#E579F1" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart text-neutral-400 cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </div>
        <div
          onClick={() =>
            setProducts((prev) =>
              prev.map((pro, i) =>
                idx == i ? { ...pro, cart: !pro.cart } : pro,
              ),
            )
          }
          className={`w-full bg-[#5A1865] mx-auto p-2 mt-4 text-center text-white cursor-pointer ${p.cart == true ? "bg-[#8b5c94]" : ""}`}
        >
          {p.cart ? "Added" : "Add to Cart"}
        </div>
      </div>
    </motion.div>
  );
}
export default Collections;
