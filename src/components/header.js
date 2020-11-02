import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function Header () {
  
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <CssBaseline />
      <AppBar
        position="fixed"
        color = "secondary"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Fire App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div >
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon /> 
          </IconButton>
        </div>
        <Divider />
        <List>
          
            <Link to = "/" >
              <ListItem button key={1}>
                <ListItemIcon> <InboxIcon /> </ListItemIcon>
                <ListItemText primary={"Map"} />
              </ListItem>
            </Link>
            
            <Link to = "/news" >
              <ListItem button key={2}>
                <ListItemIcon> <MailIcon /> </ListItemIcon>
                <ListItemText primary={"News"} />
              </ListItem>
            </Link>
            
            <Link to = "/guidelines" >
              <ListItem button key={3}>
                <ListItemIcon> <MailIcon /></ListItemIcon>
                <ListItemText primary={"Guidelines"} />
              </ListItem>
            </Link>
        </List>
      </Drawer>
      </div>
  );
  
  
}




export default Header;