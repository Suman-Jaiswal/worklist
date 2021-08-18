import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeletePlanBtn from './DeletePlanBtn';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
    root: {
        width: 300,
        padding: 0
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard({ plan, sno }) {

    const [progress, setProgress] = useState(null)
    const classes = useStyles();

    useEffect(() => {
        const completed = plan.topics.filter(x => x.completed === true).length
        const total = plan.topics.length
        const now = Math.floor((completed / total) * 100)
        setProgress(now)
    }, [plan])

    return (
        <div>
            <Card className={classes.root}>

                <CardContent className='px-3'>

                    <div className={`${classes.title} d-flex justify-content-between text-secondary `} gutterbottom='true'>
                        {sno}
                        <div  ><DeletePlanBtn id={plan.id} title={plan.title} /></div>
                    </div>

                    <Link className='text-decoration-none text-dark' to={`/plan/${plan.id}`}  >

                        <Typography variant="h5" component="h2">
                            {plan.title}
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            {plan.description}
                        </Typography>

                        <div className='py-3' >
                            <ProgressBar now={progress} label={`${progress}%`} />
                        </div>

                    </Link>

                </CardContent>

            </Card>
        </div>

    );
}
