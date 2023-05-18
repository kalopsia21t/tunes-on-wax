import Image from "next/image";
import styles from "./page.module.css";

import Header from "../components/Header";
import Table from "@/components/Table/Table";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Table />
    </Layout>
  );
}
