import { useRouter } from "next/router";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import background from "../public/background.json";
import { motion } from "framer-motion";
import angry from "../public/angry.json";
import friends from "../public/friends.json";
import camera from "../public/camera.json";
import help from "../public/help.json";
import hobby from "../public/hobby.json";
import breathe from "../public/breathe.json";
import gym from "../public/gym.json";

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

export default function Angry() {
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
        margin: "0 auto",
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
            <Lottie animationData={angry}></Lottie>
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
            <h2>Angry</h2>
            <p>
              Ugh! Sometimes things can make you feel so annoyed! It&apos;s ok
              to feel angry sometimes. Anger is a natural response to when our
              needs and expectations are not met. Here are some ways to get
              through an angry moment.
            </p>
            <StyledButton onClick={() => setShowMoments(true)}>
              Show Angry Moment Activities
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
                    setShowDesc("gym");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={gym}></Lottie>
                    <p>Sweat out your frustration with exercise</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("help");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={help}></Lottie>
                    <p>Ask for advice after you&apos;ve calmed down</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("breathe");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={breathe}></Lottie>
                    <p>Practice mindful breathing</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("hobby");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={hobby}></Lottie>
                    <p>Get some fresh air and time outside in nature</p>
                  </MiniCard>
                </motion.div>
              </SecondaryBox>
            </motion.div>
          )}
          {showDesc === "gym" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Get some exercise and sweat it out!</h3>
                <p>
                  Anger is great fuel for the gym. Grab those dumbbells and get
                  your workout on! Just make sure not to hurt yourself in the
                  process.
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
          {showDesc === "breathe" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Practice mindful breathing</h3>
                <p>
                  Mindful breathing is a great way to lower your heart rate and
                  calm down your rage. Sometimes we say things we don&apos;t
                  mean when we&apos;re angry, so try mindful breathing the next
                  time you catch yourself extremely agitated!
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
          {showDesc === "help" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Reach out once you&apos;ve calmed down</h3>
                <p>
                  A listening ear can be extremely helpful, but when we&apos;re
                  in the heat of anger, it&apos;s hard for our friends to
                  support us. Try to take some time alone first to gather your
                  thoughts!
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
          {showDesc === "hobby" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Get some fresh air and time outside in nature</h3>
                <p>
                  The outdoors can do wonders for your mental health. If you
                  catch yourself in a fit, try taking a walk outside to calm
                  down.
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
