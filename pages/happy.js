import { useRouter } from "next/router";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import background from "../public/background.json";
import { motion } from "framer-motion";
import happy from "../public/happy.json";
import friends from "../public/friends.json";
import camera from "../public/camera.json";
import help from "../public/help.json";
import hobby from "../public/hobby.json";

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

export default function Happy() {
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
            <Lottie animationData={happy}></Lottie>
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
            <h2>Happy</h2>
            <p>
              Congratulations! Happy is a nice feeling emotion, and we love to
              feel happy, so there&apos;s not much to do in terms of coping.
              However, it&apos;s important to remember that we don&apos;t always
              have to feel happy. In the meantime, check out the activities
              below to bask in the wonderful happy moments!
            </p>
            <StyledButton onClick={() => setShowMoments(true)}>
              Show Happy Day Activities
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
                    <p>Enjoy it with friends & family</p>
                  </MiniCard>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowMoments(false);
                    setShowDesc("camera");
                  }}
                >
                  <MiniCard>
                    <Lottie animationData={camera}></Lottie>
                    <p>Take videos of happy moments</p>
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
                    <p>Help out people in need</p>
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
                    <p>Use your happy energy for hobbies!</p>
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
                <h3>Enjoy it with friends and family</h3>
                <p>
                  Spending time with your loved ones is such a precious activity
                  that is overlooked. There is never enough time with your loved
                  ones!
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
          {showDesc === "camera" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MainBox>
                <h3>Take videos of your happy moments</h3>
                <p>
                  Sometimes we wish we could look back on the good times. As
                  much as it is important to enjoy and live in the moment,
                  don&apos;t forget to record your happy moments every now and
                  then for some tangible memories!
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
                <h3>Help those in need</h3>
                <p>
                  There are always people on this planet who could use some
                  help. When we are happy, we feel the most generous, and can
                  give the best support! Take advantage of how good you feel,
                  and make an effort to make others feel as good as you do.
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
                <h3>Use your happy energy for hobbies!</h3>
                <p>
                  Happy energy often means creative, inspired and imaginative
                  energy. Try out that hobby you&apos;ve been eyeing for the
                  past month!
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
