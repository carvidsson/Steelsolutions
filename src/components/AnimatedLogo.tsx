import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const AnimatedLogo = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  
  // Scroll progress för hela containern (200vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Mjuk spring-animation
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 35, 
    damping: 30, 
    mass: 0.5 
  });

  // === STEG 1: IN-ANIMATION (0 → 0.20) ===
  // Delar flyger in från olika håll med rotation
  
  // === STEG 2: SNAP (0.20 → 0.25) ===
  // Delarna "klickar ihop" med en liten bounce
  
  // === STEG 3: VILA (0.25 → 0.75) ===
  // Logotypen är komplett och vilar, text fadear in
  
  // === STEG 4: MIKRORÖRELSE (0.35 → 0.70) ===
  // Subtila andningsrörelser medan loggan är synlig
  
  // === STEG 5: UT-ANIMATION (0.75 → 1.0) ===
  // Delar flyger ut åt motsatt håll
  
  // Top part animations - 5 steg
  const topY = useTransform(
    smoothProgress, 
    [0, 0.20, 0.25, 0.75, 1], 
    ["-120vh", "0vh", "0vh", "0vh", "120vh"]
  );
  const topRotate = useTransform(
    smoothProgress, 
    [0, 0.20, 0.25, 0.75, 1], 
    [-180, 0, 0, 0, 180]
  );
  const topOpacity = useTransform(
    smoothProgress, 
    [0, 0.12, 0.25, 0.75, 0.88, 1], 
    [0, 1, 1, 1, 1, 0]
  );
  const topScale = useTransform(
    smoothProgress, 
    [0, 0.20, 0.25, 0.75, 1], 
    [0.7, 1, 1, 1, 0.7]
  );

  // Bottom left animations - 5 steg
  const leftX = useTransform(
    smoothProgress, 
    [0, 0.20, 0.25, 0.75, 1], 
    ["-120vw", "0vw", "0vw", "0vw", "120vw"]
  );
  const leftRotate = useTransform(
    smoothProgress, 
    [0, 0.20, 0.25, 0.75, 1], 
    [180, 0, 0, 0, -180]
  );
  const leftOpacity = useTransform(
    smoothProgress, 
    [0, 0.12, 0.25, 0.75, 0.88, 1], 
    [0, 1, 1, 1, 1, 0]
  );
  const leftScale = useTransform(
    smoothProgress, 
    [0, 0.20, 0.25, 0.75, 1], 
    [0.7, 1, 1, 1, 0.7]
  );

  // Bottom right animations - 5 steg
  const rightX = useTransform(
    smoothProgress, 
    [0, 0.20, 0.25, 0.75, 1], 
    ["120vw", "0vw", "0vw", "0vw", "-120vw"]
  );
  const rightRotate = useTransform(
    smoothProgress, 
    [0, 0.20, 0.25, 0.75, 1], 
    [-180, 0, 0, 0, 180]
  );
  const rightOpacity = useTransform(
    smoothProgress, 
    [0, 0.12, 0.25, 0.75, 0.88, 1], 
    [0, 1, 1, 1, 1, 0]
  );
  const rightScale = useTransform(
    smoothProgress, 
    [0, 0.20, 0.25, 0.75, 1], 
    [0.7, 1, 1, 1, 0.7]
  );

  // Snap effect vid ihopklickning (steg 2)
  const logoScale = useTransform(
    smoothProgress, 
    [0.19, 0.22, 0.25], 
    [1, 1.08, 1]
  );
  
  // Mikrorörelse - subtil pulsering under vila-fasen (steg 4)
  const microMovement = useTransform(
    smoothProgress,
    [0.35, 0.45, 0.55, 0.65, 0.70],
    [1, 1.015, 1, 1.015, 1]
  );

  // Text opacity
  const textOpacity = useTransform(
    smoothProgress, 
    [0.25, 0.35, 0.75, 0.90], 
    [0, 1, 1, 0]
  );

  return (
    <div ref={containerRef} className="relative h-[120vh]">
      {/* Sticky container som "pinnar" loggan i viewport */}
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-visible">
        <div ref={logoRef} className="relative w-full flex items-center justify-center lg:justify-end overflow-visible -mr-6 lg:-mr-16 2xl:-mr-32">
          <motion.svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 51 53" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[400px] lg:max-w-[700px] 2xl:max-w-[1000px] h-auto relative z-0"
            style={{ 
              scale: useTransform(
                [logoScale, microMovement],
                ([snap, micro]) => (snap as number) * (micro as number)
              )
            }}
          >
        {/* Top part */}
        <motion.path 
          d="M26.2306 0.0463867L12.6719 20.8806H20.881L30.4195 6.32972L26.2306 0.0463867Z" 
          fill="#C3A78A"
          style={{ 
            y: topY,
            rotate: topRotate,
            opacity: topOpacity,
            scale: topScale,
            originX: "50%",
            originY: "50%"
          }}
        />
        
        {/* Bottom right parts (two paths forming the right shape) */}
        <motion.g
          style={{ 
            x: rightX,
            rotate: rightRotate,
            opacity: rightOpacity,
            scale: rightScale,
            originX: "50%",
            originY: "50%"
          }}
        >
          <path 
            d="M31.1872 7.65283L27.2188 13.8259L29.5337 17.3534L27.2188 20.7266L31.2974 26.8335L37.5807 17.2432L31.1872 7.65283Z" 
            fill="#C3A78A"
          />
          <path 
            d="M34.1743 25.0698L32.1901 28.1564L34.1743 31.3212L38.8042 31.3532L42.7726 36.9751H32.684L25.6863 26.2824L21.8281 32.235L29.1036 43.2584H46.2637L50.2685 36.8649L42.4771 25.0698H34.1743Z" 
            fill="#C3A78A"
          />
        </motion.g>
        
        {/* Bottom left part */}
        <motion.path 
          d="M10.1205 25.0698H24.8841L20.8275 31.3532H13.6623L9.91437 36.9751H20.0559L24.2293 43.2584H5.11368C5.11368 43.2584 2.98947 43.1361 1.97642 41.3844C0.763848 39.29 1.97642 37.5263 1.97642 37.5263L10.1205 25.0698Z" 
          fill="#C3A78A"
          style={{ 
            x: leftX,
            rotate: leftRotate,
            opacity: leftOpacity,
            scale: leftScale,
            originX: "50%",
            originY: "50%"
          }}
        />
        
        {/* Text "STEELSOLUTIONS" - fades in with scroll */}
        <motion.path 
          d="M0.700579 47.511C0.700579 46.7758 1.30944 46.2645 2.19402 46.2645C3.04413 46.2645 3.58407 46.7356 3.60704 47.4938H2.87181C2.85458 47.1319 2.5961 46.9194 2.18253 46.9194C1.72875 46.9194 1.43581 47.1376 1.43581 47.488C1.43581 47.7867 1.59664 47.9533 1.94703 48.0337L2.60759 48.1773C3.32559 48.3324 3.67597 48.7 3.67597 49.3261C3.67597 50.1073 3.06711 50.6128 2.14232 50.6128C1.24626 50.6128 0.660371 50.136 0.643139 49.3835H1.37837C1.38411 49.7397 1.67131 49.9522 2.14232 49.9522C2.63056 49.9522 2.94074 49.7397 2.94074 49.3893C2.94074 49.1078 2.79714 48.9413 2.4525 48.8666L1.78619 48.7172C1.07394 48.5621 0.700579 48.1543 0.700579 47.511ZM3.9174 47.017V46.3392H7.11106V47.017H5.88185V50.5381H5.14661V47.017H3.9174ZM10.2809 50.5381H7.67308V46.3392H10.2809V47.017H8.40831V48.0969H10.0856V48.746H8.40831V49.8603H10.2809V50.5381ZM13.6857 50.5381H11.078V46.3392H13.6857V47.017H11.8132V48.0969H13.4904V48.746H11.8132V49.8603H13.6857V50.5381ZM15.2181 46.3392V49.8603H16.9758V50.5381H14.4829V46.3392H15.2181ZM17.3151 47.5225C17.3151 46.7528 17.9642 46.2071 18.8775 46.2071C19.7908 46.2071 20.3652 46.7126 20.3652 47.5167H19.4404C19.4404 47.2181 19.2164 47.0342 18.866 47.0342C18.4869 47.0342 18.2457 47.2066 18.2457 47.488C18.2457 47.7465 18.3778 47.8729 18.6765 47.9361L19.3141 48.0682C20.0723 48.2233 20.4341 48.5851 20.4341 49.2572C20.4341 50.0786 19.7908 50.6128 18.8143 50.6128C17.8666 50.6128 17.252 50.1015 17.252 49.3031H18.1767C18.1767 49.6133 18.4065 49.7856 18.8201 49.7856C19.2394 49.7856 19.5036 49.619 19.5036 49.3491C19.5036 49.1136 19.3945 48.9929 19.113 48.9355L18.4639 48.8034C17.7057 48.6483 17.3151 48.2175 17.3151 47.5225ZM24.9798 48.4071C24.9798 49.7052 24.1239 50.607 22.889 50.607C21.6598 50.607 20.8154 49.7109 20.8154 48.4128C20.8154 47.1147 21.6655 46.2129 22.8947 46.2129C24.1297 46.2129 24.9798 47.1089 24.9798 48.4071ZM23.9976 48.4071C23.9976 47.5972 23.584 47.1089 22.9005 47.1089C22.2112 47.1089 21.7976 47.5972 21.7976 48.4071C21.7976 49.2227 22.2112 49.7109 22.9005 49.7109C23.584 49.7109 23.9976 49.2112 23.9976 48.4071ZM26.5587 46.2875V49.6765H28.2359V50.5381H25.6282V46.2875H26.5587ZM28.6173 48.9413V46.2875H29.5478V48.8781C29.5478 49.4123 29.8407 49.7052 30.3635 49.7052C30.8919 49.7052 31.1906 49.4008 31.1906 48.8781V46.2875H32.1211V48.9413C32.1211 49.9522 31.4318 50.607 30.3635 50.607C29.3008 50.607 28.6173 49.9579 28.6173 48.9413ZM32.649 47.1491V46.2875H35.992V47.1491H34.7858V50.5381H33.8553V47.1491H32.649ZM37.4801 46.2875V50.5381H36.5496V46.2875H37.4801ZM42.2959 48.4071C42.2959 49.7052 41.4401 50.607 40.2051 50.607C38.9759 50.607 38.1315 49.7109 38.1315 48.4128C38.1315 47.1147 38.9817 46.2129 40.2109 46.2129C41.4458 46.2129 42.2959 47.1089 42.2959 48.4071ZM41.3137 48.4071C41.3137 47.5972 40.9001 47.1089 40.2166 47.1089C39.5273 47.1089 39.1138 47.5972 39.1138 48.4071C39.1138 49.2227 39.5273 49.7109 40.2166 49.7109C40.9001 49.7109 41.3137 49.2112 41.3137 48.4071ZM43.8633 50.5381H42.9443V46.2875H43.8633L45.6555 48.9929V46.2875H46.5745V50.5381H45.6555L43.8633 47.8384V50.5381ZM47.1795 47.5225C47.1795 46.7528 47.8285 46.2071 48.7418 46.2071C49.6551 46.2071 50.2295 46.7126 50.2295 47.5167H49.3047C49.3047 47.2181 49.0807 47.0342 48.7303 47.0342C48.3512 47.0342 48.11 47.2066 48.11 47.488C48.11 47.7465 48.2421 47.8729 48.5408 47.9361L49.1784 48.0682C49.9366 48.2233 50.2985 48.5851 50.2985 49.2572C50.2985 50.0786 49.6551 50.6128 48.6786 50.6128C47.7309 50.6128 47.1163 50.1015 47.1163 49.3031H48.0411C48.0411 49.6133 48.2708 49.7856 48.6844 49.7856C49.1037 49.7856 49.3679 49.619 49.3679 49.3491C49.3679 49.1136 49.2588 48.9929 48.9773 48.9355L48.3283 48.8034C47.5701 48.6483 47.1795 48.2175 47.1795 47.5225Z" 
          fill="#949697"
          style={{ opacity: textOpacity }}
        />
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
