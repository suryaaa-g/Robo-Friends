import React from "react";
import Card from "./Card";

// This component creates the card or displays the card 


const Cardlist = ({robots}) => {
    


    return (
        
        <div>
            
           {robots.map((user, i) => { // .map creates a new array copying from the original (user, (index))
            return (
                <Card 
                    key ={i} //you need this because react keeps track of all elements, key prop allows react to know when something gets deleted (when using a loop)
                    id={robots[i].id} 
                    name = {robots[i].name} 
                    email = {robots[i].email} /> 
                );
            })}
        </div>
    );
}
export default Cardlist;