import React from "react";
import BurgerOrts from "../BurgerOrts";
import Style from './style.module.css'

const Burger = (props) => {
    let content = [];
    const items=Object.entries(props.ingredients);
    items.map((el) => {
        for(let i=0; i<el[1]; i++){
            content.push(<BurgerOrts key={el[0]+''+(i+1)} type={el[0]} />);
        }
    });
    if(content.length===0)
        content = <p>Хачиртай талхныха орцыг сонгон уу...</p>;
    return (
        <div className={Style.Burger}>
        <BurgerOrts type='bread-top' />
        {content}
        <BurgerOrts type='bread-bot' />
    </div>
    )
}

export default Burger;