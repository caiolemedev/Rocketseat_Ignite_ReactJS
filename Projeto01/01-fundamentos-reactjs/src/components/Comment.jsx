import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://github.com/caiolemedev.png"
        alt="Foto de perfil do usuário"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caio Leme</strong>
              <time
                dateTime='2023-01-15 11:30:00'
                title='15 de Janeiro de 2023 as 11:30'>
                Cerca de 1hr atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon parabéns!</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}