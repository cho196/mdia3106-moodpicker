import { useRouter } from "next/router";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import background from "../public/background.json";
import { motion } from "framer-motion";
import sad from "../public/sad.json";
import friends from "../public/friends.json";
import hobby from "../public/hobby.json";
import feels from "../public/feels.json";
import music from "../public/music.json";

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

export default function Sad() {
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
            <Lottie animationData={sad}></Lottie>
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
            <h2>Sad</h2>
            <p>
              Sadness can come at so many intensities — sometimes things are
              small inconveniences, but sometimes the devastation of events can
              feel so overwhelming. Remember that this feeling will pass, and
              you are so capable of getting through this moment!
            </p>
            <StyledButton onClick={() => setShowMoments(true)}>
              Show Sad Day Activities
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
                    setShowDesc("friends");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={friends}></Lottie>
                    <p>Talk to a trusted friend/family member</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("feels");
                  }}
                >
                  <MiniCard>
                    <Lottie
                      animationData={feels}
                      style={{ height: "60%" }}
                    ></Lottie>
                    <p>Allow yourself to feel sad</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("music");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={music}></Lottie>
                    <p>Listen to a good playlist</p>
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
                    <p>Take some time out in nature</p>
                  </MiniCard>
                </motion.div>
              </SecondaryBox>
            </motion.div>
          )}
          {showDesc === "friends" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Talk to a trusted friend or family member</h3>
                <p>
                  The people closest to you are the ones that will be there for
                  you during these hard times. Don&apos;t feel guilty about
                  reaching out! They will appreciate that you trust their input
                  and company.
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
          {showDesc === "feels" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Allow yourself to feel sad</h3>
                <p>
                  Our instincts when we&apos;re sad are to block away these
                  emotions and make them go away as soon as possible. However,
                  doing so brushes these feelings aside, making them even harder
                  to cope with in the future. Allow yourself to feel sad and
                  notice how your body responds to this natural emotion!
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
          {showDesc === "music" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Listen to a good playlist</h3>
                <p>
                  Music provides more emotional support that we realize! Whether
                  you want to listen to sad songs and cry it out, or play a few
                  mood boosters, music is the perfect support system for those
                  sad days.
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
                <h3>Take some time out in nature</h3>
                <p>
                  Nature can be incredibly healing. Taking a walk has been
                  proved to improve depression and anxiety in multiple studies.
                  Get your steps in!
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
