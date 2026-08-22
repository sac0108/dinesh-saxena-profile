export type ProfessionalEngagement = {
  slug: string;
  title: string;
  category:
    | "Training Session"
    | "Workshop"
    | "Consulting Engagement"
    | "Speaking Engagement"
    | "Collaboration"
    | "Milestone";
  date: string;
  location?: string;
  summary: string;
};

// Add only verified professional activity. Each slug is reserved for a future
// /engagements/:slug detail route that can be shared independently.
export const professionalEngagements: ProfessionalEngagement[] = [];