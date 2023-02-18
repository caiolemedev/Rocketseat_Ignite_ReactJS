import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  //usando desestruturação de objetos para as propriedades do componente
  //const hasBorder = props.hasBorder != false;
  //...props é o rest operator que permite capturar todas as demais propriedades

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props} //spread operator
    />
  )
}