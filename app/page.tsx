import type { Metadata } from "next";

export default function IndexPage() {
  return <p className="text-2xl text-red-700">Hello Index Page </p>;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
