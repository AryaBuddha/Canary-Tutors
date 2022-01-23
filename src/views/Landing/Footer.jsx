import tilt from "../../Assets/tilt.svg";
import wavesNegative from "../../Assets/wavesNegative.svg";

const Footer = () => {
  return (
    <div>
      <img src={wavesNegative} className="md:mb-[-3rem]" />
      <div className="w-full flex justify-center items-end bg-[#EEEEEE]">
        <h1 className="mb-3">©Canary Tutoring 2022</h1>
      </div>
    </div>
  );
};

export default Footer;
