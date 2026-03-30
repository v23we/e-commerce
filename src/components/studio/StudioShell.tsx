import type { ReactNode } from "react";
import type { NavItem } from "../../data/studio";
import { Sidebar } from "./Sidebar";

type StudioShellProps = {
  items: NavItem[];
  children: ReactNode;
};

export function StudioShell({ items, children }: StudioShellProps) {
  return (
    <div className="studio-app-shell">
      <Sidebar items={items} />
      <main className="studio-main">{children}</main>
    </div>
  );
}
