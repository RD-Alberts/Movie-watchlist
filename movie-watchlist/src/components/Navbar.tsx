import { Clapperboard } from "lucide-react";
export const Navbar = () => {
  return (
    <nav className="bg-primary p-4 shadow">
  <div className="max-w-7xl mx-auto flex items-center gap-2">
    <a href="/" className="flex items-center gap-2 hover:opacity-90">
      <Clapperboard  className="h-5 w-5" />
      <span className="text-lg font-semibold">Movie watchlist</span>
    </a>
  </div>
</nav>
  );
};
