import styles from './Header.module.css'

export function Header () {
  return(
    //usamos como propriedade do objeto a mesma classe que usamos dentro do arquivo module.css
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
      </header>
  )
}