'use client';

import { BsBoxSeam } from "react-icons/bs";
import PageHeader from "../../../Components/PageHeader/PageHeader";
import ProductTable from "../../../Components/Tables/ProducTable/ProductTable";
import "../global.css";
import PainelProducts from "../../../Components/Painels/PainelProducts/painelProducts";

export default function EstoquePage() {
    return (
        <>
            <PageHeader
                icon={<span className="Icone-Header"><BsBoxSeam /></span>}
                title="Estoque de Produtos"
                subtitle="Departamento de Tecnologia - Prefeitura Municipal de Penedo"
                buttonText="Adicionar Item"
                onButtonClick={() => alert("Adicionar item")}
            />
            <PainelProducts />
            <ProductTable />
        </>
    );
}