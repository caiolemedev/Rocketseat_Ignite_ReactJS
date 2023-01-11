import { useState } from 'react'
import { Header } from '../components/Header'
import {Post} from './Post'
import './global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Post 
        author="Caio Leme" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure reprehenderit eaque quidem excepturi suscipit natus, amet officiis, aut nemo aspernatur labore ullam illo unde quo dolorum consequatur qui rem."
      />
      <Post
        author="José Silva"
        content="Um post muito legal!!" 
      />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
    )
}