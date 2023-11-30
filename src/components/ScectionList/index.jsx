import { SectionStyled } from "../../styles/CardsStyled"
import { CardList } from "./CardList"

export const SectionCards = ({list, setList}) => {
    return(
        <SectionStyled>
            <h1 className="title-3-style">Resumo finaceiro</h1>
            {
                list.length > 0 ? <CardList list={list} setList={setList}/> : <h2 className="title-2-style">Você ainda não possui nenhum lançamento</h2>
            }
            
        </SectionStyled>
    )
}