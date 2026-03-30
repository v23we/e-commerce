import { Link, useLocation } from "react-router-dom";
import type { NavItem } from "../../data/studio";
import {
  GridIcon,
  HistoryIcon,
  HomeIcon,
  LayoutIcon,
  PhotoIcon,
  SettingsIcon,
  SparkIcon,
} from "./icons";

type SidebarProps = {
  items: NavItem[];
};

const iconMap = {
  home: HomeIcon,
  spark: SparkIcon,
  grid: GridIcon,
  photo: PhotoIcon,
  layout: LayoutIcon,
  history: HistoryIcon,
  settings: SettingsIcon,
};

export function Sidebar({ items }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className="studio-sidebar">
      <div className="sidebar-brand">
        <button type="button" className="sidebar-brand-button" aria-label="Open studio navigation">
          <div className="sidebar-brand-mark" />
        </button>
      </div>

      <nav className="sidebar-nav" aria-label="Studio navigation">
        {items.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive =
            item.id === "generate"
              ? location.pathname.startsWith("/studio/amazon-main-images")
              : item.id === "home"
                ? location.pathname === "/studio"
                : false;

          const className = isActive ? "sidebar-link active" : "sidebar-link";

          if (item.href) {
            return (
              <Link
                key={item.id}
                to={item.href}
                state={item.href === location.pathname ? undefined : { from: location.pathname }}
                className={className}
              >
                <Icon />
                <span>{item.label}</span>
              </Link>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              className={`${className} is-disabled`}
            >
              <Icon />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
