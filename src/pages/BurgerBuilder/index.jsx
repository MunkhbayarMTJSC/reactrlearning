import React, { Component } from "react";
import Burger from "../../components/Burger";

class BurgerBuilder extends Component {
    state ={
        orts : {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
    }
    render() {
        return (
            <div>
                <Burger ingredients = {this.state.orts}/>
                <div>BurgerControll</div>
            </div>
        )
    }
}

export default BurgerBuilder;