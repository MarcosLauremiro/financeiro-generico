import { Option } from "./Option"

export const Select = ({ name, id, valor, ...rest}) => {
    return(
        <select required className="text-1-style input-1-style" value={valor} name={name} id={id} {...rest}>
            <option value="">Tipo de valor</option>
            <Option value={'entrada'} text={'Entrada'}/> 
            <Option value={'saida'} text={'Saida'}/> 
        </select>
    )
}