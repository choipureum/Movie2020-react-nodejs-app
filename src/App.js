import React from 'react';
import ProtoTypes from 'prop-types';

function Food({name,picture, rating}){  
return (
    <div>
        <h2>I like {name} </h2> 
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
    </div>
    );
}
const foodILike =[
    {
        id:1,
        name:'Kimchi',
        iamge:'https://okonomikitchen.com/wp-content/uploads/2020/03/vegan-kimchi-recipe-12-of-14.jpg',
        rating:3.5,
    },
    {
        id:2,
        name:'SamgyeopSal',
        iamge:'https://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg',
        rating:3.8,
    },
    {
        id:3,
        name:'Donggasu',
        iamge:'https://pds.joins.com/news/component/htmlphoto_mmdata/201508/05/htm_20150805071153241.jpg',
        rating:4.1,
    },
    {
        id:4,
        name:'Bibimbap',
        iamge:'https://recipe1.ezmember.co.kr/cache/recipe/2017/04/13/abcf293fb7d0d73d61e274127ced7b931.jpg',
        rating:4.9,
    },
]
//화살표를 이용한 map호출이외에 함수로도가능(이렇게 하면 복잡해진다)
function renderFood(dish){
    return <Food name={dish.name} picture={dish.iamge} />;
}


function App(){
    return (
       <div>         
          {foodILike.map(dish=>(<Food key={dish.id} name={dish.name} picture={dish.iamge} rating={dish.rating}/>))}
       </div>
    );
}
//입력값의 데이터 타입과 변수명을 검사해준다 - 오류와 실수 방지
Food.ProtoTypes={
    name: ProtoTypes.string.isRequired,
    picture: ProtoTypes.string.isRequired,
    rating: ProtoTypes.number.isRequired, //끝 쉼표는 있어도 되고 없어도된다
};



export default App;