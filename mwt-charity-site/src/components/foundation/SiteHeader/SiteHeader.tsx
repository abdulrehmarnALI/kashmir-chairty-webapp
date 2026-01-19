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

const DEFAULT_NAV_ITEMS: ReadonlyArray<NavItem> = [
  { key: "home", label: "Home", href: "/" },
  {
    key: "projects",
    label: "Projects",
    href: "/projects",
    children: [
      {
        key: "medCentre",
        label: "XYZ Medical Centre",
        href: "/projects/XYZ-medical-centre",
      },
      {
        key: "hospital",
        label: "XYZ Hospital",
        href: "/projects/XYZ-hospital",
      },
      {
        key: "waterFiltration",
        label: "XYZ Water Filtration Plant",
        href: "/projects/water-filtration-plant",
      },
    ],
  },
  { key: "volunteer", label: "Get Involved", href: "/volunteer" },
  { key: "about", label: "About Us", href: "/about-us" },
];

export default function SiteHeader(props: Readonly<SiteHeaderProps>) {
  const { compact = false, items = DEFAULT_NAV_ITEMS } = props;
  return (
    <header className={`container siteHeader ${compact ? "isCompact" : ""}`}>
      <div className="headerLogo">
        <img src="./../../../../public/images/site-logo.jpg" alt="" />
      </div>
      <div className="headerMain">
        <div className="headerTop">
          <p>search bar</p>
        </div>
        <nav className="headerNav">
          {items.map((item) => (
            <a key={item.key} href={item.href} className="navLink">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="headerCTA">
        <div className="contactNumber">
          <p>Call us on</p>
          <p>0754222222</p>
        </div>
        <button className="donateNow">Donate</button>
      </div>
    </header>
  );
}
