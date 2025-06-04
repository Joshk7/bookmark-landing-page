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
      <div className="flex flex-col items-center gap-y-4 px-8 pb-8">
        <h2 className="font-medium text-2xl leading-[220%] ">Features</h2>
        <p className="text-center text-[var(--blue-950)] text-[0.9375rem] opacity-50">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <ul className="px-8 flex flex-col sm:flex-row">
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
        <div className="px-8 pt-10 pb-9 flex justify-end">
          <img src={illustrationOne} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Features;
