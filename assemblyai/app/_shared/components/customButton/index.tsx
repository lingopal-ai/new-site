"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import Link from "next/link";

interface BtnProps extends React.HTMLProps<HTMLButtonElement> {
  containerStyle: any;
  Icon: any;
  iconStyle: any;
  IconDirction: string;
  disabled?: boolean;
}

const CustomButton = ({
  title,
  onClick,
  containerStyle,
  Icon,
  iconStyle,
  IconDirction,
  disabled,
  style,
}: Partial<BtnProps>) => {
  const direction = {
    left: "left",
    right: "right",
  };
  return (
    <Link href="https://calendly.com/lingopal-ai/lingopal-ai-demo" className="z-50">
      <button
        className={classNames(
          styles.customBtnContainer,
          containerStyle && containerStyle
        )}
        onClick={onClick}
        disabled={disabled}
        type="submit"
        style={style}
      >
        {IconDirction === direction.left ? (
          Icon ? (
            <Icon className={iconStyle ? iconStyle : ""} />
          ) : null
        ) : null}

        <span>{title}</span>
        {IconDirction === direction.right ? (
          Icon ? (
            <Icon className={iconStyle ? iconStyle : ""} />
          ) : null
        ) : null}
      </button>
    </Link>
  );
};

export default CustomButton;
