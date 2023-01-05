import React from 'react'

import styles from './profile.module.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Popover from '@mui/material/Popover';

import InfoIcon from '@mui/icons-material/Info';

import { alpha, styled } from '@mui/material/styles';

function Profile({displayMode}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

    const ValidationTextField = styled(TextField)({
      '& input:valid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
        borderColor: 'white',
      },
    });

  return (
    <div className={styles.profileContainer} id="Profile">
      <Card sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          margin: 0,
          marginBottom: 1,
          backgroundColor: "#" + displayMode.backgroundColour,
          color: "#" + displayMode.fontColour,
        }}>
          <Typography fontFamily={'Courier New'} variant='h4' sx={{ mr: 2 }}>Profile</Typography>
          <InfoIcon
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
            </InfoIcon>
    

      </Card>
        
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
          <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
        <Card sx={{ minWidth: 275, height: 500, backgroundColor: "#" + displayMode.backgroundColour, color: "#" + displayMode.fontColour}}>
            <CardContent>
            <TextField
            id="outlined-basic" 
            label="Profile" 
            variant="outlined"
            multiline
            fullWidth
            inputProps={{
            style: {
              height: "435px",
              color: 'white',
              borderColor: 'white',
            },
        }}
  />
            
            </CardContent>
        </Card>
    </div>
  )
}

export default Profile