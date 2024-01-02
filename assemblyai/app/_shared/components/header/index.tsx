import { Icons } from "@assets";
import CustomButton from "@components/customButton";
import classNames from "classnames";
import styles from "./style.module.scss";
import WaveAnimation from "./waveAnimation";
import SnakeAnimation from "./snakeAnimation";
import Image from "next/image";

const Header = () => {
  return (
    <div className={classNames(styles.headerContainer, "relative")}>
      <div className={classNames(styles.bg)} />
      <div className={classNames("custom-container lg:flex ")}>
        <div
          className={classNames(
            styles.content,
            "flex flex-col items-center lg:items-start gap-5"
          )}
        >
          <h1 className="text-center lg:text-left">
            Translate live video & <br className="flex lg:hidden" />{" "}
             <br /> audio in realtime 
          </h1>
          <p className="text-center lg:text-left">
          Built by AI experts, LingoPal translates millions of data points daily.  Used across many industries for our accurate speech-to-speech translation, speaker detection, speaker emotion  and more. 
          </p>
          <div
            className={classNames(
              "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full"
            )}
          >
            <CustomButton
              title="Contact Sales"
              containerStyle={classNames(styles.btn1)}
            />
          </div>
        </div>
        <div className="w-0 max aspect-square lg:w-full lg:flex-1 relative lg:h-[554px] z-10 self-end">
          <Image 
            src={"/header_image.png"}
            alt="Header Image"
            priority
            height={554}
            width={831}
          />
        </div>
      </div>
      <SnakeAnimation />
      <WaveAnimation />
      <div className={classNames(styles.loopSlider)} id="slider-id">
        <div className={classNames(styles.inner, "gap-5")}>
          <Icons.LoopLogo2 />
          <Icons.BBCLogo />
          <Icons.TypeFormLogo />
          <Icons.NBCLogo />
          <Icons.HappyScribeLogo />
          <Icons.ApolloLogo />
          <Icons.VeedLogo />
          <Icons.GrainLogo />
          <Icons.AirGramLogo />
          <Icons.DropBoxLogo />
          <Icons.CallRailLogo2 />
          <Icons.LoopLogo2 />
          <Icons.BBCLogo />
          <Icons.TypeFormLogo />
          <Icons.NBCLogo />
          <Icons.HappyScribeLogo />
          <Icons.ApolloLogo />
          <Icons.VeedLogo />
          <Icons.GrainLogo />
          <Icons.AirGramLogo />
          <Icons.DropBoxLogo />
          <Icons.CallRailLogo2 />
        </div>
      </div>
    </div>
  );
};

export default Header;
