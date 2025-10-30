import styles from "@/styles/components/Home/sectionTitle.module.scss"

function SectionTitle({ title }: { title: string }) {
  return <h2 className={styles.sectionTitle}>{title}</h2>
}

export default SectionTitle