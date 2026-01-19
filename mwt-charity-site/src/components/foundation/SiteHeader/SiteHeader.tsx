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
  {
    key: "volunteer",
    label: "Get Involved",
    href: "/volunteer",
    children: [
      {
        key: "upcoming",
        label: "Our Upcoming Events",
        href: "/upcoming-events",
      },
      {
        key: "volunteering",
        label: "Volunteering",
        href: "/volunteering",
      },
    ],
  },
  {
    key: "about",
    label: "About Us",
    href: "/about-us",
    children: [
      {
        key: "recent",
        label: "What we've been up to",
        href: "/recent",
      },
      {
        key: "history",
        label: "Our History",
        href: "/about-us/our-history",
      },
    ],
  },
];

function CTA() {
  return (
    <div className="headerCTA">
      <div className="contactNumber">
        <p>call us on</p>
        <a href="tel:07456222222">07456222222</a>
      </div>
      <button>Donate Now</button>
    </div>
  );
}

export default function SiteHeader(props: Readonly<SiteHeaderProps>) {
  const { compact = false, items = DEFAULT_NAV_ITEMS } = props;
  return (
    <header className={`container siteHeader ${compact ? "isCompact" : ""}`}>
      <div className="headerLogo">
        <img src="./../../../../public/images/mwt-site-logo.png" alt="" />
      </div>
      <div className="headerMain">
        <div className="headerTop">
          <p>XYZ Welfare Trust</p>
        </div>
        <nav className="headerNav">
          {items.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`navLink ${item.children ? "hasChildren" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <CTA />
    </header>
  );
}
