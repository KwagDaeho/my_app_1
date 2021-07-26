import './App.css';
import Part1 from './Part1';
import Part2 from './Part2';
import PropTypes from "prop-types";
import Fetch from './fetch';

const Food = [
  {
    id: 1,
    name: "kimchi",
    color: "red",
    score: 8,
    rating: 3
  },
  {
    id: 2,
    name: "gimbap",
    color: "black",
    score: 9,
    rating: 4
  },
  {
    id: 3,
    name: "bibimbap",
    color: "red",
    score: 5,
    rating: 3.5
  }
];
FoodScore.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
}
function renderFood(dish){
  return <FoodScore key ={dish.id} name={dish.name} color={dish.color} score={dish.score} rating={dish.rating} />
};

function FoodScore({name, score, rating}){
  return (
    <div>
      <h2>i like {name}.</h2>
      My score is {score} / 10.
      Rating is {rating}.
    </div>
  );
};
FoodScore.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      <h1>My 1st REACT APP</h1>
      {Food.map(renderFood)}
      
      <Part1 />
      <Part2 />
      <Fetch />
    </div>
  );
};

export default App;
