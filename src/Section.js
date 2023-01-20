import React from 'react';
import styled from 'styled-components';
const Section = ({title,description,backgorundImg}) => {
  return (
    <Wrap bgimg={backgorundImg}>
      <ItemText>
        <h1>
          {title}
        </h1>

        <p>{description}</p>
      </ItemText>
      <Buttons>
        <Buttongroup>
          <Rightbutton>
            Existing Inventory
          </Rightbutton>
          <LeftButton>
            Custom Order
          </LeftButton>  
        </Buttongroup>
        <DownArrow src="E:\react\tesla_clone\public\images\down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section
const Buttons = styled.div`

margin-top:20px;
height:115px;
padding:120px;
`
const DownArrow = styled.img`
height:70px;
// padding:10px;
overflow-x:hiddden;
animation:animateDown infinite 1.5s;
`
const Wrap = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/images/model-3.jpg');
background-image:${props=>`url("/images/${props.bgimg}")`};
justify-content:space-between; //vertical
align-items=center; // horizontal
display:flex;
flex-direction:column;

`


const Buttongroup = styled.div`
display:flex;
margin-bottom:30px;
// // padding:50px;
// margin:40px;
@media(max-width:768px){
  flex-direction:column;

  
}

`

const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align_items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
justify-content:space-between;
flex-direction:column;
cursor:pointer;
padding:10px;
margin:8px;
`
const Rightbutton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;

`
