import React from 'react';
require('./Slider.css');
//通过数据操作dom  通过改变state，来改变style对象的值，从而更改dom
export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            pos: 0//索引
        };
    }

    //走几步
    go(step) {
        let pos = this.state.pos + step;
        if(pos==this.props.images.length){
            pos = 0;
        }
        if(pos==-1){
            pos = this.props.images.length-1;
        }
        this.setState({pos});
    }
    play() {
        this.$timer = setInterval(() => {
            this.go(1);
        }, this.props.delay * 1000);
    }

    componentDidMount() {
        // 组件加载完成之后
        if (this.props.autoPlay) {
            this.play();
        }
    }

    render() {
        let imgLength = this.props.images.length;
        let style = {
            width: imgLength * 1000 + 'px',
            left: this.state.pos*(-1000)+'px',
            transitionDuration:this.props.speed+'s'
        };
        return (
            <div className="slider-wrapper" onMouseOver={()=>{clearInterval(this.$timer)}} onMouseOut={()=>{this.play()}}>
                <ul className="sliders" style={style}>
                    {
                        this.props.images.map(function (image, index) {
                            return <li key={index} className="slider"><img src={image.src} alt={image.alt}/></li>
                        })
                    }
                </ul>
                <div className="slider-arrows">
                    <span onClick={()=>{this.go(-1)}} className="arrow arrow-left">&lt;</span>
                    <span onClick={()=>{this.go(1)}} className="arrow arrow-right">&gt;</span>
                </div>
            </div>
        )
    }
}