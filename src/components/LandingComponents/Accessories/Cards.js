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
import SmartphoneOutlinedIcon from '@material-ui/icons/SmartphoneOutlined';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    //   backgroundColor: '#121212'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
      padding: '10 40px'
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
            <SmartphoneOutlinedIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertOutlinedIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
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
      <CardActions style={{padding: '10px'}}>
        <Button size='small' variant="outlined">Learn More</Button>
      </CardActions>
    </Card>
  );
}
