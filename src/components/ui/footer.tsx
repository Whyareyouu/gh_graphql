import { ThemeSwitcher } from "./themeSwitcher";

export interface FooterProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={className}>
      <div>
        Site theme
        <ThemeSwitcher />
      </div>
      <div>Built by 'why are you'. The source code is available on GitHub.</div>
    </footer>
  );
};
