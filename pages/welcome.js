import { useRouter } from "next/router";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import background from "../public/background.json";
import { motion } from "framer-motion";
import mouseclick from "../public/mouseclick.json";
import friends from "../public/friends.json";

const Content = styled.div`
  position: absolute;
  z-index: 5;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
`;

const StyledButton = styled.button`
  font-size: 16pt;
  font-family: poppins;
  border-radius: 2rem;
  background-color: transparent;
  border: none;
`;

const ButtonCont = styled.div`
  margin-top: 2rem;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-end;
`;

export default function Welcome() {
  const [mouse, setMouse] = useState("");
  const r = useRouter();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setMouse(true);
  //     }, 2000);
  //   }, []);

  return (
    <div
      onClick={() => r.push("/moodpicker")}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Lottie
        animationData={background}
        style={{
          position: "relative",
          height: "100%;",
          width: "100vw",
        }}
      ></Lottie>
      <Content>
        <ButtonCont>
          <motion.div
            onClick={() => {
              r.push("/");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <StyledButton>&#8592; Back</StyledButton>
          </motion.div>
        </ButtonCont>
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Hello! Welcome to the Cauldron of Emotions.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
        >
          <Lottie animationData={friends} style={{ height: "25rem" }}></Lottie>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
        >
          Let's see what emotions we can add!
        </motion.h2>
      </Content>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 5 }}
      >
        <Lottie
          animationData={mouseclick}
          style={{
            right: "3rem",
            height: "8rem",
            position: "absolute",
            bottom: "7rem",
            zIndex: "5",
          }}
        ></Lottie>
      </motion.div>
    </div>
  );
}
