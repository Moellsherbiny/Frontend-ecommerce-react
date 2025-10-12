import { useRef, useState, useEffect } from "react";

export const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null) ;
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
        console.log(scrollRef.current.scroll);
        
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScrollPosition(); // أول مرة
    container.addEventListener("scroll", checkScrollPosition);

    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return {
    scrollRef,
    isAtStart,
    isAtEnd,
    scroll,
  };
};
