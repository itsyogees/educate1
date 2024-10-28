import React from 'react'
import { Spinner } from 'react-spinners-css'
import styles from './Loading.module.scss'
const Loading = () => {
  return (
    <div className={styles.center}>
         <Spinner color="#000" />
    </div>
  )
}

export default Loading