import React from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      item:'',
      items:[]
    }
    this.inputlist = this.inputlist.bind(this)
    this.submitbutton = this.submitbutton.bind(this)
  }

  inputlist(event){
    let field = "item"
    let val = event.target.value
    this.setState({[field]: val})
  }

  submitbutton(){
    //console.log(this.state.item, this.state.items)
    let itemslist = this.state.items
    let item = this.state.item
    itemslist.push(item)
   
    this.setState({items:itemslist})
    this.setState({item:''});
  }

  
  render(){
    return(
      <div>
        <h1>Todo APP</h1>

       
          <input
          type="text"
          name="item"
          value = {this.state.item}
          onChange={this.inputlist}
          ></input>
          <button onClick={this.submitbutton}>Submit</button>
          {
            this.state.items.map((item,index) =>{
              return(
                <p key={index}>{item}</p>
              )
            })
          }
      </div>
    );
  }
}


export default App;