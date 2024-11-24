import { ThemeSwitcher } from "./themeSwitcher";

export const Footer = () => {
  return (
    <footer>
      <div>
        Site theme
        <ThemeSwitcher />
      </div>
      <div>Built by 'why are you'. The source code is available on GitHub.</div>
    </footer>
  );
};
