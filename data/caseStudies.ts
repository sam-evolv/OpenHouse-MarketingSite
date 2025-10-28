export type CaseItem = {
  id: string;
  title: string;
  subtitle?: string;
  thumb: string;
  href: string;
  tags?: string[];
};

export const CASE_STUDIES: CaseItem[] = [
  {
    id: "seaview",
    title: "Seaview Assistant",
    subtitle: "Resident portal",
    thumb: "/images/cases/seaview.svg",
    href: "/case-studies/seaview",
    tags: ["RAG", "QR/NFC", "Maps"],
  },
  {
    id: "longview",
    title: "Longview",
    subtitle: "Sales enablement",
    thumb: "/images/cases/longview.svg",
    href: "/case-studies/longview",
    tags: ["Docs", "Floorplans"],
  },
  {
    id: "harborside",
    title: "Harborside Towers",
    subtitle: "Multi-language support",
    thumb: "/images/cases/harborside.svg",
    href: "/case-studies/harborside",
    tags: ["i18n", "Analytics"],
  },
  {
    id: "greenwich",
    title: "Greenwich Park",
    subtitle: "Amenities booking",
    thumb: "/images/cases/greenwich.svg",
    href: "/case-studies/greenwich",
    tags: ["Calendar", "Notifications"],
  },
  {
    id: "riverside",
    title: "Riverside Commons",
    subtitle: "Community engagement",
    thumb: "/images/cases/riverside.svg",
    href: "/case-studies/riverside",
    tags: ["Social", "Events"],
  },
  {
    id: "parkview",
    title: "Parkview Residences",
    subtitle: "Smart home integration",
    thumb: "/images/cases/parkview.svg",
    href: "/case-studies/parkview",
    tags: ["IoT", "Automation"],
  },
  {
    id: "bayfront",
    title: "Bayfront Plaza",
    subtitle: "Package management",
    thumb: "/images/cases/bayfront.svg",
    href: "/case-studies/bayfront",
    tags: ["Delivery", "Tracking"],
  },
  {
    id: "skyline",
    title: "Skyline Heights",
    subtitle: "Visitor management",
    thumb: "/images/cases/skyline.svg",
    href: "/case-studies/skyline",
    tags: ["Security", "Access"],
  },
];
