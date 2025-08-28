const PageBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,30%,96%)] via-white to-[hsl(210,30%,98%)]" />
      
      {/* Dark blue tech grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="tech-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="hsl(223, 90%, 30%)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid)" />
      </svg>
      
      {/* Animated diagonal lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full animate-slide-diagonal">
          <div className="absolute top-0 left-0 w-[200%] h-[200%] opacity-5">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[hsl(223,90%,30%)] to-transparent"
                style={{
                  top: `${i * 100}px`,
                  transform: `rotate(-45deg) translateX(${i * 10}px)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle floating orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[hsl(223,90%,30%)]/5 rounded-full filter blur-[120px] animate-float-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[hsl(200,100%,60%)]/5 rounded-full filter blur-[120px] animate-float-slow animation-delay-4000" />
    </div>
  );
};

export default PageBackground;