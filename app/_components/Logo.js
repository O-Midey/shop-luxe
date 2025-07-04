import { Princess_Sofia } from "next/font/google";

const princessSofia = Princess_Sofia({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return <div className={`${princessSofia.className} text-5xl`}>Luxe</div>;
}
