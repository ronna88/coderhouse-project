
import { ItemList } from "../ItemList";
import style from "./style.module.css";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function ItemListContainer({items}) {
    const { categoryId } = useParams();

    return (
        <>
            <div className={style.container}></div>
            <br/>
            <ItemList categoryId={categoryId} items={items}/>
        </>
    );
}