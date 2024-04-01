

import type { Metadata } from "next";
import { Text } from "./components/typography/text";

export default function IndexPage() {
  return <>
      <p className="text-2xl text-red-700 font-sans">Hello Kanit </p>
      <p className="text-2xl text-red-700 font-gameria">Hello Gameria</p>

      <Text>
        Hello Demo Component
      </Text>
  </>
}
