import "./FormProduct.css"

  interface FormProductProps {
        onClose: () => void;
    }

export default function FormProduct({onClose}:FormProductProps) {


  return (
    <>
      <form action="">
        <fieldset>
          <legend>Novo Produto</legend>

          <div className="input__form__producs">
            <label htmlFor="">Produto</label>
            <select className="select__item" name="" id="">
              <option value="Produto 1">Produto 1</option>
              <option value="Produto 2">Produto 2</option>
            </select>
          </div>

          <div className="container__inputs__menores">
            <div className="input__menor">
              <label htmlFor="">Quantidade</label>
              <input type="number" defaultValue={0} min={0} />
            </div>

            <div className="input__menor">
               <label htmlFor="">Estoque Min</label>
                <input type="number" min={1} />
            </div>
          </div>

          <div className="box__buttons" >
            <button className="btn__cancelar">Cancelar</button>
            <button className="btn__adicionar">Adicionar Item</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
