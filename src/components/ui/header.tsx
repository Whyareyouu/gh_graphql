import { Button } from "./button";

export const Header = () => {
  return (
    <header className="flex justify-between">
      <div>Logo</div>
      <nav>
        <ul className="flex gap-3">
          <li>Home</li>
          <li>Search</li>
          <li>Social</li>
        </ul>
      </nav>
      <div className="flex gap-1">
        <Button>Login</Button>
        <Button>Sign up</Button>
      </div>
    </header>
  );
};
