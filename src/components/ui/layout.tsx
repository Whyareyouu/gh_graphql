import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col w-[1600px]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer className="flex-grow-0 flex-shrink-0" />
      </div>
    </div>
  );
};
