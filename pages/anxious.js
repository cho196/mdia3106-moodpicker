import { useRouter } from "next/router";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import background from "../public/background.json";
import { motion } from "framer-motion";
import anxious from "../public/anxious.json";
import therapy from "../public/therapy.json";
import meditation from "../public/meditation.json";
import alone from "../public/alone.json";
import food from "../public/food.json";

const Content = styled(motion.div)`
  position: absolute;
  z-index: 5;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  padding: 1rem;
  border-radius: 2rem;
  font-size: 14pt;
  font-family: poppins;
  width: fit-content;
  margin-top: 2rem;
`;

const LeftBar = styled.div`
  height: 100%;
  width: 300px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 2rem;
  background-color: white;
  z-index: 5;
  margin-right: 5rem;
  display: flex;
  align-items: center;
`;

const MiniCard = styled.div`
  height: 250px;
  width: 150px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 2rem;
  background-color: white;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const MainBox = styled.div`
  width: 800px;
  height: 100%;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 2rem;
  background-color: white;
  z-index: 5;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const SecondaryBox = styled.div`
  width: 800px;
  height: 100%;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 2rem;
  background-color: white;
  z-index: 5;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SmallButton = styled.button`
  padding: 0.5rem;
  border-radius: 1.5rem;
  font-size: 12pt;
  font-family: poppins;
`;

export default function Anxious() {
  const r = useRouter();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setMouse(true);
  //     }, 2000);
  //   }, []);
  const [showMoments, setShowMoments] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "green",
      }}
    >
      <Content
        style={{ padding: "3rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LeftBar>
            <Lottie animationData={anxious}></Lottie>
          </LeftBar>
          <StyledButton
            onClick={() => {
              r.push("/moodpicker");
            }}
          >
            &#8592; Back to Mood Picker
          </StyledButton>
        </div>
        <RightCont>
          <MainBox>
            <h2>Anxious</h2>
            <p>
              Ah! Sometimes, things in life come at the most unexpected times.
              Even worse, sometimes these events throw your plans out the
              window. Coping with this new uncertainty and anxiety is extremely
              tough! Here are some ways to get through this.
            </p>
            <StyledButton onClick={() => setShowMoments(true)}>
              Show Anxious Day Activities
            </StyledButton>
          </MainBox>
          {showMoments && (
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <SecondaryBox>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("therapy");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={therapy}></Lottie>
                    <p>Talk to a therapist</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("alone");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={alone}></Lottie>
                    <p>Take as much time alone as needed</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("meditation");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={meditation}></Lottie>
                    <p>Try out meditation</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("food");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={food}></Lottie>
                    <p>Make sure to eat frequent meals!</p>
                  </MiniCard>
                </motion.div>
              </SecondaryBox>
            </motion.div>
          )}
          {showDesc === "therapy" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Talk to a therapist</h3>
                <p>
                  Talking to a therapist is a great way to navigate your
                  thoughts and worries. Finding the right therapist is crucial
                  in developing a trusting relationship in which you can
                  truthfully share your experiences.
                </p>
                <SmallButton
                  onClick={() => {
                    setShowMoments(true), setShowDesc(false);
                  }}
                >
                  Back to activities
                </SmallButton>
              </MainBox>
            </motion.div>
          )}
          {showDesc === "alone" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Take as much alone time as you need</h3>
                <p>
                  It is okay to want some time away from people sometimes.
                  Anxiety can get even more overwhelming when there are so many
                  words and opinions around you. Feel free to take all the
                  self-care time you need for yourself.
                </p>
                <SmallButton
                  onClick={() => {
                    setShowMoments(true), setShowDesc(false);
                  }}
                >
                  Back to activities
                </SmallButton>
              </MainBox>
            </motion.div>
          )}
          {showDesc === "meditation" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Try out meditation</h3>
                <p>
                  Meditation can be a great practice for calming the mind and
                  controlling thoughts. Many have seen great benefits from
                  frequent practice!
                </p>
                <SmallButton
                  onClick={() => {
                    setShowMoments(true), setShowDesc(false);
                  }}
                >
                  Back to activities
                </SmallButton>
              </MainBox>
            </motion.div>
          )}
          {showDesc === "food" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Make sure to eat frequent meals!</h3>
                <p>
                  Cortisol increases when you miss meals, which can exacerbate
                  anxiety symptoms. Make sure to eat frequently to keep your
                  cortisol levels stable!
                </p>
                <SmallButton
                  onClick={() => {
                    setShowMoments(true), setShowDesc(false);
                  }}
                >
                  Back to activities
                </SmallButton>
              </MainBox>
            </motion.div>
          )}
        </RightCont>
      </Content>
      <Lottie
        animationData={background}
        style={{
          position: "absolute",
          zIndex: "-5",
          height: "100vh",
          width: "100vw",
        }}
      ></Lottie>
    </div>
  );
}
