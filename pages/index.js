import { useRouter } from "next/router";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useState } from "react";
import background from "../public/background.json";
import { motion } from "framer-motion";
import waveUp from "../public/wave-up.json";

const Content = styled.div`
  position: absolute;
  z-index: 5;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  height: 4rem;
  width: 15rem;
  font-size: 16pt;
  font-family: poppins;
  border-radius: 2rem;
  background-color: white;
  color: black;
`;

export default function Story() {
  const r = useRouter();
  const [wave, setWave] = useState(false);
  const handleWave = () => {
    setWave(true);
    r.push("/welcome");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={background}
        style={{
          position: "relative",
          eight: "100vh",
        }}
      ></Lottie>
      <Content>
        <motion.h1
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ color: "black" }}
        >
          The Coping Handbook
        </motion.h1>
        <motion.div
          onClick={() => {
            r.push("/moodpicker");
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <StyledButton>Let's Start!</StyledButton>
        </motion.div>
        {wave && (
          <Lottie
            animationData={waveUp}
            style={{
              position: "absolute",
              width: "100vw",
              height: "auto",
            }}
          ></Lottie>
        )}
      </Content>
    </div>
  );
}
