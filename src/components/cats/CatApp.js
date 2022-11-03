import React, 
    { useState,
      useEffect, 
      useCallback}  from "react";
import axios from 'axios';
import styles from './catApp.module.css';
import Catlist from "./components/CatList";
import CatDetails from "./components/CatDetails";
import Search from './components/Search';

const url = 'https://serene-mesa-35124.herokuapp.com/files/cats/list.json';
const url2 = 'https://serene-mesa-35124.herokuapp.com/files';

const CatApp = () => {
const [cats, setCats] = useState(null);          
const [selectedCat, setSelectedCat] = useState(null);
const [catsDetails, setCatsDetails] = useState(null);

const [inputValue, setInputValue] = useState()

// ------------------------------------------------------------
const toBuy = useCallback((id) => {                 
  const selectedCat = cats.filter(cat => {

    if(cat.id === id) {
      return cat
    }
    return null;
  })
  setSelectedCat(selectedCat[0].more);
}, [cats]);
// ----------------------------------------------------------------------------------------------------------------------------

const removeCat = (id, event) => {
  const newArrCats = [...cats];

  const onDelete =  newArrCats.filter((cat) => {
    if(cat.id === id) {
      return cat;
    }
    return null 
  })

  if(event.target.innerText === "Пометить на удаление") {
    newArrCats.push(onDelete[0]);
    newArrCats.splice(newArrCats.indexOf(onDelete[0]), 1);
    event.target.innerText = "Снять пометку";
    event.target.parentNode.parentNode.parentNode.style.opacity = "0.5";    
  }

  else {
    newArrCats.splice(newArrCats.indexOf(onDelete[0]), 1);
    newArrCats.unshift(onDelete[0]);
    event.target.innerText = "Пометить на удаление";
    event.target.parentNode.parentNode.parentNode.style.opacity = "1";
  }
  setCats(newArrCats)
};
// -----------------------------------------------------------------------------------------------------------------------------

useEffect(() => {               
  axios.get(`${url}`)
  .then((response) => {
    const cats = response.data.data;
    setCats(cats)
  })
},[]);

// -------------
useEffect(() => {                  
  if(selectedCat !== null) {      
    fetchData(selectedCat)
  }
}, [selectedCat]);

// ------------

useEffect(() => {
  return () => {       
    console.log('отписка');
  }
}, []);

// ----------------------------------------
// const isMobile = useIsMobile();
// useEffect(() => {
//   isMobile ? console.log('Mobile version') : console.log('Desctop version');
// }, [isMobile])
// ----------------------------------------

const fetchData = (path) => {
  axios.get(`${url2}${path}`)
  .then((response) => {
    const catsDetails = response.data;
    setCatsDetails(catsDetails)
  })
}
// ------------------------------------------------------------------------
const filterCats = () => {
  if(cats) {
    let copyCats = [...cats];     
    if(inputValue) {
      let filterCats = copyCats.filter((cat) => {
        return cat.name.toLowerCase().includes(inputValue.toLowerCase());
      })
      return filterCats
    }
  }
}

const filteredCats = filterCats();
// ------------------------------------------------------------------------

  if (!cats) {
    return(
      <div className={styles.loader_container}>
        <div className={styles.loader}></div>
      </div>
    )
  }

  return (
    <div className = {styles.app}>
      <Search onChange={(e) => setInputValue(e.target.value)}/>
      <div className={styles.mainBlock}>
        <Catlist cats={ filteredCats ? filteredCats : cats } toBuy = {toBuy} removeCat={removeCat}/>
              {/* условный рендеринг */}
      {catsDetails && (
        <CatDetails catsDetails={catsDetails} url={url2}/>
      )}
      </div>
    </div>
  )
}
export default CatApp;