import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useScroll, useSpring, animated } from "@react-spring/web";
import { useRef, useEffect, useState } from "react";
import { PiCaretDoubleDownBold } from "react-icons/pi";

function App() {
  const ref = useRef();

  // Using useScroll to get scrollYProgress
  const { scrollYProgress } = useScroll();

  // Animating the scale based on scrollYProgress
  const springScale = useSpring({
    transform: `scale(${1 + scrollYProgress.value * 0.8})`, // Adjust scaling factor as per requirement
  });

  return (
    <>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          speed={1}
          sticky={{ start: 0, end: 3 }}
          style={{
            textAlign: "center",
            bottom: "0px",
          }}
          onClick={() => ref.current.scrollTo(1)}
        >
          <PiCaretDoubleDownBold
            className="fixed opacity-50 cursor-pointer hover:opacity-100 transform left-[50vw] bottom-2"
            size={100}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            background:
              "linear-gradient(to top, #ffffff, #f4f6ff, #e5eeff, #d1e7ff, #b8e1ff, #a7ddfe, #94d8fc, #7ed4fa, #6fd0fb, #5fcbfc, #4cc7fe, #35c2ff)",
          }}
        />
        <ParallaxLayer className="w-screen " offset={0} speed={1}>
          <img
            className=" w-screen object-cover "
            src={"/static/image/Landing Page.png"}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={3}
          factor={2}
          style={{
            background: "#ffffff",
          }}
        />
        {/* seminackground */}
        <ParallaxLayer
          className="w-screen object-cover"
          offset={0.85}
          speed={2}
        >
          <animated.img
            className=" w-[150vw] opacity-30"
            src={"/static/image/cloud.png"}
          />
        </ParallaxLayer>
        {/* Middleground */}
        <ParallaxLayer className="w-screen " offset={0.8} speed={3.5}>
          <img
            className=" w-screen object-cover opacity-60"
            src={"/static/image/cloudfg.png"}
          />
        </ParallaxLayer>
        {/* foreground */}
        <ParallaxLayer className="w-screen " offset={0.7} speed={5}>
          <animated.img
            style={springScale}
            className=" w-screen object-cover"
            src={"/static/image/cloudfg.png"}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.2}
          onClick={() => ref.current.scrollTo(2)}
        >
          <div className="relative w-32 h-32 bg-green-500  origin-center"></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.2}
          onClick={() => ref.current.scrollTo(3)}
        >
          <div className="relative w-32 h-32 bg-green-500  origin-center"></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.2}
          onClick={() => ref.current.scrollTo(4)}
        >
          <div className="relative w-32 h-32 bg-green-500  origin-center"></div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
