import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[1600px]">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
