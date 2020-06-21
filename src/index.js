import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends React.Component
{
        state= {
            lat: null, errorMessage: ''
        };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (data) => this.setState({lat: data.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    renderContent(){
        //conditional rendering
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonsDisplay lat={this.state.lat}/>
         }
         if(!this.state.lat && this.state.errorMessage){
             return <div className="ui">Error: {this.state.errorMessage}</div>
         }
         return <Spinner message="Please approve the Location request"/>;
 }
    
    
    render(){
        return <div>{this.renderContent()}</div>;
    
    }
}
//rendering the JSX code to html template
ReactDOM.render(<App />, document.querySelector('#root'));