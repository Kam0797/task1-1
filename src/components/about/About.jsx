import { useRef } from 'react'
import ScreenWrapper from '../reusables/screen-wrapper/ScreenWrapper'
import styles from './About.module.css'
import Section from '../reusables/section/Section'

export default function About() {

  const nameRef = useRef(null)
  const placeholderRef = useRef(null)

  function handleNext() {

  }

  return (
    <>
      <ScreenWrapper screenTitle='About' nextButtonText='Next' nextFunc={handleNext} >
        <input type='text' className='text-input' placeholder='Name' ref={nameRef} />
        <textarea className='text-input' placeholder='Description' ref={placeholderRef} />

        <Section sectionTitle='Upload Photos' sectionDesc='(Upto 5 photos)' >
          <div className={styles.uploadButtons}>
          <label htmlFor='photo1'>
              <div className={styles.photoUploadButton}>+</div>
            </label>
            <input className={styles.photo} type='file' id='photo1' />
            <label htmlFor='photo1'>
              <div className={styles.photoUploadButton}>+</div>
            </label>
            <input className={styles.photo} type='file' id='photo1' />
            <label htmlFor='photo1'>
              <div className={styles.photoUploadButton}>+</div>
            </label>
            <input className={styles.photo} type='file' id='photo1' />
          </div>
        </Section>

        <Section sectionTitle="Price" sectionDesc="" >
          <input type='text' className='text-input' step="0.01" min="0" placeholder='$0.00' />
        </Section>
      </ScreenWrapper>
    </>
  )
}