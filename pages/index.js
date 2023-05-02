import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon } from "../assets/icons";
import products from "../data/products";
export default function Home() {
  return (
    <>
      <main>
        <h2>Welcome to Homepage</h2>
        <ChevronDownIcon />
        <ChevronRightIcon />
      </main>
    </>
  );
}
