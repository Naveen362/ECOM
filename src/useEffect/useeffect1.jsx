import { useState, useEffect } from "react";
import "./useref.css";

const arrayi = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXtDD53SCMshKCnwGtHGtCWF4267DgrVQGw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiTeDc6QnfDi6SRRz3jWYlgu0066QyI5vaA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT397uw-GZ-Ta0zlISHfi9P4d5mTxcMFZGFXw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAzgw1MJ0nGRsFdlJQXN6eNz-BWdJh_yZ-A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHmFBw4AHEHPrpUXO84rkKYlLTw7eNVirkg&s"
];

export default function SliderEffect() {
  const [a, seta] = useState(0);

  useEffect(() => {
    const xi = setInterval(() => {
      seta((prev) => (prev === arrayi.length - 1 ? 0 : prev + 1)); // Loop back to 0 if last image is reached
    }, 2000);

    return () => clearInterval(xi); // Cleanup interval when component unmounts
  }, []);

  const fn1 = () => {
    // seta((prev) => (prev === arrayi.length - 1 ? 0 : prev + 1)); // Functional form for correct state update
    if (a===arrayi.length-1){
        seta(0)
    }
    seta(a+1)
  };

  const fn2 = () => {
    seta((prev) => (prev === 0 ? arrayi.length - 1 : prev - 1)); // Handle backward navigation
  };

  return (
    <div className="sliderimage">
      <img src={arrayi[a]} alt="slider" style={{ width: "100%", height: "500px" }} />
      <button onClick={fn1} style={{ position: "absolute", right: "20px", top: "50%",fontSize:"50px"}}>
        R
      </button>
      <button onClick={fn2} style={{ position: "absolute", left: "20px", top: "50%",fontSize:"50px"}}>
        L
      </button>
    </div>
  );
}
