"use client";

import styles from "./index.module.scss";

type Props = {
	message: string;
};

export default function Toast({ message }: Props) {
	return <div className={styles["toast"]}>{message}</div>;
}
