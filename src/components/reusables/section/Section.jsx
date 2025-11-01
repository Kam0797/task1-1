import { useState } from 'react'
import styles from './Section.module.css'

export default function Section({sectionTitle, sectionDesc, child, addChild, addButtonLabel, children}) {

  const [items, setItems] = useState([]);

  function addChild(child) {
    setItems(prev => [...prev, child])
  }

  return(
    <>
    <div className={styles.sectionWrapper}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionTitle}>{sectionTitle}</div>
          <div className={styles.sectionDesc}>{sectionDesc}</div>
          <button className={styles.actionButton} onClick={()=> addChild(child)}>{addButtonLabel}</button>
        </div>
        <div className={styles.sectionContent}>
          {children ?? items.map((index,item) => <input type='text' key={index} value={item} onInput={(e)=>setItems(prev => prev.map((index,item)=> {if(e.target.key == index) return e.target.value; else return item}))}/>)}
        </div>
      </div>
    </>
  )
}