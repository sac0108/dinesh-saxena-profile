export type CurriculumModule = {
  id: string;
  title: string;
  summary: string;
  topics: string[];
};

export const curriculum: CurriculumModule[] = [
  {
    id: "foundations",
    title: "Food Safety Foundations & FSMS",
    summary:
      "Why FoSTaC exists, the statutory context under Section 16(3)(h) of the Food Safety and Standards Act, 2006, and how a Food Safety Management System is structured.",
    topics: [
      "Introduction to food safety and the role of the trained food safety supervisor",
      "FoSTaC as FSSAI's large-scale training and certification ecosystem",
      "Deck guidance: at least one trained supervisor for every 25 food handlers, or part thereof",
      "FSMS structure, responsibilities and management/supervisory ownership",
    ],
  },
  {
    id: "hazards",
    title: "Food Hazards — Physical, Chemical, Biological",
    summary:
      "Recognising the three hazard families in a live catering environment and understanding what makes microbes multiply.",
    topics: [
      "Physical hazards: foreign bodies from premises, equipment and handlers",
      "Chemical hazards: cleaning agents, pesticide residues and unsafe storage practices",
      "Biological hazards and microbial growth conditions (FAT TOM)",
      "High-risk foods and where hazards typically enter the process flow",
    ],
  },
  {
    id: "allergens",
    title: "Allergen & Cross-Contamination Control",
    summary:
      "Handling the eight listed allergens and preventing transfer between raw, cooked, vegetarian and non-vegetarian streams.",
    topics: [
      "The eight listed allergens: milk, eggs, fish, shellfish, tree nuts, peanuts, wheat and soybeans",
      "Allergen segregation in storage, preparation and service",
      "Allergen declaration and labelling discipline",
      "Cross-contamination routes: hands, boards, cloths, equipment and storage order",
    ],
  },
  {
    id: "premises",
    title: "Location, Layout, Facilities & Equipment",
    summary:
      "Designing and maintaining the physical kitchen so that hygiene is achievable by default, not by heroics.",
    topics: [
      "Location and surroundings; premises layout and workflow separation",
      "Floors, walls, ceilings, doors and drainage requirements",
      "Equipment, containers, ventilation and lighting",
      "Potable water, facilities, utensil cleaning and the three-compartment sink method",
    ],
  },
  {
    id: "procurement",
    title: "Procurement, Receiving & Storage",
    summary:
      "Controlling what enters the kitchen and how it is held before use — the first practical checkpoint of the chain.",
    topics: [
      "Approved supplier checks and receiving documentation, including Form E",
      "Material handling and inspection at the receiving dock",
      "Stock rotation using FIFO and FEFO",
      "Dry, chilled and frozen storage with raw/cooked and veg/non-veg segregation",
    ],
  },
  {
    id: "preparation",
    title: "Preparation, Cooking, Time & Temperature",
    summary:
      "Pre-production and production controls where time-temperature discipline decides whether food is safe.",
    topics: [
      "Pre-production processing and preparation hygiene",
      "Non-vegetarian handling and dedicated work zones",
      "Cooking and internal temperature checking",
      "The temperature danger zone and time-based controls",
    ],
  },
  {
    id: "temperature",
    title: "Thawing, Rapid Chilling, Reheating & Holding",
    summary:
      "The post-cook controls covering holding, serving, catering, dining and transportation.",
    topics: [
      "Safe thawing practices and avoiding ambient thawing",
      "Rapid chilling of cooked food to limit time in the danger zone",
      "Training-deck reference values: reheating to 74°C held for two minutes; hot holding at 60°C or above",
      "Cold holding, service line control, distribution and transportation",
    ],
  },
  {
    id: "hygiene",
    title: "Personal Hygiene, Support Services & Sanitation",
    summary:
      "Handler behaviour and the support services that quietly determine whether a kitchen stays compliant.",
    topics: [
      "Personal hygiene standards, health status and reporting of illness",
      "Handwashing technique, timing and facility provision",
      "Cleaning and sanitation schedules for surfaces, utensils and equipment",
      "Support services: waste handling, pest control and water safety",
    ],
  },
  {
    id: "documentation",
    title: "Food Testing, SOPs, Documentation & Audit Readiness",
    summary:
      "Turning practice into evidence — the module that separates a compliant kitchen from an audit-ready one.",
    topics: [
      "SOP writing using the 5W1H framework",
      "Food testing facilities and sampling practices",
      "Training competency mapping, calendars, records, evaluation of effectiveness and feedback",
      "Audit preparation, documentation and record retention",
    ],
  },
  {
    id: "labelling",
    title: "Product Information, Labelling & Consumer Awareness",
    summary:
      "What the consumer must be told, and how accurate information closes the food safety loop.",
    topics: [
      "Food labelling requirements and mandatory product information",
      "Allergen and date-marking information on packaging",
      "Packaging integrity through distribution",
      "Consumer awareness and complaint handling as a safety input",
    ],
  },
];

export const journey = [
  {
    step: "01",
    title: "Understand the hazard",
    body: "Handlers learn what physical, chemical and biological hazards actually look like in their own kitchen, not in the abstract.",
  },
  {
    step: "02",
    title: "Identify the risk point",
    body: "Each hazard is mapped to a real step in the flow — receiving, storage, prep, cooking, holding or transport.",
  },
  {
    step: "03",
    title: "Control the process",
    body: "Segregation, hygiene practice and time-temperature control are converted into specific, repeatable kitchen behaviour.",
  },
  {
    step: "04",
    title: "Document the control",
    body: "SOPs written with 5W1H, checklists, temperature logs and training records make the control visible.",
  },
  {
    step: "05",
    title: "Verify and face the audit",
    body: "Internal checks, sampling, evaluation of training effectiveness and record review build genuine audit readiness.",
  },
];

export const industries = [
  {
    title: "Flight Kitchens & Airline Catering",
    body: "High-volume batch production with long hold and transport windows. Emphasis on rapid chilling, cold-chain integrity, chilled holding, packaging and distribution discipline, plus tight allergen declaration for special meals.",
  },
  {
    title: "Hotels, Restaurants & QSRs",
    body: "Multi-outlet kitchens with mixed veg and non-veg streams. Emphasis on premises layout, raw/cooked segregation, cooking temperature checks, hot holding on the buffet line and utensil sanitation.",
  },
  {
    title: "Cloud Kitchens & Delivery Operations",
    body: "Compact premises and third-party dispatch. Emphasis on receiving checks and Form E, FIFO/FEFO in constrained storage, hot holding before pickup, packaging integrity and accurate labelling.",
  },
  {
    title: "Institutional, Corporate & Educational Catering",
    body: "Large fixed populations and vulnerable consumers. Emphasis on high-risk foods, personal hygiene of large handler teams, supervisory ratios, sampling practices and documentation for periodic audits.",
  },
];

export const outcomes = [
  "Stronger food-handler awareness of everyday hazards",
  "More consistent personal hygiene discipline",
  "Sharper hazard identification at each process step",
  "Clearer time and temperature control practices",
  "Stronger allergen segregation and declaration habits",
  "Better SOP and documentation discipline",
  "Improved readiness for audits and inspections",
  "Stronger supervisory ownership on the shop floor",
];
