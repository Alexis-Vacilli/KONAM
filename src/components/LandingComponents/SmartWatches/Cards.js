import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  avatar: {
    // backgroundColor: '#57648C'
  },
  header: {
    backgroundColor: 'rgba(0,0,0,.9)',
    color: '#fff',
    fontWeight: 'bolder'
  },
  title: {
    fontSize: '20px',
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    borderRadius: '5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
      padding: '10 40px',
      backgroundColor: 'rgba(0,0,0,.9)',
      color: '#fff',
      fontWeight: 'bolder',
      fontSize: '20px'
  }
});

export default function Cards(props) {
  const classes = useStyles();
  const { title, price, description, imageSrc } = props;
  return (
    <Card variant='outlined' className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            <WatchOutlinedIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label='settings' style={{color: '#fff'}}>
            <MoreVertOutlinedIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
        className={classes.header}
      />
      <CardMedia
        className={classes.media}
        image={imageSrc}
      />
      <CardContent className={classes.content}>
        <Typography>
            {description}
        </Typography>
      </CardContent>
      <CardActions style={{padding: '20px', backgroundColor: 'rgba(0,0,0,.9)'}}>
        <Button size='medium' variant="outlined" color="secondary" style={{padding: '5px'}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
