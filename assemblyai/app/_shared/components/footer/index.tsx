import { Icons } from "@assets";
import classNames from "classnames";
import { companyList, productList, resourcesList } from "./constants";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={classNames(styles.container)}>
      <div className={classNames("custom-container")}>
        <div
          className={classNames(
            "grid grid-cols-2 gap-5",
            styles.contentContainer
          )}
        >
          <div
            className={classNames(
              "col-span-2 lg:col-span-1 flex flex-col items-start gap-5"
            )}
          >
            <Icons.Logo />
            <span className={classNames(styles.companyInfo)}>
              Build new AI products with voice data leveraging AssemblyAI’s
              industry-leading Speech AI models for accurate speech-to-text,
              speaker detection, sentiment analysis, chapter detection, PII
              redaction, and more.
            </span>
            <div
              className={classNames(
                "flex items-center justify-content-start gap-2"
              )}
            >
              <div className={classNames(styles.socialIcon)}>
                <Icons.Youtube />
              </div>
              <div className={classNames(styles.socialIcon)}>
                <Icons.Twitter />
              </div>
              <div className={classNames(styles.socialIcon)}>
                <Icons.Discord />
              </div>
              <div className={classNames(styles.socialIcon)}>
                <Icons.LinkdIn />
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-3 gap-5"
            )}
          >
            <div className={classNames("flex flex-col items-start gap-3")}>
              <span className={classNames(styles.listTitle)}>Product</span>
              {productList?.map((itm, inx) => {
                return (
                  <span className={classNames(styles.listItem)} key={inx}>
                    {itm}
                  </span>
                );
              })}
            </div>
            <div className={classNames("flex flex-col items-start gap-3")}>
              <span className={classNames(styles.listTitle)}>Resources</span>
              {resourcesList?.map((itm, inx) => {
                return (
                  <span className={classNames(styles.listItem)} key={inx}>
                    {itm}
                  </span>
                );
              })}
            </div>
            <div className={classNames("flex flex-col items-start gap-3")}>
              <span className={classNames(styles.listTitle)}>Company</span>
              {companyList?.map((itm, inx) => {
                return (
                  <span className={classNames(styles.listItem)} key={inx}>
                    {itm}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(styles.bottomContainer)}>
        <div className={classNames("custom-container flex")}>
          <div className={classNames("grid grid-cols-2 gap-5")}>
            <div className={classNames("col-span-2 lg:col-span-1")}>
              <span className={classNames(styles.label)}>
                © 2023 AssemblyAI, Inc.
              </span>
            </div>
            <div
              className={classNames(
                "col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-4 gap-5"
              )}
            >
              <div
                className={classNames(
                  "flex flex-col  items-start md:items-center gap-3"
                )}
              >
                <span className={classNames(styles.label2)}>
                  Data processing addendum
                </span>
              </div>
              <div
                className={classNames(
                  "flex flex-col items-start md:items-center gap-3"
                )}
              >
                <span className={classNames(styles.label2)}>Subprocessors</span>
              </div>
              <div className={classNames("flex flex-col items-start gap-3")}>
                <span className={classNames(styles.label2)}>
                  Terms of service
                </span>
              </div>
              <div className={classNames("flex flex-col items-start gap-3")}>
                <span className={classNames(styles.label2)}>
                  Privacy policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
