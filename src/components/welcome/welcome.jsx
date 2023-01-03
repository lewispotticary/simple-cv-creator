import React from 'react'

import { Typography, Button } from '@mui/material';

import styles from './welcome.module.css';

import { motion } from 'framer-motion';

import { BrowserRouter } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

function welcome({displayMode}) {

  console.log("#" + displayMode.backgroundColour)

  return (
    <BrowserRouter>
      <div className={styles.welcomeContainer}>
        <div style={{backgroundColor: "#" + displayMode.backgroundColour, color: "#" + displayMode.fontColour}}>
            <motion.div animate={{ y: [1800, 100, 0]}} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
                <Typography fontFamily={'Courier New'} variant='h2'><b>Welcome </b>to Simple CV Creator.</Typography>
            </motion.div>
        </div>
        <motion.div animate={{ x: [1000, 100, 0] }} transition={{ ease: "easeOut", duration: 1, delay: 2 }}>
            <div className={styles.startContainer}>
                <HashLink style={{ textDecoration: 'none' }} smooth className="navLinks" to="#Profile"><Button style={{ width: 500}} variant="contained">Create a CV</Button></HashLink>
            </div>
        </motion.div>
      </div>
    </BrowserRouter>
  )
}

export default welcome;