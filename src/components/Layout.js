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
  Button,
} from "@material-ui/core";
import {
  BookOutlined,
  CodeOutlined,
  MenuOutlined,
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
      width: "100%",
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

//TODO:把側邊攔改為RWD 電腦出現手機隱藏
function Layout({ children }) {
  //控制商品抽屜開啟
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  //控制商品抽屜開啟
  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };
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
          <Button
            variant="outlined"
            color="secondary"
            onClick={toggleDrawer(true)}
          ><MenuOutlined /></Button>
          <Typography variant="h5" className={classes.title}>
            阿瑞的個人網站
          </Typography>
        </Toolbar>
      </AppBar>
      {/*side draw*/}

      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        className={classes.drawer}
        anchor="left"
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
              onClick={() => {
                History.push(item.path);
                setDrawerOpen(false);
              }}
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
