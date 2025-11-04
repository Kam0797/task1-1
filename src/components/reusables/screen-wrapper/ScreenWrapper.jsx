import { LucideChevronLeft, LucidePlusCircle } from 'lucide-react'
import styles from './ScreenWrapper.module.css'


export default function ScreenWrapper({screenTitle=null, nextButtonText="Next", nextFunc=null, backFunc=null, addFunc=null, children}) {
  
  
  return(
    <>
      <form className={styles.screenWrapper} onSubmit={(e)=>nextFunc(e)}>
        {screenTitle && <div className={styles.screenTitle}>{screenTitle}</div>}
        {backFunc && <button className={styles.backButton} onClick={()=> backFunc()}>{<LucideChevronLeft />}</button>}
        {addFunc && <button className={styles.backButton} onClick={()=> addFunc()}>{<LucidePlusCircle />}</button>}
        <div className={styles.contentAreaWrapper}>
          <div className={styles.contentArea}>
            {children}
          </div>
        </div>
        {nextFunc && <><button type="submit" className={styles.nextButton} >{nextButtonText}</button><div className={styles.space}></div></>}
      </form>
    </>
  )
}