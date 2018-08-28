import React, {Component} from 'react';
export default class Footer extends Component {
constructor(props) {
    super(props);
    this.state = {
        creator:"Emanuil",
        text:"Blog System",
        year:"2018"
    }
}
render() {
    const divStyle = {
        left:0,
        right:0,
        bottom:0,
        textAlign:'center',
        position:'fixed',
        height: "50px"
    };
    return(
 <div style= { divStyle} className="alert alert-primary" role="alert">{this.state.year} {this.state.creator} {this.state.text}</div>
    )
}
}