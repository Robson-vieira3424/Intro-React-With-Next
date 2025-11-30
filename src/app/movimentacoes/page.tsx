'use client'
import { LuActivity } from "react-icons/lu";
import PageHeader from "../../../Components/PageHeader/PageHeader";
import "../global.css";
import PainelMovimentacoes from "../../../Components/Painels/PainelMovimentacoes/painelMovimentacoes";
import MovimentsTable from "../../../Components/Tables/MovimentsTable/MovimentsTable";
import { movimentacao } from "../../../testeLocal/Mocks";
import { useEffect, useState } from "react";
import { Moviments } from "../../../types/Moviments";
import axios from "axios";

export default function MovimentacoesPage() {

    const [listMoviments, setListMoviments]= useState<Moviments[]>([])

    const getListMoviments = async () => {
        
        const res = await axios.get("http:localhost:8080/moviments");
        const lista =  res.data as Moviments[];
        setListMoviments(lista);
    }

    useEffect( ()=> {
        getListMoviments();
    }, []
 )

   /* const criarMoviment = (e) =>{
    
    } */

    return (
        <>
            <PageHeader
                icon={<span className="Icone-Header"><LuActivity color="white" /></span>}
                title="Movimentações"
                subtitle="Histórico de entradas e saídas - Prefeitura Municipal de Penedo"
                buttonText="Nova Movimentação"
                onButtonClick={() => alert("Adicionar item")}
            />

            <PainelMovimentacoes />
            <MovimentsTable  movimentacao={listMoviments} />
        </>
    );
}