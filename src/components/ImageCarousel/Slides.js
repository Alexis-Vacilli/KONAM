import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

export default function Slides(content) {
  const classes = useStyles();
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: URL(`${content}`),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
    </div>
  );
}
