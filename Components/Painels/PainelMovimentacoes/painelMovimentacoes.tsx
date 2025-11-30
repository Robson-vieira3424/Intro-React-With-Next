
import "../painel.css";
import Card from "../../Card/Card";
import { LuActivity } from "react-icons/lu";
import { HiArrowCircleDown } from "react-icons/hi";
import { HiArrowCircleUp } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";

export default function(){
    return(
        <>
            <section className="painel">
                <section className="container__cards">
                    <Card icon={<LuActivity/>} title="Total movimentações" quantity="4" subtitle="registros no sistema"/>

                    <Card icon={<HiArrowCircleDown/>} title="Entradas" quantity="2" subtitle="itens recebidos"/>

                    <Card icon={<HiArrowCircleUp/>} title="Saídas" quantity="2" subtitle="itens distribuidos"/>
                    
                    <Card icon={<MdOutlineDateRange/>} title="Recentes" quantity="0" subtitle="ultimos 7 dias"/>
                </section>
            </section>
        </>
    )
}