import React, {Component} from "react"
class Reset extends React.Component {
  onSetDefault = () =>
  {
    this.props.onSetDefault(true)
  }
  render(){
  return (
        <button type="button" className="btn btn-primary cssBtn" onClick={this.onSetDefault}>Reset</button>
  );
}
}
export default Reset;
