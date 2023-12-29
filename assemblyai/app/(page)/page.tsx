import Stories from "@components/stories";
import classNames from "classnames";
import styles from "./style.module.scss";
import WhyUs from "@components/whyUs";
import HighTech from "@components/highTech";
import JoinUs from "@components/joinUs";
import GetStarted from "@components/getStarted";
import Footer from "@components/footer";
import Header from "@components/header";
import Explore from "@components/explore";
import { Icons } from "@assets";
import NavBar from "@components/navBar";

const Home = () => {
  return (
    <main className={classNames("flex flex-col relative")}>
      <div className={classNames(styles.chatContainer)}>
        <Icons.ChatIcon />
      </div>
      <NavBar />
      <Header />
      <Explore />
      <Stories />
      <div className={classNames(styles.whyUsContainer, "mt-10 md:mt-20")}>
        <WhyUs />
        <HighTech />
      </div>
      <JoinUs />
      <div>
        <GetStarted />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
