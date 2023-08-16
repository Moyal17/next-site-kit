"use client"
import { useRef } from "react";
import Footer from "@/app/components/shared/Footer";
import Header from "@/app/components/shared/Header";

interface SiteContainerProps {
  children: React.ReactNode
}
const Base: React.FC<SiteContainerProps> = ({
  children,...props
}) => {
  return (
    <>
      <Header />
      {/* main site */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
