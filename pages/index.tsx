import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

function HomePage() {
  const [lucky, setLuckey] = useState(0);
  const clickRun = () => {
    setLuckey(100);
    setTimeout(() => {
      setLuckey(Math.floor(Math.random() * 200));
    }, 7500);
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: "url('/assets/img/bg.jpeg')",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundOrigin: "center",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        color: "white",
        fontSize: "15rem",
      }}
    >
      {lucky !== 0 && (
        <AnimatedNumbers
          includeComma
          animateToNumber={lucky}
          configs={[{ mass: 1, tension: 1234, friction: 4400, duration: 7500 }]}
        ></AnimatedNumbers>
      )}
      <button
        style={{
          position: "fixed",
          left: 5,
          bottom: 5,
          padding: "8px 15px 8px 15px",
          backgroundColor: "transparent",
          borderRadius: 0,
          border: "black 1px solid",
        }}
        onClick={clickRun}
      >
        run
      </button>
    </div>
  );
}

export default HomePage;
