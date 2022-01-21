import React, {Component} from 'react';

class Test extends Component {
    constructor(props){
        super(props)
        this.state = {index : 1}
    }
    render() {
        return(
        <div> 
            <h1>Welcome class component</h1> 
            <h1>Giá trị {this.state.index}</h1>  
            <button onClick={()=>{
                this.setState({
                    index: this.state.index + 1
                })
            }}>
                Tăng
            </button>

            <button onClick={()=>{
                this.setState({
                    index: this.state.index - 1
                })
            }}>
                Giảm
            </button>
        </div>
    
        );
    }
}
export default Test;