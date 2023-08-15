export const patientRecords = [
  {
    id: "1",
    fullName: "John Doe",
    dateOfBirth: "1985-05-15",
    consultationNotes: [
      {
        date: "2023-08-10",
        doctor: "Dr. Smith",
        notes: "Patient presented with flu-like symptoms.",
      },
      {
        date: "2023-06-20",
        doctor: "Dr. Johnson",
        notes: "Follow-up appointment after surgery.",
      },
    ],
    testResults: [
      {
        date: "2023-07-05",
        testType: "Blood Test",
        results: "Normal",
      },
    ],
    scans: [
      {
        date: "2023-07-20",
        scanType: "MRI",
        results: "No abnormalities found.",
      },
    ],
    medicationRecords: [
      {
        date: "2023-08-01",
        medication: "Ibuprofen",
        dosage: "200mg",
        frequency: "As needed",
      },
    ],
    medicalHistory: "No chronic conditions. Allergies to penicillin.",
  },
  {
    id: "2",
    fullName: "Jane Smith",
    dateOfBirth: "1990-02-25",
    consultationNotes: [
      {
        date: "2023-07-15",
        doctor: "Dr. Wilson",
        notes: "Annual check-up.",
      },
    ],
    testResults: [
      {
        date: "2023-06-10",
        testType: "Cholesterol Test",
        results: "High cholesterol levels.",
      },
    ],
    scans: [],
    medicationRecords: [
      {
        date: "2023-06-15",
        medication: "Statins",
        dosage: "10mg",
        frequency: "Once daily",
      },
    ],
    medicalHistory: "Family history of heart disease.",
  },
  {
    id: "3",
    fullName: "Emily Johnson",
    dateOfBirth: "1978-11-03",
    consultationNotes: [
      {
        date: "2023-08-05",
        doctor: "Dr. Lee",
        notes: "Initial consultation for joint pain.",
      },
    ],
    testResults: [
      {
        date: "2023-07-25",
        testType: "X-ray",
        results: "Osteoarthritis detected.",
      },
    ],
    scans: [],
    medicationRecords: [
      {
        date: "2023-08-10",
        medication: "NSAIDs",
        dosage: "500mg",
        frequency: "Twice daily",
      },
    ],
    medicalHistory: "Previous knee injury.",
  },
];
