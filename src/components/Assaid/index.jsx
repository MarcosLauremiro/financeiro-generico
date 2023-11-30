import { useState } from "react"
import { Form } from "./Form"
import { ValorAll } from "./ValorAll"
import { AsideStaled } from "../../styles/AsaidStyled"

export const Assid = ({list, setList}) => {
    const sumValue = list.reduce((acc, sum) => {
        if(sum.type == 'saida'){
            return acc - sum.value
        }else{
            return acc + sum.value
        }
    },0)

    return(
        <AsideStaled >
            <Form list={list} setList={setList}/>
            <ValorAll value={sumValue} list={list}/>
        </AsideStaled>
    )
}