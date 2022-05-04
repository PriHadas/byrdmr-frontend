import { Children, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";

export const CarouselItem = ({ children }) => {
  return (
    <StyledCarouselItem style={{ width: "100%" }}>
      {children}
    </StyledCarouselItem>
  );
};

const Carousel = ({ children, mobile }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    const allChildren = Children.count(children);

    if (newIndex >= allChildren) {
      setActiveIndex(allChildren - 1);
      return;
    }

    setActiveIndex(newIndex < 0 ? 0 : newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <StyledCarousel {...handlers} mobile={mobile}>
      <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {children}
      </Inner>
      <div style={{ display: "flex" }}>
        {Children.map(children, (child, index) => {
          return (
            <Line index={index} active={activeIndex}
              onClick={() => {
                updateIndex(index);
              }}
            ></Line>
          );
        })}
      </div>
    </StyledCarousel>
  );
};

const StyledCarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #fff;
`;

const StyledCarousel = styled.div`
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.mobileSize+'px'}) {
    display: none;
  }
`;

const Inner = styled.div`
  transition: transform 0.3s;
  white-space: nowrap;
`;

const Line = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  margin-bottom: 5px;
  border-radius: 6px;
  position: relative;

  background-color: ${({ active, index }) =>
    active == index ? "#ec5a22" : "#d7d7d7"};
`;

export default Carousel;
