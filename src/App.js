import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid";


export default class App extends Component {

  state= {
    todoList:[
    {
      id: uuidv4(),
      todo:'walk'
    },
    {
      id: uuidv4(),
      todo:'drive'
    }
    ],

  }
  
   
  render() {
    // const {todoList} = this.state
    return (
      <div>


        
         hello
         { this.state }


        {/* <todoView
        todoList={todoList}
        /> */}
      </div>
    )
  }

}

// const todoView({ todoList})=>{
//   return (

//   )

// }
