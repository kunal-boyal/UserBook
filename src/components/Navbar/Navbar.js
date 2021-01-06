import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const Navbar = (props) => {
    const classes = useStyles();
    const name = `Hello ${props.name}`
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    User Book
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    {props.name ? name : null}
                </Typography>
                <Button onClick={props.clicked}  color="inherit">{props.title}</Button>
                
            </Toolbar>
        </AppBar>
    )
}


export default Navbar