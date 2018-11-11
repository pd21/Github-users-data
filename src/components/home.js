import React, { Component } from 'react';
import Userinfo from './Userinfo.js';

class Home extends Component{

  constructor(){
  	super();
  	this.state = {
  		userName: '',
      userNamePresent: false
  	}
  	this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e){
  	this.setState({
    userName : e.target.value,
    
  	})
  }
  handleSubmit(e){
  	e.preventDefault()
    this.setState({
      userNamePresent:  true
    })
  }

	render(){
    if(!this.state.userNamePresent){
      return(
             <div className="main_home">
                 <form onSubmit={this.handleSubmit}>  
                    <input 
                      value={this.state.userName}
                      type="text"
                      onChange={this.handleChange}
                      placeholder="Enter the userName"
                      required/>

                  <button type="submit"> enter </button>
                  </form>

                  
             </div>
      )
    }
    else{
       return(
          <Userinfo user={this.state.userName}/>
        )
     }
    }


		
	
}

export default Home;