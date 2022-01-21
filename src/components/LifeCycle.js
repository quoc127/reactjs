import React from "react";

class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            clickedStatus: false,
            list: []
        };
    }
    componentWillMount(){
        console.log("Component will mount")
    }
    componentDidMount(){
        console.log("Component did mount")
        this.getList();
    }
    getList = () =>{
        fetch("https://api.mydomain.com")
        .then(Response => Response.json())
        .then(data => this.setState({list:data}))
    }
    shouldComponentUpdate(nexProps, nexState){
        return this.state.list !== nexState.list
    }
    componentWllUpdate(nextProps, nexState){
        console.log("Component will update");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Component did update");
    }
    render(){
        return(
            <div>
                <h1>Mouting LifeCycle Method</h1>
            </div>
        );
    }
}
export default LifeCycle