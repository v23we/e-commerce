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

          return (
            <button
              key={item.id}
              type="button"
              className={item.active ? "sidebar-link active" : "sidebar-link"}
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
