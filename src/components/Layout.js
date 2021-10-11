import {
  Avatar,
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  BookOutlined,
  CodeOutlined,
  SubjectOutlined,
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import React from "react";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      margin: theme.spacing(2),
    },
  };
});

function Layout({ children }) {
  const History = useHistory();
  const classes = useStyle();
  const location = useLocation();
  const menuItems = [
    {
      text: "首頁",
      Icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "作品",
      Icon: <CodeOutlined color="secondary" />,
      path: "/work",
    },
    {
      Icon: <BookOutlined color="secondary" />,
      text: "迷你blog",
      path: "/blog",
    },
  ];

  return (
    <div className={classes.root}>
      {/*appbar */}
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar>
          <Avatar className={classes.avatar}></Avatar>
        </Toolbar>
      </AppBar>
      {/*side draw*/}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            阿瑞的個人網站
          </Typography>
        </div>
        {/*list /links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              className={location.pathname == item.path ? classes.active : null}
              onClick={() => History.push(item.path)}
            >
              <ListItemIcon>{item.Icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/*main context*/}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
