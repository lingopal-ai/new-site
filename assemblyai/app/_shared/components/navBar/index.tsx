import { Icons } from "@assets";
import CustomButton from "@components/customButton";
import classNames from "classnames";
import Link from "next/link";
import AnimatedBackground from "./animatedBackground";
import styles from "./style.module.scss";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className={classNames(styles.header, "w-full")}>
      <div className={classNames("custom-container w-full relative py-5")}>
        <div className={classNames(styles.container)} id="nav-container">
          <div className={classNames("flex items-center justify-start gap-8")}>
            <Image
              src={"/lingopal_white_logo.png"}
              alt="Lingopal Logo"
              width={105}
              height={43}
              className={classNames(styles.logo)}
            />
            {/* <nav
              className={classNames(
                "hidden lg:flex items-center justify-start gap-5"
              )}
            >
              <Link href={"#"} className={classNames(styles.link)}>
                Blogs
              </Link>
              <Link href={"#"} className={classNames(styles.link)}>
                API
              </Link>
              <Link href={"#"} className={classNames(styles.link)}>
                Pricing
              </Link>
              <Link href={"#"} className={classNames(styles.link)}>
                Company
              </Link>
            </nav> */}
          </div>
          <div
            className={classNames(
              "shrink-0 items-center justify-end gap-3 hidden lg:flex"
            )}
          >
            {/* <CustomButton
              title="Log in"
              containerStyle={classNames(styles.btn1)}
            /> */}
            <CustomButton
              title="Schedule Demo"
              containerStyle={classNames(styles.btn2)}
            />
          </div>
          <div
            className={classNames(styles.hamIconContainer, "flex lg:hidden")}
            >
            {/* <Icons.Hamburger /> */}
          </div>
        </div>
        <AnimatedBackground />
      </div>
    </header>
  );
};

export default NavBar;
