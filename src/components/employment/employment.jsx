import React from 'react'

import styles from './employment.module.css';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Popover from '@mui/material/Popover';

import InfoIcon from '@mui/icons-material/Info';

import { HashLink } from 'react-router-hash-link';

import ReplyIcon from '@mui/icons-material/Reply';

function Employment({displayMode}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

  return (
    <div className={styles.employmentContainer} id="Employment">
        <Card style={{ border: "1px solid" + "#" + displayMode.fontColour }} sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          margin: 0,
          marginBottom: 2,
          backgroundColor: "#" + displayMode.backgroundColour,
          color: "#" + displayMode.fontColour,
        }}>
          <Typography fontFamily={'Courier New'} variant='h4' sx={{ mr: 2 }}>2. Employment</Typography>
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
      <div className={styles.inputContainer}>
        <div className={styles.textFieldContainer}>
          <TextField
            sx={{backgroundColor: "#" + displayMode.backgroundColour}}
            inputRef={input => input && input.focus()}
            id="outlined-basic" 
            label="Profile" 
            variant="filled" 
            multiline
            fullWidth
            inputProps={{
            style: {
              height: "436px",
              color: "#" + displayMode.fontColour,
              border: 'white',
              padding: '5px',
            },
            }}
          /> 
        </div>
        <div className={styles.buttonContainer}>
            <Button style={{marginTop: '25px'}} variant="contained"><ReplyIcon style={{marginBottom: '3px', marginRight: '3px'}}/><div>Back</div></Button>
            <Button style={{marginTop: '25px'}} variant="contained">No employment, skip</Button>
            <Button style={{marginTop: '25px'}} variant="contained"><div>Next</div><ReplyIcon className={styles.icon} style={{marginBottom: '3px', marginLeft: '3px'}}/></Button>
        </div>
      </div>  
    </div>
  )
}

export default Employment