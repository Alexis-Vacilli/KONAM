import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  
});

export default function SlideContent(props) {
  const classes = useStyles();
  return (
    <div
      style={{
        transform: `translateX(-$(props => props.translate)px)`,
        transition: `transform ease-out ${(props) => props.transition}s`,
        height: '100%',
        width: `${(props) => props.width}px`,
        display: 'flex',
      }}
    >{props.children}</div>
  );
}
