import { useRouter } from "next/router";
import styled from "styled-components";
import Lottie from "lottie-react";
import background from "../public/background.json";
import { motion } from "framer-motion";
import happy from "../public/happy.json";
import embarrassed from "../public/embarrassed.json";
import angry from "../public/angry.json";
import sad from "../public/sad.json";
import anxious from "../public/anxious.json";

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

const Card = styled.div`
  background-color: white;
  height: 10rem;
  width: 10rem;
  border-radius: 2rem;
  margin: 2rem;
  box-shadow: 0px 4px 4px 0px #00000040;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardCont = styled.div`
  display: flex;
`;

export default function MoodPicker() {
  const r = useRouter();

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
          height: "100vh",
          width: "100vw",
        }}
      ></Lottie>
      <Content>
        <StyledButton
          onClick={() => {
            r.push("/indexPage");
          }}
        >
          Back To Home
        </StyledButton>
        <motion.h1
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ color: "black" }}
        >
          What to do when you feel..
        </motion.h1>
        <CardCont>
          <motion.div
            onClick={() => {
              r.push("/happy");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Card>
              <Lottie animationData={happy}></Lottie>
              <h3>Happy</h3>
            </Card>
          </motion.div>
          <motion.div
            onClick={() => {
              r.push("/angry");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Card>
              <Lottie animationData={angry}></Lottie>
              <h3>Angry</h3>
            </Card>
          </motion.div>
          <motion.div
            onClick={() => {
              r.push("/embarrassed");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Card>
              <Lottie animationData={embarrassed}></Lottie>
              <h3>Embarrassed</h3>
            </Card>
          </motion.div>
          <motion.div
            onClick={() => {
              r.push("/sad");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Card>
              <Lottie animationData={sad}></Lottie>
              <h3>Sad</h3>
            </Card>
          </motion.div>
          <motion.div
            onClick={() => {
              r.push("/anxious");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Card>
              <Lottie animationData={anxious}></Lottie>
              <h3>Anxious</h3>
            </Card>
          </motion.div>
        </CardCont>
      </Content>
    </div>
  );
}
