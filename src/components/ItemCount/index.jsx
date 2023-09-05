
import { useState } from "react";
import style from "./style.module.css";

export function ItemCount({ onAdd, onRemove, selectedQty}) {
  
  /*
  const [itemCount, setItemCount] = useState(0);
  const estoqueTotal = 10;

  function addItem() {
    if(itemCount >= estoqueTotal) {
      alert('Sem mais itens em estoque!');
    } else {
      setItemCount(itemCount+1);
    }
    
  }

  function removeItem() {
    if (itemCount > 0) {
      setItemCount(itemCount-1);
    } else {
      alert('Item não pode ser menor que 0!');
    }
  }
  */
  return (
    <div className={style.container}>
        <div>
          <button className={style['btn-add-remove']} onClick={onRemove}>
            Remover Item
          </button>
        </div>
        <div>{selectedQty}</div>
        <div><button className={style['btn-add-remove']} onClick={onAdd}>
            Adicionar Item
          </button></div>
    </div>
  )
}
