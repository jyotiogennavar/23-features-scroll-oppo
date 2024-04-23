import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useRef } from "react";

import styled from "styled-components";

const Features = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <ArrowWrapper>
        <FiArrowDown />
      </ArrowWrapper>

      <FeaturesSection>
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </FeaturesSection>

      <ArrowWrapper>
        <FiArrowUp />
      </ArrowWrapper>
    </>
  );
};

const ArrowWrapper = styled.div`
  background-color: white;
  color: black;
  padding: 4px;
  display: grid;
  place-items: center;
`;

const FeaturesSection = styled.section`
  display: flex;
  background-color: black;
  color: white;
`;

const Content = ({ content }) => {
  return (
    <Wrapper>
      {content.map(({ id, title, description}, idx) => (
        <ContentItem key={id} idx={idx % 2}>
          <h3>{title}</h3>
          <p>{description}</p>
        </ContentItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ContentItem = styled.div`
  padding: 8px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ idx }) => (idx ? "#EDEDED" : "#232323")};
  color: ${({ idx }) => (idx ? "black" : "white")};
  font-family: "Roboto", sans-serif;
  h3 {
    font-size: 1.5rem; 
    font-weight: 500;
  }

  p {
    font-weight: 300;
    max-width: 300px;
  }

  @media (min-width: 768px) {
    h3 {
      padding: 4rem 2rem; 
      font-size: 2.5rem;
      font-weight: 600;
    }
    p {
      padding: 2rem;
      max-width: 500px;
    }
  }
`;

const Images = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );
  return (
    <ImagesWrapper>
      <MotionDiv style={{ top }}>
        {[...content].reverse().map(({ img, title }) => (
          <img alt={title} src={img} />
        ))}
      </MotionDiv>
    </ImagesWrapper>
  );
};

const ImagesWrapper = styled.div`
  height: 100vh;
  overflow: hidden;

  position: sticky;
  top: 0;

  width: 24px;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const MotionDiv = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default Features;

const items = [
  {
    id: 1,
    title: "Black Nike w white check",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80",
  },
  {
    id: 2,
    title: "Bunch of black and white shoes",
   
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
  },
  {
    id: 3,
    title: "White shoes in the rain",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
  },
  {
    id: 4,
    title: "White shoes with black heel",
  
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1662&q=80",
  },
];
