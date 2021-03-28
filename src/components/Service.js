import PropTypes from 'prop-types';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '40vw',
        "&:hover": {
            opacity: 0.8
        }
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

function Service(props) {
    const classes = useStyles();
    return (
        <div className="service">
            <Link to={props.path}>
                <Card className={classes.root}>
                    <CardContent className={classes.content}>
                        <h1>{props.title}</h1>
                        <h4>{props.description}</h4>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}

Service.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string
}

export default Service

