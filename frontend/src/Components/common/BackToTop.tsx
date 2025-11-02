import { Button } from "antd";
import { BiArrowToTop } from "react-icons/bi";
import styles from "@/styles/components/common/backToTop.module.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const location = useLocation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  useEffect(() => {
    scrollToTop();
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={styles.backToTop}
      style={{ display: showBtn ? "flex" : "none" }}
    >
      <BiArrowToTop />
    </Button>
  );
};

export default BackToTop;
