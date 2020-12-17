import React from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/styles"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import Close from "@material-ui/icons/Close"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import links from "../data/Menu"
import {
  Box,
  Collapse,
  ListSubheader,
  useScrollTrigger,
} from "@material-ui/core"
import { ExpandMore, ChevronRight } from "@material-ui/icons"

const uni_logo = require("../images/university_logo.png")

const Menubar = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [nOpen, setNOpen] = React.useState(-1)
  const trigger = useScrollTrigger({ threshold: 160 })

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <AppBar
        className={[classes.menu, !trigger ? "MuiAppBar-positionSticky" : ""]}
      >
        <div className={classes.menubar}>
          <ul className={classes.lists}>
            {links.map(({ path, title, subMenu, megaMenu }) => (
              <li
                key={title}
                className={`${classes.list} ${
                  subMenu && classes.subMenuWrapper
                } ${megaMenu && classes.megaMenuWrapper}`}
                style={subMenu && { position: "relative" }}
              >
                {subMenu || megaMenu ? (
                  <span className={classes.link}>{title}</span>
                ) : (
                  <Link to={path} className={classes.link}>
                    {title}
                  </Link>
                )}
                {subMenu && (
                  <ul className={classes.sublists}>
                    {subMenu.map(menu => (
                      <li className={classes.sublist} key={menu}>
                        <Link
                          to={menu.toLowerCase().replace(" ", "-")}
                          className={classes.sublink}
                        >
                          {menu}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {/* {megaMenu && <Megamenu style={classes.megaMenu} linkStyle={classes.sublink} data={megaMenu}/>} */}
              </li>
            ))}
          </ul>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{ fontSize: 48 }} />
          </IconButton>
          <div
            className={classes.drawerFooterContent}
            style={{ opacity: trigger ? 1 : 0 }}
          >
            <img src={uni_logo} className={classes.miniLogo} alt="logo" />
            <Box fontSize="h5.fontSize" fontWeight="bold" flexGrow={1}>
              Primeasia University
            </Box>
          </div>
        </div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List
          component="nav"
          subheader={
            <ListSubheader className={classes.subBar} component="div">
              Menus
            </ListSubheader>
          }
        >
          <Divider />
          {links.map(({ title, subMenu }, idx) => (
            <>
              <List>
                <ListItem
                  button
                  key={title}
                  onClick={() =>
                    setNOpen(nOpen !== idx || nOpen === -1 ? idx : -1)
                  }
                >
                  {subMenu.length > 0 &&
                    (nOpen === idx ? <ExpandMore /> : <ChevronRight />)}
                  <ListItemText primary={title} />
                </ListItem>
                {subMenu.map(sub => (
                  <Collapse in={nOpen === idx} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary={sub} />
                      </ListItem>
                    </List>
                  </Collapse>
                ))}
              </List>
              <Divider />
            </>
          ))}
        </List>
        <div className={classes.drawerFooter}>
          <div className={classes.drawerFooterContent}>
            <img src={uni_logo} className={classes.miniLogo} alt="logo" />
            <Box fontSize="h5.fontSize" fontWeight="bold" flexGrow={1}>
              Primeasia University
            </Box>
            <IconButton color="inherit" onClick={handleDrawerClose}>
              <Close />
            </IconButton>
          </div>
        </div>
      </Drawer>
    </>
  )
}
const drawerWidth = "100%"
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  menu: {
    backgroundColor: "#963a5e",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  subBar: {
    backgroundColor: "#fff",
  },
  appBarShift: {
    width: `100%`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  miniLogo: {
    width: 40,
    height: 40,
    padding: "2px 4px",
    marginRight: 4,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "&:after": { paddingBottom: 64 },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerFooter: {
    display: "flex",
    alignItems: "flex-end",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  drawerFooterContent: {
    backgroundColor: "#963a5e",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    width: "100%",
    ...theme.mixins.toolbar,
    color: "#fff",
    justifyContent: "flex-start",
    transition: "all 0.2s ease-in",
    display: "none",
    "@media (max-width: 920px)": {
      display: "flex",
    },
  },
  menubar: {
    display: "flex",
    justifyContent: "center",
    transition: "all .2s linear",
    width: "100%",
    "@media (max-width: 920px)": {
      justifyContent: "flex-start",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hide: {
    display: "flex",
  },
  menuButton: {
    padding: 5,
    marginLeft: theme.spacing(2),
    display: "none",
    "@media (max-width: 920px)": {
      display: "flex",
    },
  },
  lists: {
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 920px)": {
      display: "none",
    },
  },
  list: {
    fontSize: 18,
    margin: "0 .2rem",
    padding: "1rem .5rem",
  },
  nested: {
    paddingLeft: theme.spacing(6),
  },
  subMenuWrapper: {
    "&:hover $sublists": {
      opacity: 1,
      transform: "translateY(0rem)",
      visibility: "visible",
    },
  },
  megaMenuWrapper: {
    "&:hover $megaMenu": {
      opacity: 1,
      transform: "translateY(0rem)",
      visibility: "visible",
    },
  },
  link: {
    textTransform: "capitalize",
    color: "#fff",
    position: "relative",
    fontFamily: '"Poppins", sans-serif',
    transition: "color .2s linear",
    cursor: "pointer",
    "&::before": {
      content: '""',
      width: 0,
      height: 1,
      backgroundColor: "#fff",
      position: "absolute",
      bottom: 0,
      left: "auto",
      right: 0,
      transition: "all .2s linear",
    },
    "&:hover": {
      color: "#fff",
      "&::before": {
        width: "100%",
        left: 0,
        right: "auto",
      },
    },
  },
  megaMenu: {
    minWidth: "20rem",
    transform: "translateY(2rem)",
    transition: "all .3s ease-in",
    opacity: 0,
    visibility: "hidden",
    display: "block",
    position: "absolute",
    left: 0,
    right: 0,
    top: "100%",
    backgroundColor: "#fff",
    boxShadow: "-1px 2px 19px 3px rgba(14,0,40,.05)",
  },
  sublists: {
    position: "absolute",
    left: "-6.7rem",
    top: "85%",
    zIndex: 1000,
    color: "#212529",
    backgroundColor: "#fff",
    boxShadow: "-1px 2px 19px 3px rgba(14,0,40,.05)",
    minWidth: "23rem",
    transform: "translateY(2rem)",
    transition: "all .3s ease-in",
    opacity: 0,
    visibility: "hidden",
    display: "block",
  },
  sublist: {
    padding: "0 1rem",
    width: "100%",
    position: "relative",
    marginRight: 0,
    display: "block",
    backgroundColor: "#fff",
    transition: "color .1s linear",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#963a5eaa",
    },
    "&:hover $sublink": {
      color: "#fff",
    },
  },
  sublink: {
    textTransform: "capitalize",
    lineHeight: "3.6rem",
    color: "#051441",
    fontSize: "1rem",
    position: "relative",
    fontFamily: '"Poppins", sans-serif',
    transition: "color .1s linear",
  },
  button: {
    alignSelf: "center",
    padding: "1rem 2rem",
    fontSize: "1rem",
    color: "#fff",
  },
}))

export default Menubar
