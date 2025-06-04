import Button from "../../components/Button";
import illustration from "/src/assets/illustration-hero.svg";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row-reverse items-center gap-y-12 md:gap-y-[4.5rem]">
      <div className="lg:max-w-3xl py-12 px-8 lg:px-0 w-full relative flex justify-center">
        <img className="relative z-1" src={illustration} alt="" />
        <div className="absolute z-0 h-3/4 min-w-72 w-2/3 bg-[#5267DF] bottom-0 right-0 rounded-tl-full rounded-bl-full"></div>
      </div>
      <div className="px-8 max-w-[540px] flex flex-col items-center lg:items-start gap-y-6">
        <h1 className="text-center lg:text-left">A Simple Bookmark Manager</h1>
        <p className="text-center lg:text-left mx-auto text-[var(--blue-950)] opacity-50">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="px-8 lg:px-0 flex gap-x-4">
          <Button primary>Get it on Chrome</Button>
          <Button secondary>Get it on Firefox</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
