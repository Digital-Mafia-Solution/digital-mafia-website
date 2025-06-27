// ===========================
// SHARED TYPES FOR CLIENT & SERVER
// ===========================

// ===========================
// USER TYPES
// ===========================

export enum UserRole {
  ADMIN = "admin",
  MODERATOR = "moderator",
  USER = "user",
}

export interface User {
  id: string;
  email: string;
  password_hash?: string; // Optional for client responses
  first_name: string;
  last_name: string;
  role: UserRole;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  last_login?: Date;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role?: UserRole;
}

export interface UpdateUserRequest {
  first_name?: string;
  last_name?: string;
  role?: UserRole;
  is_active?: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: Omit<User, "password_hash">;
  token: string;
  expires_at: Date;
}

// ===========================
// PROJECT TYPES
// ===========================

export enum ProjectCategory {
  WEB_DEVELOPMENT = "web-development",
  BRANDING = "branding",
  MOBILE_APP = "mobile-app",
  UI_UX = "ui-ux",
  E_COMMERCE = "e-commerce",
  WEB3 = "web3",
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  long_description?: string;
  category: ProjectCategory;
  tags: string[];
  images: string[];
  thumbnail_image: string;
  client_name: string;
  project_url?: string;
  github_url?: string;
  completed_at: Date;
  featured: boolean;
  published: boolean;
  created_at: Date;
  updated_at: Date;
  created_by?: string;
}

export interface CreateProjectRequest {
  title: string;
  description: string;
  long_description?: string;
  category: ProjectCategory;
  tags: string[];
  images: string[];
  thumbnail_image: string;
  client_name: string;
  project_url?: string;
  github_url?: string;
  completed_at: Date;
  featured?: boolean;
  published?: boolean;
}

export interface UpdateProjectRequest {
  title?: string;
  description?: string;
  long_description?: string;
  category?: ProjectCategory;
  tags?: string[];
  images?: string[];
  thumbnail_image?: string;
  client_name?: string;
  project_url?: string;
  github_url?: string;
  completed_at?: Date;
  featured?: boolean;
  published?: boolean;
}

export interface ProjectFilters {
  category?: ProjectCategory;
  featured?: boolean;
  published?: boolean;
  search?: string;
  limit?: number;
  offset?: number;
}

// ===========================
// CONTACT TYPES
// ===========================

export enum ContactStatus {
  NEW = "new",
  CONTACTED = "contacted",
  QUALIFIED = "qualified",
  CONVERTED = "converted",
  CLOSED = "closed",
}

export enum ContactSource {
  CONTACT_FORM = "contact-form",
  PRICING_PAGE = "pricing-page",
  DIRECT = "direct",
  REFERRAL = "referral",
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  project_type: string;
  budget_range?: string;
  message: string;
  status: ContactStatus;
  source: ContactSource;
  submitted_at: Date;
  follow_up_at?: Date;
  notes?: string;
}

export interface CreateContactRequest {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  project_type: string;
  budget_range?: string;
  message: string;
  source?: ContactSource;
}

export interface UpdateContactRequest {
  status?: ContactStatus;
  follow_up_at?: Date;
  notes?: string;
}

// ===========================
// NEWSLETTER TYPES
// ===========================

export enum NewsletterStatus {
  ACTIVE = "active",
  UNSUBSCRIBED = "unsubscribed",
}

export enum NewsletterSource {
  FOOTER = "footer",
  BLOG = "blog",
  POPUP = "popup",
  CONTACT_FORM = "contact-form",
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  status: NewsletterStatus;
  source: NewsletterSource;
  subscribed_at: Date;
  unsubscribed_at?: Date;
}

export interface CreateNewsletterRequest {
  email: string;
  source?: NewsletterSource;
}

// ===========================
// TESTIMONIAL TYPES
// ===========================

export interface Testimonial {
  id: string;
  client_name: string;
  client_role?: string;
  client_company?: string;
  content: string;
  rating: number; // 1-5
  client_image?: string;
  project_id?: string;
  featured: boolean;
  approved_at?: Date;
  created_at: Date;
}

export interface CreateTestimonialRequest {
  client_name: string;
  client_role?: string;
  client_company?: string;
  content: string;
  rating: number;
  client_image?: string;
  project_id?: string;
  featured?: boolean;
}

// ===========================
// PRICING TYPES
// ===========================

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  period: "project" | "monthly" | "yearly";
  description: string;
  features: string[];
  popular: boolean;
  cta_text: string;
  order: number;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}

// ===========================
// SERVICE TYPES
// ===========================

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  long_description: string;
  icon: string;
  features: string[];
  starting_price?: number;
  estimated_duration: string;
  category: string;
  active: boolean;
  order: number;
  created_at: Date;
  updated_at: Date;
}

// ===========================
// CLIENT TYPES
// ===========================

export interface Client {
  id: string;
  name: string;
  industry: string;
  logo?: string;
  website?: string;
  project_ids: string[];
  featured: boolean;
  relationship_start: Date;
  created_at: Date;
  updated_at: Date;
}

// ===========================
// ANALYTICS TYPES
// ===========================

export interface ProjectMetrics {
  project_id: string;
  views: number;
  clicks: number;
  last_viewed_at: Date;
}

export interface SiteMetrics {
  date: Date;
  page_views: number;
  unique_visitors: number;
  contact_submissions: number;
  newsletter_signups: number;
}

// ===========================
// API RESPONSE TYPES
// ===========================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

export interface ProjectsResponse extends PaginatedResponse<Project> {
  projects: Project[];
}

export interface ContactsResponse extends PaginatedResponse<ContactSubmission> {
  contacts: ContactSubmission[];
}

// ===========================
// UTILITY TYPES
// ===========================

export type CreateRequest<T> = Omit<T, "id" | "created_at" | "updated_at">;
export type UpdateRequest<T> = Partial<
  Omit<T, "id" | "created_at" | "updated_at">
>;

// ===========================
// VALIDATION SCHEMAS (ZOD COMPATIBLE)
// ===========================

export const PROJECT_CATEGORIES = [
  "web-development",
  "branding",
  "mobile-app",
  "ui-ux",
  "e-commerce",
  "web3",
] as const;

export const USER_ROLES = ["admin", "moderator", "user"] as const;

export const CONTACT_STATUSES = [
  "new",
  "contacted",
  "qualified",
  "converted",
  "closed",
] as const;

export const CONTACT_SOURCES = [
  "contact-form",
  "pricing-page",
  "direct",
  "referral",
] as const;

export const NEWSLETTER_STATUSES = ["active", "unsubscribed"] as const;

export const NEWSLETTER_SOURCES = [
  "footer",
  "blog",
  "popup",
  "contact-form",
] as const;

// ===========================
// CONSTANTS
// ===========================

export const PAGINATION_LIMITS = {
  DEFAULT: 20,
  MAX: 100,
  MIN: 1,
} as const;

export const PASSWORD_REQUIREMENTS = {
  MIN_LENGTH: 8,
  MAX_LENGTH: 128,
} as const;

export const CONTACT_LIMITS = {
  NAME_MAX_LENGTH: 100,
  COMPANY_MAX_LENGTH: 100,
  PHONE_MAX_LENGTH: 20,
  MESSAGE_MIN_LENGTH: 10,
  MESSAGE_MAX_LENGTH: 2000,
  NOTES_MAX_LENGTH: 1000,
} as const;

export const PROJECT_LIMITS = {
  TITLE_MAX_LENGTH: 255,
  CLIENT_NAME_MAX_LENGTH: 255,
  TAGS_MAX_COUNT: 20,
  IMAGES_MAX_COUNT: 50,
} as const;
