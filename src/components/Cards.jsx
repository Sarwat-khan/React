import React from "react";
import Card from "./card";
import contacts from "./contacts";



function createCard(contacts){
    return ( 
      <div>
        
        
   <Card 
    
     key={contacts.id}
     name = {contacts.name}
      img = {contacts.imgURL}
      tel = {contacts.phone}
      email = {contacts.email}
      heading
      
      />  
</div>
    );
}

export default createCard;