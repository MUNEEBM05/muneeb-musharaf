import AnimatedTechBackground from "./AnimatedTechBackground";

const PageBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <AnimatedTechBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  );
};

export default PageBackground;
