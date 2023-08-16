interface PatientNote {
  date: string;
  doctor: string;
  notes: string;
}

interface TestResult {
  date: string;
  testType: string;
  results: string;
}

interface Scan {
  date: string;
  scanType: string;
  results: string;
}

interface MedicationRecord {
  date: string;
  medication: string;
  dosage: string;
  frequency: string;
}

export interface Patient {
  fullName: string;
  dateOfBirth: string;
  medicalHistory: string;
  consultationNotes: PatientNote[];
  testResults: TestResult[];
  scans: Scan[];
  medicationRecords: MedicationRecord[];
}
