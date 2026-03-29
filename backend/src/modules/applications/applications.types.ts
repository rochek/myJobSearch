export type Application = {
  id: number;
  company_name: string;
  job_title: string | null;
  contract_type: string | null;
  application_method: string;
  status: string;
  location: string | null;
  job_url: string | null;
  notes: string | null;
  created_at: Date;
  updated_at: Date;
};

export type CreateApplicationInput = {
  company_name: string;
  job_title?: string;
  contract_type?: string;
  application_method: string;
  status: string;
  location?: string;
  job_url?: string;
  notes?: string;
};