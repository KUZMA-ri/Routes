import styles from './styles/catItem.module.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CatItem = () => {

    const { id } = useParams();
    const [cat, setCat] = useState(null);
    const navigate = useNavigate(null);

    const goBack = () => navigate(-1);

    useEffect(() => {
        axios.get(`https://serene-mesa-35124.herokuapp.com/files/cats/${id}.json`)
            .then((response) => {
                const cat = response.data;
                setCat(cat);
            })

    },[id]);


    return (
        <>
            <div className={styles.cat} id="cat">
                <div className={styles.cat_container}>
                    {cat && (
                        <>
                            <div className={styles.content}>
                                <img className={styles.cat_img} src={`https://serene-mesa-35124.herokuapp.com/files${cat.pic}`}/>
                                <h3 className={styles.cat_info}>{cat.bio}</h3>
                                <button 
                                    className={styles.btn_back}
                                    onClick={goBack}
                                    >Go back</button>
                            </div>
                        </>
                    )}                    
                </div>
            </div>
        </>
    )
}

export default CatItem;