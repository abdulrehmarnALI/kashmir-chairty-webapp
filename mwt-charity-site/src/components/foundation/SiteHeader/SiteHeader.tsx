import "./siteHeader.css";

type NavItem = {
  key: string;
  label: string;
  href: string;
  children?: NavItem[];
};

type SiteHeaderProps = {
  compact?: boolean;
  items?: NavItem[];
};

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "volunteer", label: "Get Involved", href: "/volunteer" },
  { key: "about", label: "About Us", href: "/about-us" },
];

export default function SiteHeader({
  compact = false,
  item = DEFAULT_ITEMS,
}): SiteHeaderProps {
  return (
    <header className={`container siteHeader ${compact ? "isCompact" : ""}`}>
      <div className="headerLogo"></div>
      <div className="headerTop"></div>
      <nav className="headerNav"></nav>
      <div className="headerCTA"></div>
    </header>
  );
}
