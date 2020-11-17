

































TrackerForm.js

1. Add 'number: 0' to bottom of state object at top of component

2. Above render, add below function  

addNumber = () => {
    this.setState({
      number: this.state.number + 1
    })
  }


3. Add below between top div and form tags

<!-- 
 <h3>Click button to add 1!</h3>
            <button value={this.state.number} name="number" onClick={this.addNumber}>Add 1</button>
              <p>{this.state.number}</p> -->