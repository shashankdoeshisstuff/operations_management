export interface Client {
  id?: string;
  name?: string;
  type?: string;
  company_name?: string | null | undefined;
  industry?: string;
  sub_industry?: string;
  website?: string | null;
  headquarters_city?: string;
  operating_cities?: string[];
  contact_person?: string;
  designation?: string;
  communication?: {
    preferred_tools?: string[];
    tone?: string;
    preferred_work_hours?: string;
  };
  personality?: string[];
  brand_style?: string[];
  project_behavior?: {
    typical_project_frequency?: string;
    type_of_briefs_shared?: string;
    average_scope?: string;
  };
  budgeting?: {
    approach?: string;
  };
  client_tier?: string;
  talent_preferences?: {
    experience_level?: string;
    location_of_talent?: string;
    preferred_portfolio_format?: string;
    language?: string;
  };
  project_history?: string[];
  inbound_source?: string;
  important_dates?: {
    first_interaction?: string;
    last_booking_date?: string;
  };
  social_profiles?: Record<string, string | null | undefined>;
  notes_and_history?: string;
  past_feedback?: string;
  lead_owner?: string;
  is_repeat_client?: boolean;
  attachments_docs_provided?: string;
}


export interface Talent {
  id: string;
  name: string;
  city: string;
  hometown: string;
  categories: string[];
  skills: string[];
  style_tags: string[];
  budget_range: string;
  experience_years: number;
  platforms: string[];
  soft_skills: {
    communication: string;
    punctuality: string;
    collaboration: string;
    initiative: string;
    adaptability: string;
  };
  software_skills: Record<string, number>;
  languages: string[];
  past_credits: string[];
  endorsements: string[];
  interest_tags: string[];
  availability_calendar: {
    city: string;
    from: string;
    to: string;
  }[];
  tier_tags: string[];
  portfolio: {
    title: string;
    tags: string[];
    keywords: string[];
  }[];
}

export interface Gig {
  id: string;
  title: string;
  brief_text: string;
  category: string;
  city: string;
  budget: string | number;
  client_id: string;
  style_tags: string[];
  expectation_level: string;
  status: string;
  start_date: string;
  has_docs: boolean;
  docs_type: string | null;
  is_date_fixed: boolean;
  references_given: boolean;
  urgency: string;
}

export interface MatchHistory {
  gig_id: string;
  talent_id: string;
  status: string;
  score: number | null;
  feedback_from_client: string | null;
  feedback_from_talent: string | null;
  shared_on: string;
  final_decision: string;
}

export interface Communication {
  id: string;
  type: 'call' | 'note' | 'email' | 'whatsapp' | 'meeting' | 'other';
  content: string;
  date: string;
  linkedTo: {
    type: 'client' | 'talent' | 'gig';
    id: string;
  };
  metadata?: {
    duration?: number;
    participants?: string[];
    fileUrl?: string;
  };
  createdBy: string;
}

export interface Gig {
  id: string;
  title: string;
  brief_text: string;
  category: string;
  city: string;
  budget: string | number;
  client_id: string;
  style_tags: string[];
  expectation_level: string;
  status: string;
  start_date: string;
  has_docs: boolean;
  docs_type: string | null;
  is_date_fixed: boolean;
  references_given: boolean;
  urgency: string;
}

export interface MatchHistory {
  gig_id: string;
  talent_id: string;
  status: string;
  score: number | null;
  feedback_from_client: string | null;
  feedback_from_talent: string | null;
  shared_on: string;
  final_decision: string;
}

export interface Communication {
  id: string;
  type: 'call' | 'note' | 'email' | 'whatsapp' | 'meeting' | 'other';
  content: string;
  date: string;
  linkedTo: {
    type: 'client' | 'talent' | 'gig';
    id: string;
  };
  metadata?: {
    duration?: number;
    participants?: string[];
    fileUrl?: string;
  };
  createdBy: string;
}