import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <>
    <h1 className="heading">My Contacts</h1>
    
    {contacts.map((person, i) => {     
                
      return (<Card key={i} id={i} name={person.name} img={person.imgURL} num={person.phone} email={person.email}/>  )
    })}
    </>
  );
}

export default App;