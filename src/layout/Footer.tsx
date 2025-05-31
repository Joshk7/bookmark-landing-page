import bookmarkWhite from "/src/assets/logo-bookmark-white.svg";
import facebook from "/src/assets/icon-facebook.svg";
import twitter from "/src/assets/icon-twitter.svg";

const Footer = () => {
    return (
        <footer className="w-[100vw] p-8 bg-[var(--blue-950)] flex justify-center">
            <div className="max-w-[75%] w-full flex flex-col md:flex-row items-center justify-between gap-y-12">
                <img
                    className="max-h-[25px]"
                    src={bookmarkWhite}
                    height={25}
                    alt="Bookmark"
                />
                <ul className="flex flex-col md:flex-row items-center gap-y-6 gap-x-6 me-auto">
                    <li>
                        <a
                            className="text-[0.9375rem] leading-[1.0625rem] tracking-[0.108125rem] text-[var(--white)] uppercase"
                            href="#features"
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-[0.9375rem] leading-[1.0625rem] tracking-[0.108125rem] text-[var(--white)] uppercase"
                            href="#pricing"
                        >
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-[0.9375rem] leading-[1.0625rem] tracking-[0.108125rem] text-[var(--white)] uppercase"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <ul className="flex items-center gap-x-10 md:gap-x-6">
                    <li>
                        <a href="#facebook">
                            <img
                                src={facebook}
                                height={24}
                                width={24}
                                alt="Facebook"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#twitter">
                            <img
                                src={twitter}
                                height={24}
                                width={24}
                                alt="Twitter"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
