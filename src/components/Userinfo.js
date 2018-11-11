import React, { Component } from 'react';


class Userinfo extends Component {

  constructor(){
    super();
    this.state = {
      items : [],
      isLoaded : false,
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/users/' + this.props.user +'/repos')
    .then(res => res.json())
    .then(json => {
      console.log(JSON.stringify(json))
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }

  render(){
   var {isLoaded,items} = this.state;
     console.log(Array.isArray(items));

     if (!isLoaded) {
                return (
                  <div >
                  LOading ...
                  </div>
                )
      }
     else{
      return(
        <div className="main_home">
                 Data has been loaded

                 <ul> 
                    {items.map(item => (
                         <li key={item.id} >
                          {item.login}
                          {item.name}
                          {item.location}

                         </li>
                      ))}
                 </ul>
        </div>
      )
    }
  }
}


export default Userinfo;