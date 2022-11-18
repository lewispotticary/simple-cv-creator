import React from 'react'

import { Typography, Button } from '@mui/material';

import styles from './welcome.module.css';

function welcome() {
  return (
    <div className={styles.welcomeContainer}>
      <Typography fontFamily={'Trebuchet MS'} variant='h2'>Hi.</Typography>
      <Typography fontFamily={'Courier New'} variant='h2'>Welcome to Simple CV Creator.</Typography>
      <div className={styles.startContainer}>
        <Button style={{ width: 500}} variant="contained">Start</Button>
      </div>
    </div>
  )
}

export default welcome
