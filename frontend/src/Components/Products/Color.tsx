import styles from '@/styles/components/Product/colors.module.scss'
import { useState } from 'react';

type ColorProps = {
  colors: string[],
  onClick: (color: { hex: string; }) => void
}

function Colors({ colors, onClick }: ColorProps) {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  return (
    <div className={styles.colors}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={`${styles.colors__circle} ${color === selectedColor ? styles.active : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => {
            setSelectedColor(color);
            onClick({ hex: color });
          }}
        />
      ))}
    </div>
  )
}

export default Colors
