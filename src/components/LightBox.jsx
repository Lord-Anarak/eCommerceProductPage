import React, { useState } from "react";
import { products } from "../constants";
import { close } from "../assets";

const LightBox = ({ onClose, imageIndex }) => {
  const [image, setImage] = useState(imageIndex);

  const imagePrev = () =>
    setImage(image === 0 ? products.length - 1 : image - 1);

  const imageNext = () =>
    setImage(image === products.length - 1 ? 0 : image + 1);

  return (
    <>
      <div className="bg-black bg-opacity-70 fixed top-0 left-0 w-full z-20">
        <div className="flex flex-col items-center justify-center h-screen gap-5 w-[500px] mx-auto">
          <div
            className="cursor-pointer w-full flex justify-end "
            onClick={onClose}
          >
            <img src={close} alt="close" />
          </div>

          <div className="relative">
            <button
              className="absolute top-56 -left-5 bg-white rounded-full w-10 h-10 font-bold flex items-center justify-center"
              onClick={imagePrev}
            >
              {"<"}
            </button>
            <button
              className="absolute top-56 -right-5 bg-white rounded-full w-10 h-10 font-bold flex items-center justify-center"
              onClick={imageNext}
            >
              {">"}
            </button>
            <img
              src={products[image].image}
              alt={products[image]}
              className="rounded-2xl"
            />
            <ul className="list-none flex gap-5 mt-5">
              {products.map(({ thumb }, index) => (
                <li
                  className="relative"
                  key={index}
                  onClick={() => setImage(index)}
                >
                  <img
                    src={thumb}
                    alt={index}
                    className={`${
                      image === index ? "border-[2px] border-primary" : ""
                    } rounded-xl`}
                  />
                  {image === index ? (
                    <span className="absolute top-0 z-20 w-full h-full rounded-xl bg-white opacity-40"></span>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightBox;
