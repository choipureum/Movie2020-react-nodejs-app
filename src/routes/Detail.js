import React from 'react';
import './Detail.css';
import { Link } from "react-router-dom";

class Detail extends React.Component{
    componentDidMount(){
        const{location,history} = this.props;
        if(location.state==undefined){
            history.push("/");
        }
        
    }
    render(){
        const{location} =this.props;
        if(location.state){
            return (
            <div className="detail_view">
                <img className="detail_img" src={location.state.poster} alt={location.state.title} title={location.state.title} />              
                <h3 className="detail__title">{location.state.title}</h3>
                <h5 className="detail__year">{location.state.year}</h5>
                <h5 className="detail__rating"><img className='star' src="https://i.dlpng.com/static/png/1482279-start-stars-png-vector-338_338_preview.png" alt=""/>
                {location.state.rating}</h5>
                <h5 className="detail__runtime">{location.state.runtime}min</h5>
               <h5 className="detail__language">{location.state.language}</h5>
                <p className="detail__summary">{location.state.summary}</p>   
                <br/><br/>
                <Link to="/" className="detail__back">&larr;Back</Link>    
            </div>
            );
        }else{
            return null;
        }
    }
}
export default Detail;