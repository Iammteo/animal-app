import './App.css'
import { useState } from 'react';
import AnimalShow from './AnimalShow';



function getRandomAnimal(){
  const animals = ['cat','cow', 'bird', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)]
}   

function App ()  {
    const [animals, setAnimals] = useState([]);
 
 const handleClicked = () => {
  setAnimals([...animals, getRandomAnimal()]);

 }
const renderedAnimals = animals.map((animal,index) => {
return <AnimalShow type={animal} key={index}/>
});

  return (
     <div className='app'>
      <button onClick={handleClicked} > Add Animal </button>
      <div className='animalList' >{renderedAnimals}</div>

     </div>
     );
     
}
export default App;

