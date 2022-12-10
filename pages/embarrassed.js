import { useRouter } from "next/router";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import background from "../public/background.json";
import { motion } from "framer-motion";
import embarrassed from "../public/embarrassed.json";
import friends from "../public/friends.json";
import camera from "../public/camera.json";
import help from "../public/help.json";
import hobby from "../public/hobby.json";
import distraction from "../public/distraction.json";
import remember from "../public/remember.json";
import laugh from "../public/laugh.json";
import learning from "../public/learning.json";

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

export default function Embarrassed() {
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
      }}
    >
      <Content
        style={{ padding: "2rem" }}
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
            <Lottie animationData={embarrassed}></Lottie>
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
            <h2>Embarrassed</h2>
            <p>
              Oh no! Something happened that made you feel incredibly
              embarrassed. You feel like crawling up into a ball and launching
              yourself into a black hole. But fear not! This feeling will pass —
              here are some ways to cope in this moment.
            </p>
            <StyledButton onClick={() => setShowMoments(true)}>
              Show Embarrassment Activities
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
                    setShowDesc("distraction");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={distraction}></Lottie>
                    <p>Find a distraction</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("remember");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={remember}></Lottie>
                    <p>Remind yourself of how small this event is</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("laugh");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={laugh}></Lottie>
                    <p>Laugh at yourself and this funny moment!</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("learning");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={learning}></Lottie>
                    <p>Accept it as a learning experience</p>
                  </MiniCard>
                </motion.div>
              </SecondaryBox>
            </motion.div>
          )}
          {showDesc === "distraction" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Find a distraction</h3>
                <p>
                  Often times, we let these feelings of embarrassment take over
                  our minds. Finding a distraction can keep these thoughts away
                  temporarily for when you are more ready to process them.
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
          {showDesc === "remember" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Remember how insignificant this occurence was</h3>
                <p>
                  These events may feel like major life changing moments, but
                  they are usually forgotten within days! How well can you
                  recall embarrassing moments of those around you? Probably not
                  very well. The same goes for other people — this moment will
                  most likely be forgotten before you know it!
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
          {showDesc === "laugh" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Laugh at yourself!</h3>
                <p>
                  Let's be real, how funny is it that this occurence happened?
                  We can make light of things like this by giving ourselves
                  permission to laugh. We all make mistakes! We're human.
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
          {showDesc === "learning" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Accept it as a learning experience</h3>
                <p>
                  Life lessons are best learned through mistakes — as much as it
                  sucks, it's nice to know that this occurence probably won't
                  happen every again.
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
