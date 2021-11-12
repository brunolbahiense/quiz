import styles from '../styles/Questionario.module.css'
import Questao from './Questao';
import QuestaoModel from "../model/questao";
import Botao from './Botao';

interface QuestionarioProps{
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irAoProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number){
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return(
        <div className={styles.questionario}> 
            {props.questao ? 
                <Questao 
                    valor={props.questao}
                    tempoResposta={20}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irAoProximoPasso}/>
                : false
            }
                <Botao 
                    onClick={props.irAoProximoPasso} 
                    texto={props.ultima ? 'Finalizar' : 'Proximo'} 
                />
                
        </div>
    )
}