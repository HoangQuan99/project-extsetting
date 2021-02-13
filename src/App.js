import React, {Component} from "react"
import './App.css'
import Result from './components/Result';
import Reset from './components/Reset';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
    // this.onSetColor = this.onSetColor.bind(this);
  }
  onSetColor = (params) => 
  {
    this.setState({
      color: params
    })
  }
  onChangeSize = (value) => 
  {
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36)
    {
      this.setState({
        fontSize: this.state.fontSize + value
      })
    }
  }
  onSetDefault = (value) =>
  {
    if(value)
    {
      this.setState({
        color: 'red',
        fontSize: 12
      })
    }
  }
  render(){
  return (
        <div className="container mt-50">
        <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor = { this.onSetColor } />
            <SizeSetting fontSize={this.state.fontSize} onChangeSize = { this.onChangeSize } />
            <Result color={this.state.color} fontSize={this.state.fontSize} />
            <div className="col col-lg-2">
              <Reset onSetDefault = {this.onSetDefault} />
            </div>
        </div>
        
    </div>
  );
  }
}
export default App;
