import Header from "@/components/Header";
import Table from "@/components/Table/Table";

import styles from "./Layout.module.css";
import { ReactNode } from "react";

type TLayout = {
  children: ReactNode;
};

export default function Layout({ children }: TLayout) {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.pageContent}>{children}</div>
    </main>
  );
}
