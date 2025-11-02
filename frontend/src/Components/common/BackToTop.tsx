import { Button } from "antd";
import { BiArrowToTop } from "react-icons/bi";
import styles from "@/styles/components/common/backToTop.module.scss";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup عشان ميبقاش فيه memory leak
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
