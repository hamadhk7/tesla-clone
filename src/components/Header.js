import React from 'react';
import styled from "styled-components";
// import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  return (
<Container>
<a>
  <img src="E:\react\tesla_clone\public\images\logo.svg" alt=""/>
</a>
<Menu>

    <a href="#">Model A </a>

    <a href="#">Model B </a>

    <a href="#">Model C </a>

    <a href="#">Model D </a>

</Menu>
<RightMenu>

<a href="#">SHOP </a>

<a href="#">ACCOUNT </a>
<CustomMenu/>

</RightMenu>
</Container>
  );
}

export default Header
const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-betweem;
padding 0 20px;
top:0;
left:0;
right:0; 
`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
  font-weight:600;
  text-tranform:uppercase;
  padding:0 23px;
  flex-wrap:nowrap;

}
`
const RightMenu=styled.div`
a{
  font-weight:600;
  text-tranform:uppercase;
 
  margin-right:10px;
  flex-wrap:nowrap;

}

// `
// const CustomMenu=styled(MenuIcon)`
// cursor:pointer;

// `
const CustomMenu=styled.div`
cursor:pointer;

`