import { useState } from "react";
import { GoPlay } from "react-icons/go";

const Carousel = () => {
  const content = [
    { img: "/images/jakevpaul.png", src: "https://vimeo.com/1025365469" },
    { img: "/images/jakevpaul.png", src: "https://vimeo.com/1023150048" },

    { img: "/images/proven.png", src: "https://vimeo.com/1023151062" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev == content.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev == 0 ? content.length - 1 : prev - 1));
  };
  return (
    <>
      <div className="relative h-[35rem] overflow-hidden w-full">
        <div className="absolute inset-0">
          <a href={content[currentIndex].src} target="_blank">
            <img
              src={content[currentIndex].img}
              className="object-cover w-full h-full cursor-pointer transition-transform duration-500"
            />
          </a>
        </div>

        <button
          onClick={handlePrev}
          className="absolute  text-5xl top-1/2 left-4 transform -translate-y-1/2  text-white px-4 py-2 rounded-full hover:opacity-75"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute text-5xl top-1/2 right-4 transform -translate-y-1/2  text-white px-4 py-2 rounded-full hover:opacity-75"
        >
          ❯
        </button>

        {/* Dots for navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {content.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>

        <div className="absolute text-9xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:opacity-75">
          <GoPlay />
        </div>
      </div>
    </>
  );
};

export default Carousel;

/*
import { useEffect, useState } from "react";
import { getCoverPhotos } from "../services/apiData";
import { useQuery } from "react-query";
import Skeleton from "./Skeleton";

function Carousel() {
  const {
    data: coverPhotos,
    error,
    isLoading,
  } = useQuery(["coverPhotos"], getCoverPhotos);
  const [curIndex, setCurIndex] = useState(0);
  // useEffect(() => {
  //   async function getCover() {
  //     const res = await getCoverPhotos();
  //     setCoverPhotos(res);
  //   }
  //   getCover();
  // }, []);

  const coverLinks = coverPhotos?.map((cov) => {
    return `https:${cov.fields.coverPhoto.fields.file.url}`;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((curIndex) => {
        return coverLinks ? (curIndex + 1) % coverLinks.length : 0;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [coverLinks]);

  if (isLoading)
    return (
      <div className="m-4">
        <Skeleton height={"28rem"} widht={"100%"} />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="my-8 h-[27rem] bg-cover bg-center rounded-2xl mx-[2vw]">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {coverLinks.map((cov, index) => {
            return (
              <>
                <img
                  src={cov}
                  className={`absolute left-0 top-0 object-cover h-full w-full transition-opacity duration-1000 ${curIndex == index ? "opacity-100" : "opacity-0"}`}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;

/////////
*/
