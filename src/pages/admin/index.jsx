import { useState } from "react";
import style from "./styles.module.css";
import {addDoc, collection, getFirestore} from "firebase/firestore"
import app from "../../services/firebase"
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";

export function Admin() {
    const [categoryId, setCategoryId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
  

    const firestore = getFirestore(app)

    const cadastrarProduto = () => {
        event.preventDefault();
        const novoProduto = {
            categoryId,
            title,
            description,
            image,
            price: parseFloat(price),
            stock: parseInt(stock)
        }
        console.log(novoProduto);

       addDoc(collection(firestore, "produtos"), novoProduto)
       .then((docRef) => {
        console.log(docRef.id);
       })

       setCategoryId('');
       setTitle('');
       setDescription('');
       setImage('');
       setPrice('');
       setStock('');
    }

    const handleImageUpload = async (event) => {
        const imageFile = event.target.files[0];

        const storage = getStorage(app);

        if(imageFile) {
            const storageRef = ref(storage, "images/"+imageFile.name);
            try {
                const imageShot = await uploadBytes(storageRef, imageFile);
                const imageUrl = await getDownloadURL(imageShot.ref);
                setImage(imageUrl);
            }catch(e) {
                console.log(e);
            }
        }
    }

    return (
        <div className={style.container}>
            <form className={style.form}>
                <input type="text" placeholder="Categoria ID" className={style.input} onChange={(e) => setCategoryId(e.target.value)} value={categoryId}/>
                <input type="text" placeholder="Titulo" className={style.input} onChange={(e) => setTitle(e.target.value)} value={title}/>
                <input type="text" placeholder="Descrição" className={style.input} onChange={(e) => setDescription(e.target.value)} value={description}/>
                <input type="file" className={style.input} onChange={handleImageUpload}/>
                <input type="text" placeholder="Preço" className={style.input} onChange={(e) => setPrice(e.target.value)} value={price}/>
                <input type="text" placeholder="Estoque" className={style.input} onChange={(e) => setStock(e.target.value)} value={stock}/>
                <button onClick={cadastrarProduto} className={style.btnCadastrar} >Cadastrar</button>
            </form>
        </div>
    )
}