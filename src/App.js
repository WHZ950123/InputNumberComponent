import React from 'react';
import './App.css';
import InputNumber from './InputNumber'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '5'
    }
  }
  value = '10'
	
  render() {
    return (
      <div>
        InputNumber受控组件：<InputNumber
		  value = { this.state.value }
		  onChange = {(e) => {
			this.setState({
			  value: e.target.value
			})
		  }}
		/>
		<br/>
		InputNumber非受控组件：<InputNumber
		  defaultValue = { this.value }
		  onChange = {(e) => {
			this.value = e.target.value
		  }}
		/>
	  </div>
	);
  }
}

export default App;