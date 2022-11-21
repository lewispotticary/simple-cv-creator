import React from 'react'

import { Typography, Button } from '@mui/material';

import styles from './welcome.module.css';

import { motion } from 'framer-motion';

function welcome() {
  return (
    <div className={styles.welcomeContainer}>
      <motion.div animate={{ x: [-500, 100, 0] }} transition={{ ease: "easeOut", duration: 1 }}>
          <Typography fontFamily={'Trebuchet MS'} variant='h2'>Hi.</Typography>
      </motion.div>
      <motion.div animate={{ y: [1800, 100, 0] }} transition={{ ease: "easeOut", duration: 1, delay: 2 }}>
          <Typography fontFamily={'Courier New'} variant='h2'>Welcome to Simple CV Creator</Typography>
      </motion.div>
      <motion.div animate={{ x: [1000, 100, 0] }} transition={{ ease: "easeOut", duration: 1, delay: 4 }}>
          <div className={styles.startContainer}>
              <Button style={{ width: 500}} variant="contained">Create a CV</Button>
          </div>
      </motion.div>
    </div>
  )
}

export default welcome
