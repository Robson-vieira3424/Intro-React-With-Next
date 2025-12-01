'use client';

import { BsBoxSeam } from "react-icons/bs";
import PageHeader from "../../../Components/PageHeader/PageHeader";
import ProductTable from "../../../Components/Tables/ProducTable/ProductTable";
import "../global.css";
import PainelProducts from "../../../Components/Painels/PainelProducts/painelProducts";
import { useState } from "react";
import Modal from "../../../Components/Modal/Modal";
import FormProduct from "../../../Components/Forms/FormProduct/FormProduct";

export default function EstoquePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleCloseModal = () => {
    setIsModalOpen(false);
  };
    return (
        <>
            <PageHeader
                icon={<span className="Icone-Header"><BsBoxSeam /></span>}
                title="Estoque de Produtos"
                subtitle="Departamento de Tecnologia - Prefeitura Municipal de Penedo"
                buttonText="Adicionar Item"
                onButtonClick={() => setIsModalOpen(true)}
            />
            <PainelProducts />
            <ProductTable />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <FormProduct onClose={handleCloseModal} />
                  </Modal>
        </>
    );
}