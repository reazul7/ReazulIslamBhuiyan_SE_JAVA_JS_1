import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, useRouteMatch } from "react-router-dom";
import UserDashboardTopBar from "./UserDashboardTopBar";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import DashboardRoute from "./DashboardRoute";
import DashboardLogo from "../../images/dashboard-logo.png";

// Icon
import HomeIcon from "@material-ui/icons/Home";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import QueueIcon from "@material-ui/icons/Queue";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const drawerWidth = 240;

// Custom Style for Material UI Drawer
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function DashboardSidebar(props) {
  const { url } = useRouteMatch();
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [ setLoggedInUser ] = useContext(UserContext);

  let history = useHistory();  

  const handleSignOut = () => {
    setLoggedInUser({});
    history.push("/");
  }


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

// sidebar
  const IconBox1 = [
    <HomeIcon />,
    <LocalMallIcon />,
    <LocalGroceryStoreIcon />,
    <QueueIcon />
  ];

  const IconBox2 = [<SettingsIcon />, <LocalOfferIcon />];
  const drawer = (
    <div>
      <Link to="/">
        <img
          src={DashboardLogo}
          alt="Sweet iTech"
          className="object-scale-down h-9 w-full my-1.5 mb-0"
        />
      </Link>
      <br />
      
      {/* top sidebar */}
      <Divider />
      <List>
        {[
          "Dashboard",
          "All Products",
          "Add Product",
          "Update Product",
        ].map((text, index) => (
          <ListItem
            key={text}
            component={Link}
            to={url + `/${text.split(" ").join("-").toLocaleLowerCase()}`}
          >
            <ListItemIcon>{IconBox1[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />
      <Divider />

      {/* middle sidebar */}
      <List>
        {["Settings"].map((text, index) => (
          <ListItem
            key={text}
            component={Link}
            to={url + `/${text.split(" ").join("-").toLocaleLowerCase()}`}
          >
            <ListItemIcon>{IconBox2[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {["Home Page"].map((text, index) => (
          <ListItem
            key={text}
            component={Link}
            to="/"
          >
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
      <Divider />
      <Divider />

      {/* bottom sidebar*/}
      <List>
        {["Logout"].map((text, index) => (
          <ListItem
            key={text}
            component={Link}
            to={url + `/${text.split(" ").join("-").toLocaleLowerCase()}`}
            onClick={handleSignOut}
          >
            <ListItemIcon><ExitToAppIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Top App Bar */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <UserDashboardTopBar />
          <Typography variant="h6" noWrap></Typography>
        </Toolbar>
      </AppBar>


      {/* Material UI Drawer */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      

      {/* Sidebar Router */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <DashboardRoute />
      </main>
    </div>
  );
}

DashboardSidebar.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default DashboardSidebar;
