import React from "react";
class ClassPerson extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false
      };
    }
    render() {
      return (
        <div>
          <button onClick={() => this.setState({ visible: !this.state.visible })}>
            {this.state.visible ? 'Hide' : 'Show'}
          </button>
          {this.state.visible && <div style={{height:'200px'}}>
           <h1> fullName : "Naruto Uzumaki"</h1>
        <p> bio : "I just love ramen",</p>
        <img src="https://w.forfun.com/fetch/48/4875353c62cc88795efec44a192ff20b.jpeg"  alt="naruto" />
         <p>profession : "7th Hokage"</p>
            </div>}
        </div>
      );
    };
  }
  
  export  default ClassPerson
