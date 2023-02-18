import { useState } from 'react'

import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'
import { PostType } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/caiolemedev.png",
      name: "Caio Leme",
      role: "Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.'},
      { type: 'link', content: 'jane.design/doctorcare'},
      { type: 'link', content: '#novoprojeto'},
      { type: 'link', content: '#nlw'},
      { type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-01-05 19:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.'},
      { type: 'link', content: 'jane.design/doctorcare'},
      { type: 'link', content: '#novoprojeto'},
      { type: 'link', content: '#nlw'},
      { type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-01-20 19:00'),
  }
];

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
    )
}