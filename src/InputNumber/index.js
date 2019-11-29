import React,{Component} from 'react'
import PropTypes from 'prop-types'

class InputNumber extends Component{
  constructor(props){
	super(props)
	this.state = {
	  defaultValue: ''
	}
  }
  
  static propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func
  }

  static defaultProps = {
	onChange: () => {}
  }

  get isControl(){
	return 'value' in this.props
  }

  get value() {
	if (this.isControl) {
	  return this.props.value
	} else {
	  return this.state.defaultValue
	}
  }

  render() {
	const { onChange, ...rest } = this.props
	return (
	  <div>
		<input
		  value = { this.value }
		  onChange = {(e) => {
			if (!this.isControl) {
			  this.setState({
				defaultValue: e.target.value
			  })
			}
			this.props.onChange(e)
		  }}
		/>
	  </div>
	)
  }

  componentDidMount() {
	this.setState({
	  defaultValue: this.props.defaultValue
	})
  }
}

export default InputNumber