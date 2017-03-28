import React from 'react';
import {render} from 'react-dom';
import Slider from './components/Slider';
let images = [
    //图片只能通过require方式引入，因为上线之后路径会变
    {src: require('./images/1.jpg'),alt:'1.jpg'},
    {src: require('./images/2.jpg'),alt:'2.jpg'},
    {src: require('./images/3.jpg'),alt:'3.jpg'},
    {src: require('./images/4.jpg'),alt:'4.jpg'}
];
render(<Slider
    autoPlay={true}
    speed={1}
    delay={2}
    images={images}
    pause={true}
/>,document.querySelector('#app'));
