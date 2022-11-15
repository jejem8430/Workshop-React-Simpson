import React from 'react';
import Avatar from './Avatar';

export default function App() {
 
  // 
  const bart = [
    {
      image:"https://www.stickees.com/files/cartoon/the-simpsons/2240-bart-simpson-skate.png",
      firstName: "Bart",
      lastName:"Simpson",
    }
  ]

  const homer = [
    {
      image:"https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
      firstName: "Homer",
      lastName:"Simpson",
    }
  ]

  const marge = [
    {
      image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
      firstName: "Marge",
      lastName: "Simpson",

    }
  ]

  return (
    <div className='App'>
      <Avatar
        image={bart[0].image} alt="Bart"
        firstName={bart[0].firstName}
        lastName={bart[0].lastName}
      />

      <Avatar
        image={homer[0].image} alt="Homer"
        firstName={homer[0].firstName}
        lastName={homer[0].lastName}
      />

      <Avatar
        image={marge[0].image} alt="Marge"
        firstName={marge[0].firstName}
        lastName={marge[0].lastName}
      />
      
    </div>
  )
}
