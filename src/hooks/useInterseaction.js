import {  useEffect } from "react";

export const useIntersection = (elements, setSectionActive) => {

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };


  const elementsValues = Object.values(elements);

  useEffect(() => {
    elementsValues.forEach((element, position) => {
      const observer = new IntersectionObserver(([entry]) => {
        entry.isIntersecting && setSectionActive(position);
      }, options);

      element.current && observer.observe(element.current);
    });
  }, elementsValues);

};
