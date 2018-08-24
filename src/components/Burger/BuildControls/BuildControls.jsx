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
     <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
     {controls.map(ctr=>(
         <BuildControl ingedientAdded={ ()=>props.ingedientAdded(ctr.type)} 
         disabled={props.disabled[ctr.type]}
         
         remove={()=> props.ingedientRemove(ctr.type)} key={ctr.lable} lable={ctr.lable} />
     ))}
     <button className={classes.OrderButton} disabled={!props.purchaseble}>ORDER NOW</button>
    </div>
);
export default buildControls;