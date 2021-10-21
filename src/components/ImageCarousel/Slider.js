import React, {useState} from 'react';
import SliderContent from './SlideContent';
import Slides from './Slides';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    sliderCss: {
        position: 'relative',
        height: '80vh',
        width: '100%',
        margin: '0 auto',
        overflow: 'hidden',
        backgroundColor: '#333'
    }
  });


export default function Slider(props) {
    const classes = useStyles();

    const getWidth = () => window.innerWidth;
    const [state, setState] = useState({
        translate: 0,
        transition: 0.45
    })

    const {translate, transition} = state;
    console.log(props)
    return (
        <div className={classes.sliderCss}>
            <SliderContent 
            translate={translate}
            transition={transition}
            width={getWidth()}
            >
              {props.slides.map(slide => {
                  <Slides key={slide} component={slide} />
              })} 
            </SliderContent>
        </div>
    )
}
