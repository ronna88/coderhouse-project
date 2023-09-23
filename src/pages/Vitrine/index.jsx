import { Link } from "react-router-dom";
import style from "./styles.module.css";
import imgMasc from '../../assets/masc.jpeg';
import imgFem from '../../assets/fem.jpeg';

export function Vitrine() {
    return (
        <div className={style.container}>
            <div>
                <h3>COMPRE POR CATEGORIA</h3>
            </div>
            <div className={style.categories}>
                <div>
                    <Link to="/category/1">
                        <div className={style.masc} >
                            <img className={style.logo} src={imgMasc} alt=""/>
                            Roupas Masculinas
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/category/2">
                        <div className={style.masc} >
                            <img className={style.logo} src={imgFem} alt=""/>
                            Roupas Femininas
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}