import heart_1 from "../assets/heart_1.png"
import heart_2 from "../assets/heart_2.png"
import {Card, Image} from "react-bootstrap";
import React from "react";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCardView: false,
        }
    }

    render() {
        return (
            <Image width={20} height={20} src={this.state.isCardView? heart_2 :heart_1}  onClick={()=>this.setState({ isCardView: !this.state.isCardView })} style={ {cursor: 'pointer'}}/>
        );
    }

}


export default LikeButton;
