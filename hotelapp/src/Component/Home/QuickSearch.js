import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';

const QuickUrl ="https://developerfunnel.herokuapp.com/booking"

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            tripType:''
        }
    }
    render(){
        console.log("in quick search>>>",this.props)
        return(
            <div>
                <QuickDisplay tripdata={this.state.tripType}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(QuickUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({tripType:data})
        })
    }
}

export default QuickSearch;