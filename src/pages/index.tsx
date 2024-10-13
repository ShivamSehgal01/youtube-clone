import Image from "next/image";
import localFont from "next/font/local";
import { VedioGrid } from "@/components/VedioGrid";
import { Appbar } from "@/components/Appbar";


export default function Home() {
  return ( <div>
    <Appbar />
    <VedioGrid />
  </div>
  );
}
