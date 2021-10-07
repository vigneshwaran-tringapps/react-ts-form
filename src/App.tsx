import React , {useState} from 'react';

import './App.css';
import List from "./components/List"
import AddList from './components/AddList';

export interface IState {
  people:{
    name: string
    age:number
    url:string
    note:string
  }[]
}
function App() {
  const [people, setPeople]= useState<IState["people"]>([
    {
      name:"lebron james",
      url:"http://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age:35,
      note:"cool"
    }
    ])
  
  
  return (
    <div className="table-container">
      <h1>Yet another form...</h1>
      <List people={people}/>
      <AddList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
