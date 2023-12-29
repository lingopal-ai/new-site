import { Icons } from "@assets";
import classNames from "classnames";
import styles from "./style.module.scss";

interface Props {
  title: string;
  Icon: any;
  description: string;
  actionLabel: string;
}

const InfoCard = ({ title, Icon, description, actionLabel }: Props) => {
  return (
    <div className={classNames("flex flex-col items-start gap-3")}>
      <Icon className={classNames(styles.iconStyle)} />
      <span className={classNames(styles.title)}>{title}</span>
      <p className={classNames(styles.para, "mb-0")}>{description}</p>
      <div
        className={classNames(
          "flex items-center justify-start gap-2",
          styles.actionContainer
        )}
      >
        <span>{actionLabel}</span>
        <Icons.ArrowRight />
      </div>
    </div>
  );
};

export default InfoCard;
