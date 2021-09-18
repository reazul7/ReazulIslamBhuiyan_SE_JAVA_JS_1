import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UserDashboardRoute from './UserDashboardRoute';
import { Link, useRouteMatch } from "react-router-dom";
import NavBar from '../Home/NavBar';

// IconBox
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    sidebar: true,
  });
  const { url } = useRouteMatch();


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const IconBox = [
      <DashboardIcon/>,
      <HomeIcon/>,
      <AddIcon/>,
      <LocalMallIcon/>,
      <MonetizationOnIcon/>
  ]

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Dashboard', 'Add Product', 'All Products', 'Orders'].map((text, index) => (
          <ListItem button key={text} 
          component={Link}
           to={url+`/${text.split(" ").join("-").toLocaleLowerCase()}`}>
            <ListItemIcon>
              {IconBox[index]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Settings'].map((text, index) => (
          <ListItem button key={text}
          component={Link}
           to={url+`/${text.split(" ").join("-").toLocaleLowerCase()}`}>
            <ListItemIcon>
                <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <NavBar />
      {['sidebar'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      <UserDashboardRoute/>
    </div>
  );
}
