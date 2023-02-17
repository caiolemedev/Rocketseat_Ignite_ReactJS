import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { LineSegment } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import {Comment} from './Comment'
import styles from './Post.module.css'

interface postProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export function Post({author, publishedAt, content}: postProps) {

  const [comments, setComments] = useState(['Post muito bacana, hein!?'])

  const [newCommentText, setNewCommentText] = useState('') //iniciar no mesmo formato da informação armazenada

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR,})

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{locale: ptBR, addSuffix: true})

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentValid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length == 0 //clean code para manutenção

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
        </div>

        <time
          dateTime={publishedAt.toString()}
          title={publishedDateFormated}>
            {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>
        <textarea
          name='comment' 
          placeholder="Deixe aqui um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentValid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}