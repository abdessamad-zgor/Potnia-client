import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core';
import Logo from '../jetro.svg';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'inherit',
        color: 'black'   
    }
}))

function Navbar() {
    const classes = useStyles()
    return (
        <div className="navbar">
            <AppBar position="sticky" variant="outlined"  className={classes.root}>
                <img src={Logo} alt="brand-title" />
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to='/services'>Services</Link> </li>
                    <li>Our Work</li>
                    <li><AccountCircleOutlinedIcon/></li>
                </ul>
            </AppBar>
        </div>
    )
}

export default Navbar
