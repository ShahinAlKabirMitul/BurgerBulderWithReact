import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'
const controls = [
    {lable:'Salad',type:'salad'},
    {lable:'Bacon',type:'bacon'},
    {lable:'Cheese',type:'cheese'},
    {lable:'Meat',type:'meat'},
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
     {controls.map(ctr=>(
         <BuildControl ingedientAdded={ ()=>props.ingedientAdded(ctr.type)} key={ctr.lable} lable={ctr.lable} />
     ))}
    </div>
);
export default buildControls;