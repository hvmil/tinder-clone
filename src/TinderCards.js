import React, { useEffect, useState } from 'react'
import TinderCard from "react-tinder-card"
import "./TinderCards.css"
import database from "./firebase"



function TinderCards() {
  const [people, setPeople] = useState([
    // { 
    //   name: "Yi Long Mah",
    //   age: 45,
    //   url:"https://yt3.ggpht.com/OFeZHipF21gDpaWHPh6t-hWATy5MhMgzAHTRnF1cV8hrDOcUGHFhcuog_OtGE07_dn1jboPg6vZhaQ=s640-nd-v1"
    // },
    // {
    //   name: "Elon Musk",
    //   age:43,
    //   url:"https://www.incimages.com/uploaded_files/image/1920x1080/getty_506812992_137246.jpg"
    // },
  ]);

  useEffect(() => {

    const unsubscribe = database
    .collection("people").onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data()))
    );

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div>
      <div className="tinderCards__cardContainer">
      {people.map(person => (
        <TinderCard
          className="swipe"
          key={person.name} 
          preventSwipe={['up', 'down']}  
        >
          <div style={{ backgroundImage: `url(${person.url})`}} 
          className="card"
          >
            <h3>{person.name}, {person.age}</h3>
          </div>
        </TinderCard>
        
      ))}

      </div>
      
    </div>
  )
}

export default TinderCards