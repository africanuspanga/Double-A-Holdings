export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  introduction: string;
  heroImage: string;
  iconName: string;
  capabilities: string[];
  benefits: string[];
  process: string[];
  relatedServices: string[];
  disclaimer?: string;
}

export const services: Service[] = [
  {
    slug: "road-transport",
    title: "Road Transport",
    shortDescription:
      "Efficient and flexible cargo transportation by road, coordinated around the client’s delivery requirements.",
    introduction:
      "Our road-transport solutions are designed to help businesses move cargo efficiently between ports, warehouses, business locations and final destinations. Each movement is coordinated according to shipment requirements, route and expected delivery schedule.",
    heroImage: "/images/hero-truck.png",
    iconName: "Truck",
    capabilities: [
      "Commercial cargo transport",
      "Pickup and final delivery",
      "Port and warehouse transfers",
      "Regional cargo movement",
      "Scheduled distribution",
      "Door-to-door transport coordination",
    ],
    benefits: [
      "Flexible cargo movement",
      "Business-to-business transport",
      "Clear client communication",
      "Safety-focused handling",
    ],
    process: [
      "Receive cargo and route details",
      "Plan pickup and delivery schedule",
      "Coordinate loading and transport",
      "Monitor progress and communicate updates",
      "Complete safe delivery",
    ],
    relatedServices: [
      "warehousing-and-distribution",
      "heavy-bulk-cargo",
      "end-to-end-logistics",
    ],
  },
  {
    slug: "maritime-transport",
    title: "Maritime Transport",
    shortDescription:
      "Coordinated sea-freight solutions for cargo moving through ports and international shipping routes.",
    introduction:
      "We coordinate sea-freight movements for cargo travelling through ports and international shipping routes, with a focus on clear documentation and reliable handovers.",
    heroImage: "/images/maritime-international.jpg",
    iconName: "Ship",
    capabilities: [
      "Containerized cargo",
      "General cargo",
      "Port coordination",
      "International shipping support",
      "Shipping documentation assistance",
      "Cargo movement to and from Dar es Salaam",
    ],
    benefits: [
      "Suitable for large and heavy shipments",
      "Structured documentation support",
      "Port-to-destination coordination",
      "Cost-effective for international routes",
    ],
    process: [
      "Confirm cargo details and shipping schedule",
      "Prepare documentation and bookings",
      "Coordinate port receiving or dispatch",
      "Monitor transit and updates",
      "Arrange final delivery or pickup",
    ],
    relatedServices: [
      "heavy-bulk-cargo",
      "end-to-end-logistics",
      "road-transport",
    ],
  },
  {
    slug: "air-freight",
    title: "Air Freight",
    shortDescription:
      "Fast and coordinated air-freight support for urgent, valuable and time-sensitive shipments.",
    introduction:
      "Our air-freight coordination supports urgent and time-sensitive cargo, helping clients move shipments through airports with attention to documentation and delivery timing.",
    heroImage: "/images/air-freight.jpg",
    iconName: "Plane",
    capabilities: [
      "International air cargo",
      "Airport cargo coordination",
      "International air cargo documentation",
      "Time-sensitive shipment support",
      "Final delivery arrangements",
    ],
    benefits: [
      "Speed for urgent cargo",
      "Airport-to-door coordination",
      "Documentation support",
      "Responsive communication",
    ],
    process: [
      "Confirm shipment urgency and details",
      "Book air cargo space and prepare documents",
      "Coordinate airport handover",
      "Track transit and communicate status",
      "Arrange final delivery",
    ],
    relatedServices: [
      "road-transport",
      "end-to-end-logistics",
      "heavy-bulk-cargo",
    ],
  },
  {
    slug: "warehousing-and-distribution",
    title: "Warehousing and Distribution",
    shortDescription:
      "Storage and distribution coordination designed to keep cargo organized and moving toward its final destination.",
    introduction:
      "We provide warehousing and distribution coordination to help keep cargo organized, scheduled and moving toward its final destination.",
    heroImage: "/images/warehouse.jpg",
    iconName: "Warehouse",
    capabilities: [
      "Cargo receiving",
      "Temporary storage support",
      "Inventory coordination",
      "Order preparation",
      "Distribution scheduling",
      "Last-mile delivery coordination",
    ],
    benefits: [
      "Organized cargo flow",
      "Scheduled distribution",
      "Coordinated receiving and dispatch",
      "Support for growing operations",
    ],
    process: [
      "Receive and inspect cargo",
      "Record and organize storage",
      "Prepare orders for distribution",
      "Schedule dispatch",
      "Coordinate final delivery",
    ],
    relatedServices: ["road-transport", "end-to-end-logistics", "air-freight"],
    disclaimer:
      "Warehousing support and coordination services are provided through trusted partners until owned facilities and capacity are confirmed.",
  },
  {
    slug: "heavy-bulk-cargo",
    title: "Heavy and Bulk Cargo Transport",
    shortDescription:
      "Specialized transport coordination for oversized, heavy and bulk cargo that requires careful planning and safe handling.",
    introduction:
      "Our heavy and bulk cargo transport service supports businesses that need to move large, oversized or high-volume shipments. We focus on proper planning, safe handling and reliable delivery coordination for cargo that goes beyond standard loads.",
    heroImage: "/images/hero-truck.png",
    iconName: "Container",
    capabilities: [
      "Oversized cargo transport",
      "Bulk shipment coordination",
      "Heavy load planning",
      "Specialized handling support",
      "Route and permit coordination",
      "Safe loading and unloading",
    ],
    benefits: [
      "Designed for large and heavy shipments",
      "Careful route and handling planning",
      "Safe and responsible transport coordination",
      "Single point of coordination",
    ],
    process: [
      "Review cargo size, weight and route requirements",
      "Plan transport method and handling approach",
      "Coordinate loading and necessary permits",
      "Monitor transit and communicate updates",
      "Complete safe unloading and delivery",
    ],
    relatedServices: [
      "maritime-transport",
      "road-transport",
      "end-to-end-logistics",
    ],
  },
  {
    slug: "end-to-end-logistics",
    title: "End-to-End Logistics",
    shortDescription:
      "Integrated logistics support from initial pickup through transportation and final delivery.",
    introduction:
      "Our end-to-end logistics service coordinates each stage of a shipment, from planning and pickup through transport and final delivery.",
    heroImage: "/images/multimodal.jpg",
    iconName: "Route",
    capabilities: [
      "Shipment planning",
      "Multimodal transportation",
      "Documentation support",
      "Cargo tracking communication",
      "Final delivery",
    ],
    benefits: [
      "Single coordination point",
      "Multimodal options",
      "Clear documentation handling",
      "End-to-end communication",
    ],
    process: [
      "Understand cargo and delivery requirements",
      "Plan transport and documentation",
      "Coordinate pickup and movement",
      "Manage handling throughout transit",
      "Complete final delivery",
    ],
    relatedServices: [
      "road-transport",
      "maritime-transport",
      "air-freight",
      "warehousing-and-distribution",
      "heavy-bulk-cargo",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
