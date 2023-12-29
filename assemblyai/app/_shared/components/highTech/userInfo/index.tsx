import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  title: string;
  avatar: any;
  username: string;
}

const UserInfo = ({ title, avatar, username }: Props) => {
  return (
    <div className={classNames("flex items-center justify-start gap-2 mb-1")}>
      <Image
        placeholder="blur"
        src={avatar}
        alt=""
        className={classNames(styles.avatarStyle)}
      />
      <div
        className={classNames(
          "flex flex-col items-start justify-content-between"
        )}
      >
        <span className={classNames(styles.title)}>{title}</span>
        <span className={classNames(styles.username)}>@{username}</span>
      </div>
    </div>
  );
};

export default UserInfo;
