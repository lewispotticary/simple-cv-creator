import React from 'react'

import { Typography, Button } from '@mui/material';

import styles from './welcome.module.css';

import { motion } from 'framer-motion';

function welcome({displayMode}) {

  console.log("#" + displayMode.backgroundColour)

  return (
    <div className={styles.welcomeContainer}>
      <div style={{backgroundColor: "#" + displayMode.backgroundColour, color: "#" + displayMode.fontColour}}>
          <motion.div animate={{ y: [1800, 100, 0] }} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
              <Typography fontFamily={'Courier New'} variant='h2'><b>Welcome </b>to Simple CV Creator.</Typography>
          </motion.div>
      </div>
      <motion.div animate={{ x: [1000, 100, 0] }} transition={{ ease: "easeOut", duration: 1, delay: 2 }}>
          <div className={styles.startContainer}>
              <Button style={{ width: 500}} variant="contained">Create a CV</Button>
          </div>
      </motion.div>
    </div>
  )
}

export default welcome;