import styles from './ScreenWrapper.module.css'


export default function ScreenWrapper({screenTitle="fook", nextButtonText="Next", nextFunc, children}) {
  console.log("FFFFFFFFF", styles)
  
  
  return(
    <>
      <div className={styles.screenWrapper}>
        <div className={styles.screenTitle}>{screenTitle}
          <button className={styles.backButton}>{'<'}</button>
        </div>
        <div className={styles.contentAreaWrapper}>
          <div className={styles.contentArea}>
            {children}
          </div>
        </div>
        <button className={styles.nextButton} onClick={nextFunc}>{nextButtonText}</button>
      </div>
    </>
  )
}