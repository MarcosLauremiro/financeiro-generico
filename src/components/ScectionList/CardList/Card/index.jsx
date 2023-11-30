export const Card = ({ listItens, delet, typeColor}) => {     

    return(
        <li className={typeColor}>
            <div className="side_left">
                <h2 className="title-3-style">{listItens.descript}</h2>
                <span className="text-2-style"> {listItens.type} </span>
            </div>
            <div className="side_right">
                <span className="text-1-style"> {Number(listItens.value).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })} </span>
                <button className="text-3-style" onClick={() => delet(listItens.id)}> Excluir </button>
            </div>
        </li>
    )
}