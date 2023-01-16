import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar} 
            src="https://github.com/caiolemedev.png" 
            alt="Foto do usuário" 
            />
            <div className={styles.authorInfo}>
              <strong>Caio Leme</strong>
              <span>Web Developer</span>
            </div>
        </div>

        <time
          dateTime='2023-01-15 11:30:00'
          title='15 de Janeiro de 2023 as 11:30'>
            Publicado há 1hr
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
      </div>
    </article>
  )
}