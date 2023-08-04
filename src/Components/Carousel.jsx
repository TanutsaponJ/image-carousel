import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { Header } from "./Header.jsx";
import { Description } from "./Description";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [title, setTitle] = useState(0);
  const [description, setDescription] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
    setTitle(title === data.length - 1 ? 0 : title + 1);
    setDescription(description === data.length - 1 ? 0 : description + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
    setTitle(title === 0 ? data.length - 1 : title - 1);
    setDescription(description === 0 ? data.length - 1 : description - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />

      {data.map((item, i) => {
        return (
          <>
            <Header
              key={i}
              title={item.title}
              classNameHeader={title === i ? "title" : "title title-hidden"}
            />

            <img
              src={item.src}
              alt={item.alt}
              key={i}
              className={slide === i ? "slide" : "slide slide-hidden"}
            />
            <Description
              description={item.description}
              key={i}
              classNameDescription={
                description === i
                  ? "description"
                  : "description description-hidden"
              }
            />
          </>
        );
      })}

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={
                slide === i ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};
