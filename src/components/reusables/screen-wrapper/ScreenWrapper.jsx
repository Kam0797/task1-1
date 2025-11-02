import { LucideChevronLeft, LucidePlusCircle } from 'lucide-react'
import styles from './ScreenWrapper.module.css'


export default function ScreenWrapper({screenTitle=null, nextButtonText="Next", nextFunc=null, backFunc=null, addFunc=null, children}) {
  
  
  return(
    <>
      <div className={styles.screenWrapper}>
        {screenTitle && <div className={styles.screenTitle}>{screenTitle}</div>}
        {backFunc && <button className={styles.backButton} onClick={()=> backFunc()}>{<LucideChevronLeft />}</button>}
        {addFunc && <button className={styles.backButton} onClick={()=> addFunc()}>{<LucidePlusCircle />}</button>}
        <div className={styles.contentAreaWrapper}>
          <div className={styles.contentArea}>
            {children}
          </div>
        </div>
        {nextFunc && <><button className={styles.nextButton} onClick={()=> nextFunc()}>{nextButtonText}</button><div className={styles.space}></div></>}
      </div>
    </>
  )
}