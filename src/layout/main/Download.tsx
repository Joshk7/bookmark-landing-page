import Button from "../../components/Button";

const Download = () => {
  return (
    <section className="px-8 py-[9.875rem]">
      <div>
        <h2 className="text-center font-medium text-2xl sm:text-[2rem] leading-[3.25rem] tracking-[-0.005rem] sm:tracking-[-0.00625rem]">Download the extension</h2>
        <p className="text-center text-[var(--blue-950)] text-[0.9375rem] sm:text-[1.125rem] leading-[165%] sm:leading-[1.75rem] opacity-50">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <ul>
        <li>
            <img src="/src/assets/logo-chrome.svg" alt="" />
            <h2>Add to Chrome</h2>
            <img src="/src/assets/bg-dots.svg" alt="" />
            <p>Minimum version 62</p>
            <Button>Add & Install Extension</Button>
        </li>
        <li>
            <img src="/src/assets/logo-firefox.svg" alt="" />
            <h2>Add to Firefox</h2>
            <img src="/src/assets/bg-dots.svg" alt="" />
            <p>Minimum version 55</p>
            <Button>Add & Install Extension</Button>
        </li>
        <li>
            <img src="/src/assets/logo-opera.svg" alt="" />
            <h2>Add to Opera</h2>
            <img src="/src/assets/bg-dots.svg" alt="" />
            <p>Minimum version 46</p>
            <Button>Add & Install Extension</Button>
        </li>
      </ul>
    </section>
  );
};

export default Download;
