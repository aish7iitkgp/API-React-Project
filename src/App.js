import './App.css';
import {useState} from "react";

import Axios from "axios";
import RecipeTile from './RecipeTile';

function App() {
  const[query,setquery] = useState("");
  const[recipes,setrecipes] = useState([])
  const[health,setHealth] = useState("vegan")
  const YOUR_APP_ID= "ce970327";
const YOUR_APP_KEY= "3c7e6d60658f49635594a5764bcf9b0a";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=${health}`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits)
    console.log(result.data)
  }
  const Submit = (e) =>{
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="App">
      <h1 onClick={getRecipes}>Food recipe plaza</h1>
      <form className="app_searchform" onSubmit={Submit}> 
        <input type="text" className="app_input"placeholder="Enter Ingredient" value={query} onChange={(e) => setquery(e.target.value)}/>
        <input type="submit" className="app_submit" value="Search" />
        <select className='app_healthlabels'><option onClick={() =>setHealth("vegan")}>Vegan</option></select>
      </form>
      <div className='app_recipes'>
         {recipes.map(recipe =>{
          return <RecipeTile recipe={recipe} />
         })}
      </div>
    </div>
  );
}

export default App;
