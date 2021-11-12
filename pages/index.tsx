import styles from '../styles/Inicio.module.css'
import Botao from '../components/Botao'
export default function Home() {
  return  (
    <div className={styles.wrapper}>
      <h1>Quiz</h1>
      <Botao texto='Jogar' href='/game' />
    </div>
  )
}
