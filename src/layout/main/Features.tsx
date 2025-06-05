import { useState } from "react";
import TabSection from "../../components/TabSection";

import illustrationOne from "/src/assets/illustration-features-tab-1.svg";

type Feature = "simple" | "speedy" | "easy";

const Features = () => {
  const [feature, setFeature] = useState<Feature>("simple");
  console.log(feature, setFeature);

  const handleSimple = () => {
    setFeature("simple");
  };

  const handleSpeedy = () => {
    setFeature("speedy");
  };

  const handleEasy = () => {
    setFeature("easy");
  };

  return (
    <section className="mt-32">
      <div className="flex flex-col items-center gap-y-4 px-8 pb-8 max-w-[540px] mx-auto">
        <h2 className="font-medium text-2xl leading-[220%] ">Features</h2>
        <p className="text-center text-[var(--blue-950)] text-[0.9375rem] opacity-50">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <ul className="px-8 flex flex-col sm:flex-row max-w-[608px] lg:max-w-[730px] mx-auto">
        <li className="flex flex-1 justify-center border-b-[0.0625rem] border-[var(--border)] border-t-[0.0625rem] sm:border-t-0">
          <TabSection onPress={handleSimple} active={feature === "simple"}>
            Simple Bookmarking
          </TabSection>
        </li>
        <li className="flex flex-1 justify-center border-b-[0.0625rem] border-[var(--border)]">
          <TabSection onPress={handleSpeedy} active={feature === "speedy"}>
            Speedy Searching
          </TabSection>
        </li>
        <li className="flex flex-1 justify-center border-b-[0.0625rem] border-[var(--border)]">
          <TabSection onPress={handleEasy} active={feature === "easy"}>
            Easy Sharing
          </TabSection>
        </li>
      </ul>
      <div>
        <div className="px-8 sm:px-16 pt-10 pb-9 sm:pb-[5.5rem] flex justify-end relative">
          <img src={illustrationOne} alt="" />
          <div className="absolute z-[-1] bottom-0 left-0 bg-[var(--blue-600)] h-[72.5%] w-[80%] rounded-tr-full rounded-br-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
