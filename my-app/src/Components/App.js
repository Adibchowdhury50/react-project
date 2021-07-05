import React from 'react'

import Header from './Header'
import AddContact from './AddContact'
import ContactLst from './ContactList'



function App() {
  const contacts = [
    {
      Id:"1",
      Name:"Adib",
      Email:"adibmd41@gmail.com"
    },
    {
      Id:"2",
      Name:"Kafi",
      Email:"kabendis@gmail.com"
    },
    {
      Id:"1",
      Name:"Riyad",
      Email:"lebinds@gmail.com"
    }
  ];
  return (
    <div className="ui container">
     <Header/>
     <AddContact/>
      <ContactLst contacts={contacts}/>
    </div>
  );
}

export default App;
