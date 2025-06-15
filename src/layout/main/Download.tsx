import Button from "../../components/Button";

const Download = () => {
  return (
    <section className="px-8 py-[9.875rem]">
      <div className="max-w-[540px] mx-auto">
        <h2 className="text-center font-medium text-2xl sm:text-[2rem] leading-[3.25rem] tracking-[-0.005rem] sm:tracking-[-0.00625rem]">Download the extension</h2>
        <p className="text-center text-[var(--blue-950)] text-[0.9375rem] sm:text-[1.125rem] leading-[165%] sm:leading-[1.75rem] opacity-50">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <ul className="mx-auto flex flex-wrap pt-10 px-4 gap-y-10">
        <li className="mx-auto flex flex-col">
            <img className="mx-auto mb-8" src="/src/assets/logo-chrome.svg" alt="" />
            <h2 className="text-center mb-2">Add to Chrome</h2>
            <p className="text-center mb-6">Minimum version 62</p>
            <img className="mb-6" src="/src/assets/bg-dots.svg" alt="" />
            <Button className="mx-auto" primary>Add & Install Extension</Button>
        </li>
        <li className="mx-auto flex flex-col">
            <img className="mx-auto mb-8" src="/src/assets/logo-firefox.svg" alt="" />
            <h2 className="text-center mb-2">Add to Firefox</h2>
            <p className="text-center mb-6">Minimum version 55</p>
            <img className="mb-6" src="/src/assets/bg-dots.svg" alt="" />
            <Button className="mx-auto" primary>Add & Install Extension</Button>
        </li>
        <li className="mx-auto flex flex-col">
            <img className="mx-auto mb-8" src="/src/assets/logo-opera.svg" alt="" />
            <h2 className="text-center mb-2">Add to Opera</h2>
            <p className="text-center mb-6">Minimum version 46</p>
            <img className="mb-6" src="/src/assets/bg-dots.svg" alt="" />
            <Button className="mx-auto" primary>Add & Install Extension</Button>
        </li>
      </ul>
    </section>
  );
};

export default Download;
