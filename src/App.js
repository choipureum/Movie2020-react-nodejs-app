import React from 'react';
import ProtoTypes from 'prop-types';
import axios from 'axios';

class App extends React.Component{
    state={
        isLoading:true,
        movie:[]
        
    };
    getMovies=async()=>{
        const {
            data:{
                data:{movies}
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        this.setState({movies,isLoading:false});
    }
    componentDidMount(){
      this.getMovies();
    }
    render(){
        const{isLoading} =this.state;
        return(
        <div>
            {isLoading?'Loading':'We are Ready'}
        </div>
        )
    }
    
}


export default App;