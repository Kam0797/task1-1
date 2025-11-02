import { useContext } from 'react'
import styles from './Card.module.css'
import { Context } from '../../../Context'

export default function Card({path=null, desc="A cool Product", price, id=null}) {

  const {setScreen} = useContext(Context)

  function handleNav() {
    console.log("id",id)
    if (!id) return
    sessionStorage.setItem("activeID", id)
    console.log("SS:", sessionStorage.getItem("activeID"))
    setScreen("product")
  }

  return(
    <>
      <div className={styles.cardWrapper} onClick={()=>handleNav()}>
        <div className={styles.imageWrapper}>
          <div className={`price-badge ${styles.priceOnCard}`} style={{color: "#2f3445", backgroundColor: "#fff", padding: "0.5rem 1rem 0.3rem 0.5rem", fontWeight: "900"}} >{`$${price}`} </div>
          <img src={path} alt='A cool Prod' className={styles.image}  />
        </div>
        <div className={styles.cardDescription}>{desc}</div>
      </div>
    </>
  )
}