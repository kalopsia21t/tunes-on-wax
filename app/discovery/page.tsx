import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";
import Table from "@/components/Table/Table";

import styles from "./discovery.module.css";

export default function Discovery() {
  return (
    <Layout>
      <h1 className={styles.headline}>
        Discover records available at the store:
      </h1>

      <Table />
    </Layout>
  );
}
