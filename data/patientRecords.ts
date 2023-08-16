export const patientRecords = [
  {
    id: "101",
    fullName: "Martin Greenfield",
    dateOfBirth: "1963-05-15",
    consultationNotes: [
      {
        date: "2023-08-10",
        doctor: "Dr. Amanda Simmons",
        notes:
          "Patient presented with fever, cough, and body aches. Suspected flu.",
      },
      {
        date: "2023-06-20",
        doctor: "Dr. Samuel Clark",
        notes: "Follow-up appointment after gallbladder surgery. Healing well.",
      },
    ],
    testResults: [
      {
        date: "2023-07-05",
        testType: "Complete Blood Count",
        results: "Within normal limits.",
      },
    ],
    scans: [
      {
        date: "2023-07-20",
        scanType: "Abdominal MRI",
        results: "No post-operative complications found.",
      },
    ],
    medicationRecords: [
      {
        date: "2023-08-01",
        medication: "Ibuprofen",
        dosage: "400mg",
        frequency: "Every 6 hours as needed for pain.",
      },
    ],
    medicalHistory: "Hypertension. Allergic to penicillin.",
  },
  {
    id: "102",
    fullName: "Sara Hopkins",
    dateOfBirth: "1988-02-25",
    consultationNotes: [
      {
        date: "2023-07-15",
        doctor: "Dr. Olivia Harris",
        notes: "Routine annual physical. Patient in good health.",
      },
    ],
    testResults: [
      {
        date: "2023-06-10",
        testType: "Lipid Panel",
        results: "LDL cholesterol 160 mg/dL - advised diet modification.",
      },
    ],
    scans: [],
    medicationRecords: [
      {
        date: "2023-06-15",
        medication: "Atorvastatin",
        dosage: "20mg",
        frequency: "Once daily at bedtime.",
      },
    ],
    medicalHistory: "Family history of cardiovascular disease. Non-smoker.",
  },
  {
    id: "103",
    fullName: "Brian Wilson",
    dateOfBirth: "1955-11-03",
    consultationNotes: [
      {
        date: "2023-08-05",
        doctor: "Dr. Jeffrey Carter",
        notes:
          "Complaints of knee pain and stiffness. Referred to orthopedics.",
      },
    ],
    testResults: [
      {
        date: "2023-07-25",
        testType: "Knee X-ray",
        results: "Mild osteoarthritis in the left knee.",
      },
    ],
    scans: [],
    medicationRecords: [
      {
        date: "2023-08-10",
        medication: "Naproxen",
        dosage: "500mg",
        frequency: "Twice daily with food.",
      },
    ],
    medicalHistory:
      "History of left knee injury in 1998. No diabetes or heart conditions.",
  },
];
