import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core'
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container>
          <Grid item style={{border: '1px solid #fff'}}>
            <InputBase />
          </Grid>
          <Grid item sm></Grid>
          <Grid item style={{border: '1px solid #000'}}>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={10} color='secondary'>
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
               <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
