import React, {Component} from "react";

class SizeSetting extends React.Component {
  changeSize(value)
  {
    this.props.onChangeSize(value)
  }
  render(){
  return (
    <div className="col-lg-6 col-md-4 col-sm-6 col-xs-6">
        <div className="panel panel-warning">
          <div className="panel-heading">Size {this.props.fontSize}px</div>
            <div className="panel-body">
                <button type="button" className="btn btn-success cssBtn" onClick={()=>this.changeSize(2)}>Tăng</button>
                <button type="button" className="btn btn-success cssBtn" onClick={()=>this.changeSize(-2)}>Giảm</button>
          </div>
        </div>
    </div> 
  );
}
}

export default SizeSetting;
