import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}) {
  //usando desestruturação de objetos para as propriedades do componente
  //const hasBorder = props.hasBorder != false;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="Foto de perfil do usuário"
    />
  )
}