import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg' //importação das imagens é via JS

export function Header () {
  return(
    //usamos como propriedade do objeto a mesma classe que usamos dentro do arquivo module.css
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      </header>
  )
}