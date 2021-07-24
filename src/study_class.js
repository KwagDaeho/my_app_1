import React from "react";

class MyClass extends React.Component{
  state = {
    count: 0
  };
  plus = () => {
    this.setState(current => ({ count: current.count +1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count -1 });
  };

  constructor(props){
    super(props);
    console.log("constructor starting.. 0%.");
  };
  render(){
    console.log("render 100%.");
    return <div>
      <h1>It is Class Component number is : {this.state.count}</h1>
      <button onClick={this.plus}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>;
  };
  componentDidMount(){
    console.log("component did mounted. Good!");
  };
  componentDidUpdate(){
    console.log("component did updated. Nice! It's just UPDATE!!");
  };
};

export default MyClass;