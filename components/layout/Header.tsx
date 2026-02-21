import { getMainNav } from "@/lib/navigation";
import { HeaderClient } from "./HeaderClient";

export function Header() {
  const navItems = getMainNav();
  return <HeaderClient navItems={navItems} />;
}
