import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "@/styles/components/Home/scrollButtons.module.scss"
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

type ScrollButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isAtEnd?: boolean
  isAtStart?: boolean
};


export function ScrollButtonForward({isAtEnd, ...props}:ScrollButtonProps) {
  return (
      <button {...props} className={`${styles.scrollButton} ${isAtEnd ? "": styles.active}`}>
        <IoArrowForward size={24} />
      </button>
    
  )
}


export function ScrollButtonBackward({isAtStart, ...props}:ScrollButtonProps) {
    return (
      <button {...props} className={`${styles.scrollButton} ${isAtStart ? "" : styles.active}`}>
        <IoArrowBack size={24} />
      </button>

  )}

export function HorizontalScroll({children}:{children:ReactNode}){
    return(
      <div className={styles.scrollContainer}>
        {children}
      </div>
    )
}