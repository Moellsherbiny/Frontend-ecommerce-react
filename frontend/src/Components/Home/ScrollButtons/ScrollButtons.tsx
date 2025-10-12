import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./scrollButtons.module.scss"
import { FaArrowRight } from "react-icons/fa6"
import { FaArrowLeft } from "react-icons/fa"

export function ScrollButtonForward({...props}:ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
      <button {...props} className={styles.scrollButton}>
        <FaArrowRight size={24} />
      </button>
    
  )
}


export function ScrollButtonBackward({...props}:ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
      <button {...props} className={styles.scrollButton}> 
        <FaArrowLeft size={24} />
      </button>

  )}

export function HorizontalScroll({children}:{children:ReactNode}){
    return(
      <div className={styles.scrollContainer}>
        {children}
      </div>
    )
}