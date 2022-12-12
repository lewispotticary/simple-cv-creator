import React from 'react'

import styles from './profile.module.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function profile() {
  return (
    <div className={styles.profileContainer}>
        <h1>Profile</h1>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                aaaa
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
                </Typography>
                <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default profile