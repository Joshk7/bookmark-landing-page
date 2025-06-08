import { useState } from "react";
import TabSection from "../../components/TabSection";

import simple from "/src/assets/illustration-features-tab-1.svg";
import speedy from "/src/assets/illustration-features-tab-2.svg";
import easy from "/src/assets/illustration-features-tab-3.svg";
import Button from "../../components/Button";

type Feature = "simple" | "speedy" | "easy";

const featureImages = {
  simple,
  speedy,
  easy,
};

const featureTitles = {
  simple: "Bookmark in one click",
  speedy: "Intelligent search",
  easy: "Share your bookmarks",
};

const featureDescriptions = {
  simple: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`,
  speedy: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`,
  easy: `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`,
};

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
        <h2 className="font-medium text-2xl leading-[220%]">Features</h2>
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
      <div className="flex flex-col gap-x-[7.5rem] gap-y-8 sm:gap-y-16 lg:flex-row lg:items-center">
        <div className="flex-1 px-8 sm:px-16 pt-10 pb-9 sm:pb-[5.5rem] flex justify-end relative">
          <img src={featureImages[feature]} alt="" />
          <div className="absolute z-[-1] bottom-0 left-0 bg-[var(--blue-600)] h-[72.5%] w-[80%] rounded-tr-full rounded-br-full"></div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-y-4 px-8 pb-8 lg:p-0">
          <div className="max-w-[450px] mx-auto lg:ml-0">
            <h2 className="font-medium text-2xl leading-[220%]">
              {featureTitles[feature]}
            </h2>
            <p className="text-center lg:text-left text-[var(--blue-950)] text-[0.9375rem] opacity-50">
              {featureDescriptions[feature]}
            </p>
            <Button primary>More Info</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
