import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <div>
      <Container>
        <Section
          titale="Model S"
          description="order online for tochless delivery"
          backgroundImg="/images/model-s.jpg"
          leftBtnText="custom order"
          rightBtnText="existing inventory"
        />
        <Section
          titale="Model Y"
          description="order online for tochless delivery"
          backgroundImg="/images/Model-y.jpg"
          leftBtnText="custom order"
          rightBtnText="existing inventory"
        />
        <Section
          titale="Model 3"
          description="order online for tochless delivery"
          backgroundImg="/images/model-3.jpg"
          leftBtnText="custom order"
          rightBtnText="existing inventory"
        />
        <Section
          titale="Model X"
          description="order online for tochless delivery"
          backgroundImg="/images/model-x.jpg"
          leftBtnText="custom order"
          rightBtnText="existing inventory"
        />
        <Section
          titale="Lowest Cost Solar Panels in America"
          description="Money-Back garuntee"
          backgroundImg="/images/solar-panel.jpg"
          leftBtnText="order now"
          rightBtnText="learn more"
        />
        <Section
          titale="Solar for New Roofs"
          description="Solar Roof Cost Less Than Roof Plus Solar Panels"
          backgroundImg="/images/solar-roof.jpg"
          leftBtnText="order now"
          rightBtnText="learn more"
        />
        <Section
          titale="Accessories"
          description=""
          backgroundImg="/images/accessories.jpg"
          leftBtnText="shop now"
        />
      </Container>
    </div>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
