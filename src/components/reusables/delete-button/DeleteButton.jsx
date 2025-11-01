import { LucideTrash2 } from 'lucide-react'
import styles from './DeleteButton.module.css'

export default function DeleteButton({setItems}) {


  return(
    <>
      <button className={styles.deleteButton} onClick={() => setItems(prev => prev.slice(0,-1))}>
        <LucideTrash2 />
      </button>
    </>
  )
}