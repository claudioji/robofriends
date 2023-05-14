import React,{Component} from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            haserror: false
        }
    }
    render(){
        if(this.state.haserror){
            return <h1>Ooops. That is not good</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundry;