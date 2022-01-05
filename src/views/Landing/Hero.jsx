import heroImage from "../../Assets/HeroImage.svg";
import wavesOpacity from "../../Assets/wavesOpacity.svg";

const Hero = () => {
  return (
    <div className="max-w-screen flex flex-col 2xl:flex-row items-center md:mb-16 mb-24">
      <div className="flex flex-col items-center">
        <h1
          style={{
            fontFamily: "Mulish, sans-serif",
            fontWeight: "800",
            fontStyle: "bold",
          }}
          className="text-[3rem] md:text-[4rem] text-center 2xl:mb-2"
        >
          Get the help you need to{" "}
          <span
            style={{ fontWeight: "900" }}
            className="text-canary-orange hover:text-canary-yellow"
          >
            succeed
          </span>
        </h1>
        <p className="text-center text-slate-700 w-[85%] md:w-full ">
          Find tutors from your own community that are willing to help.
        </p>
        <div className="h-7 md:h-10"></div>
        <button className="rounded-lg border-2 w-36 h-12 bg-secondary-blue text-white font-bold hover:bg-blue-500 hover:w-[9.2rem]">
          Get Started {">"}
        </button>
      </div>

      <img
        src={heroImage}
        className="md:max-w-6xl 2xl:max-w-7xl md:mt-[-3rem] 2xl:mt-[-5rem] z-[-1]"
      />
    </div>
  );
};

export default Hero;
