export interface Location {
  name: string;
  address: string;
  open: false;
}
export interface Professional {
  id: number;
  name: string;
  avatarUrl: string;
  bio: string;
  location: string;
  online: boolean;
  phone: string;
  email: string;
  field: string;
}

export interface Note {
  date: string;
  doctor: string;
  notes: string;
}

export interface Result {
  date: string;
  testType: string;
  results: string;
}

export interface Scan {
  date: string;
  scanType: string;
  results: string;
}

export interface MedicationRecord {
  date: string;
  medication: string;
  dosage: string;
  frequency: string;
}
