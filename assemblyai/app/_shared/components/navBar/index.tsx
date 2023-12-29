import { Icons } from "@assets";
import CustomButton from "@components/customButton";
import classNames from "classnames";
import Link from "next/link";
import AnimatedBackground from "./animatedBackground";
import styles from "./style.module.scss";

const NavBar = () => {
  return (
    <header className={classNames(styles.header, "w-full")}>
      <div className={classNames("custom-container w-full relative")}>
        <div className={classNames(styles.container)} id="nav-container">
          <div className={classNames("flex items-center justify-start gap-8")}>
          </div>
  
            <Link href={"#"} className={classNames(styles.contactLink)}>
              Contact Sales
            </Link>
          <div
            className={classNames(styles.hamIconContainer, "flex lg:hidden")}
          >
            <Icons.Hamburger />
          </div>
        </div>
        <AnimatedBackground />
      </div>
    </header>
  );
};

export default NavBar;
