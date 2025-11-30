import "../ProducTable/ProductTable.css"

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Moviments } from "../../../types/Moviments";

type MovimentsTableProps = {
    movimentacao: Moviments[]
}

export default function MovimentsTable({movimentacao}: MovimentsTableProps ) {

    return (
        <section className="container__table">
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Item</th>
                        <th>Categoria</th>
                        <th>Tipo</th>
                        <th>Quantidade</th>
                        <th>Destino/Origem</th>
                        <th>Observações</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        movimentacao.length > 0 ? 
                        movimentacao.map((item) => 
                            <tr key={item.id}>
                                <td className="data__atualização">{item.data}</td>
                                <td className="Title__item">{item.item}</td>
                                <td className="texto__table__generico">{item.categoria}</td>
                                <td>
                                    <span
                                        className={  `tipo 
                                            ${item.tipo === "Entrada" ? "entrada" : "" }
                                            ${item.tipo === "Saída" ? "saida" : "" }
                                            `}>
                                            {item.tipo}
                                            </span>
                                            </td>
                                <td className="quantidade__table__generico">{item.quantidade}</td>
                                <td className="texto__table__generico">{item.destinoOrigem}</td>
                                <td>{item.observacoes}</td>
                                <td>
                                   <div className="acoes">
                                        <button className="btn-edit"><FiEdit/></button>
                                        <button className="btn-delete"><RiDeleteBin6Line/></button>
                                    </div>
                                    </td>

                            </tr>
                )   : (
                    <tr>
                        <td colSpan={8} style={{textAlign:"center"}}>Não há movimentações cadastradas!</td>
                    </tr>
                )
                    }
            </tbody>
        </table>
        </section >
    );
}