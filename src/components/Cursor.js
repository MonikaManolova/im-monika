import styled from "styled-components";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const StyledCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e0ff23;
  border: 1px solid #1f1e1c;
  z-index: 2000;
  opacity: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFollower = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  opacity: 0;
  z-index: 1000;
  pointer-events: none;
`;

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
  }, []);

  window.addEventListener("mousemove", (e) => {
    cursorRef.current &&
      gsap.to(cursorRef.current, {
        opacity: 1,
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
      });
    followerRef.current &&
      gsap.to(followerRef.current, {
        opacity: 0.5,
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
  });

  return (
    <>
      <StyledCursor className="cursor" ref={cursorRef}></StyledCursor>
      <StyledFollower className="follower" ref={followerRef}></StyledFollower>
    </>
  );
};

export default Cursor;
