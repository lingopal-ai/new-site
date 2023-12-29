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
            <Icons.Logo className={classNames(styles.logo)} />
            <nav
              className={classNames(
                "hidden lg:flex items-center justify-start gap-5"
              )}
            >
              <p className={classNames(styles.dropOption)}>
                <span>Products</span>
                <Icons.ChevDown />
              </p>
              <p className={classNames(styles.dropOption)}>
                <span>Research</span>
                <Icons.ChevDown />
              </p>
              <p className={classNames(styles.dropOption)}>
                <span>API</span>
                <Icons.ChevDown />
              </p>
              <Link href={"#"} className={classNames(styles.link)}>
                Playground
              </Link>
              <Link href={"#"} className={classNames(styles.link)}>
                Pricing
              </Link>
              <p className={classNames(styles.dropOption)}>
                <span>Company</span>
                <Icons.ChevDown />
              </p>
            </nav>
          </div>
          <div
            className={classNames(
              "shrink-0 items-center justify-end gap-3 hidden lg:flex"
            )}
          >
            <Link href={"#"} className={classNames(styles.contactLink)}>
              Contact Sales
            </Link>
            <CustomButton
              title="Log in"
              containerStyle={classNames(styles.btn1)}
            />
            <CustomButton
              title="Get Started"
              containerStyle={classNames(styles.btn2)}
            />
          </div>
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
