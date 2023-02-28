import React from 'react'
import styles from  '../styles/index.module.css'
import { useRouter } from 'next/router'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Index = () => {
  const router = useRouter()
  return (
    <section className={styles.imageBackground}>
      <div className={styles.contentTitles}>
        <div>
          <h1 className={styles.m0}> By Bladimir</h1>
          <h4 className={styles.m0}>Diseñador UI/UX</h4>
          <div className={styles.dFlex} onClick={() => router.push('/dashboard')}>
            <h4 className={styles.m0}>Mis trabajos</h4>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </section>
  )
}
