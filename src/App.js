import React from 'react';
import ProtoTypes from 'prop-types';

// 클래스형 컴포넌트
    //반환을 위해 return이 아닌 render()를 사용해야한다 
class App extends React.Component{
    constructor(props){
        super(props);
        console.log('hello')
    }


    state={
        count:0,
    };
    //state를 건드리는건 성능문제가 생길 수 있다
        // current map형식으로 
    add =() =>{
        console.log('add');
        this.setState(current=>({
            count: current.count+1
        }));
    }
    minus=() =>{
        console.log('minus');
        this.setState(current=>({
            count: current.count-1
        }));
    }
    render(){
        return(
            <div>       
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
        </div>
        ) 
    }
    
}


export default App;