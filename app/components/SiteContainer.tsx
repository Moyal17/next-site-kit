"use client"
import Footer from "@/app/components/shared/Footer";
import Header from "@/app/components/shared/Header";

interface SiteContainerProps {
  children: React.ReactNode
}
const SiteContainer: React.FC<SiteContainerProps> = ({
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

export default SiteContainer;
