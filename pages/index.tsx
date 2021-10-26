import { useState } from 'react'
import Botao from '../components/Botao'
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

  function tempoEsgotado() {
    if(questao.naoRespondida){
      setQuestao(questao.responderCom(-1))
    }
  }

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Questao valor={questao} 
         tempoResposta={5}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
      <Botao texto='Proxima' href='/resultado'/>
    </div>
  )
}
