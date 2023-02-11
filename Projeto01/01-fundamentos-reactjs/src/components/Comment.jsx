import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0) //sempre iniciar com info do msm tipo

  function handleDeleteComment() {
    console.log("deletar")
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }


  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/caiolemedev.png" />

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

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>

        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}