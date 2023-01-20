import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Header from './Header';

const Home = () => {
  return (
    <Container>

      <Section 
      title="Model A"
      description="order online for touchless delveriy"
      backgorundImg="model-s.jpg"

      />
      <Section 
          title="Model B"
          description="order online for touchless delveriy"
          backgorundImg="model-y.jpg"
      />
      <Section
          title="Model C "
          description="order online for touchless delveriy"
          backgorundImg="model-x.jpg"
     />
      <Section
         title="Model D "
         description="order online for touchless delveriy"
         backgorundImg="model-3.jpg"
      />
    </Container>
  );
}

export default Home
const Container = styled.div`
height:100vh
` 
