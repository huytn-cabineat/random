import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

function HomePage() {
  const lucky = Math.floor(Math.random() * 200);
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
      <AnimatedNumbers
        includeComma
        animateToNumber={lucky}
        configs={[{ mass: 1, tension: 23, friction: 4400, duration: 15000 }]}
      ></AnimatedNumbers>
    </div>
  );
}

export default HomePage;
