import { ReactNode } from "react";
import Header from "#components/Header";
import Footer from "#components/Footer";

interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Container;
