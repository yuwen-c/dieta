import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState({hasError: true});
        console.log(errorInfo);
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong.</h1>
        }
        else{
            return this.props.children
        }
    }
}

export default ErrorBoundary;