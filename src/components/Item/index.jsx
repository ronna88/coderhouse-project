import { Link } from "react-router-dom";
import style from "./styles.module.css";
// eslint-disable-next-line react/prop-types
export function Item({ items }) {

    return (
        <>
            <div className={style.container}>
                {
                    // eslint-disable-next-line react/prop-types
                    items.map(item =>
                        <div className={style.content} key={item.id}>
                            <ul className={style.card}>
                                <Link to={`/item/`+item.id}>
                                    <li><img src={item.image} className={style.image}/></li>
                                    <li>{item.title}</li>
                                    <li>{`R$ ${item.price}`}</li>
                                </Link>
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    )
}
