// * types and interfaces defining our data models in UI_data.tsx

type img_url = string;
type statusType = 'pending' | 'success' | 'failed';

export interface $Vistor {
  id: string;
  vistor_card_number: string;
  vistor_name: string;
  vistor_contact: string;
  visiting_date: string;
  id_verified: boolean;
  to_office: string; // name of office they are visiting
  branch_id: string; // references branch.id
  visit_purpose: string;
  time_in: string;
  time_out: string;
  was_expected: boolean;
  // visit_status: statusType;
  // vistor_flags: string; // ok, suspicious, banned etc
}

export interface $Branch {
  id: string;
  created_at: string;
  location: string;
  branch_name: string;
  branch_officer: string;
}

// officer interface
