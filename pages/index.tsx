import { useState } from 'react'
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMoc = new QuestaoModel(1, 'Melhor cor', [
  RespostaModel.errada('VERDE'),
  RespostaModel.errada('AZUL'),
  RespostaModel.errada('VERMELHO'),
  RespostaModel.certa('PRETO'),
])


export default function Home() {
  const [questao, setQuestao] = useState(questaoMoc)
  function respostaFornecida(indice: number) {
    console.log(indice)
    setQuestao(questao.responderCom(indice))
  }
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Questao valor={questao} respostaFornecida={respostaFornecida}/>
    </div>
  )
}
