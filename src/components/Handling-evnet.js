import React from "react";

class Handling extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: true,
            textareaChange: "",
            buttonClick: "",
            mouseOver: "",
        };
        this.mouseOver = this.mouseOver.bind(this)
    }
    toggleMSG(){
        this.setState(
            {
                isShow: !this.state.isShow
            }   
        );
    }
    changeText(e){
        this.setState({
            textareaChange: e.target.value
        });   
    }
    mouseOver(){
        this.setState({
            mouseOver: this.state.mouseOver + "mouseOver..."
        });
    }   
    render(){
        return(
            <div>
                <b>Nội dung: {this.state.isShow ? "Học lập ReactJS căn bản": ""} </b>
                <br/>
                <button onClick={() => this.toggleMSG()}>
                    {this.state.isShow ? "HIDE" : "SHOW"}
                </button>
                <hr/>
                
                <button onClick={() =>{
                    this.setState({
                        buttonClick: this.state.buttonClick + "onClick..."
                    });
                }}>
                    Click me...
                </button> {" "}

                <p>
                    button:<code>{this.state.buttonClick}</code>
                </p>
                <hr/>

                <hr/>
                <textarea onChange={e => this.changeText(e)} placeholder="Nhập vào...">
                    
                </textarea>
                <p>
                    textarea:<code>{this.state.textareaChange}</code>
                </p>

                <hr/>
                <h1 onMouseOver={this.mouseOver}>Di chuột vào đây</h1>
                <p>
                    mouseOver:<code>{this.state.mouseOver}</code>
                </p>
            </div>
        );
    }
}
export default Handling