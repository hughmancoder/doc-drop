# Document Drop

## TODO

### 2.1.1 Homepage

- [x] Navbar pages
- [x] The application shall provide a homepage that allows users to search for clinics, healthcare facilities, or specific doctors practicing in a given location.
- [x] The search results shall be displayed in an easily navigable format with relevant details.
- [ ] Implement filtering and searching
- [ ] Add location sorting and card
- [ ] Notification left side bar approval
- [ ] Fix patient record formatting
- [ ] Add Ocupational Therapist, Add Physiopherapist

### 2.2.1 Request Page

The application shall provide a page to request specific patient records. Users can select categories including:
Consultation notes
Test results
Last scans
Latest medication records
Medical history
The request form shall include the following patient identifiers:
Full name
Date of birth
Specific category of record requested (from the categories mentioned above)
The name, title, and work unit of the person making the request (can be a unit, practice, or specific doctor)

### Other

- [ ] Upload record pdf, document, and embed it (cloud drop)
- [x] use api for profile pictures
- [ ] form to request specific patient records like consultation notes, test results, last scans, medication history, etc. It includes patient identifiers and offers multiple ways to receive the requested records (email, fax, or directly through the app)]
- [ ] Real time notification page: Upon a request, a notification appears on the requested clinic's desktop. An admin person or the patient's doctor can authorize sharing the records. If patient consent is needed, a real-time notifier can be sent to the requester.
- [ ] Settings: Clinics can choose whether or not to use the platform, maintaining autonomy and patient privacy.

### User stories

2.2.2 Record Transmission Options

The request form shall offer different ways to receive/send the requested records, including:
Email
Fax number
Directly through the application

2.2.3 Notifications
The application shall provide real-time notifications that appear on the requested clinic’s computer desktop to alert them of a new record request.

2.3 Authorization
Upon receiving the request, either an admin person at the reception or the patient’s doctor must authorize the sharing of the records.
In cases where the patient's consent is required for sharing the records, a real-time notifier shall be sent to the requester, informing them of the need for patient consent. 3. Compliance and Security
The application must comply with all applicable healthcare regulations and standards, including data privacy laws.
Adequate security measures must be implemented to ensure that patient data is handled and transmitted securely.

## Problem

Accessing patient records across various healthcare networks such as specialist centers, general practitioners, private practices, and clinics is cumbersome and time-consuming. The traditional means, such as phone calls and emails, consume junior doctors' time and detract from patient care.

## Solution

A web app that facilitates the request and sharing of specific patient data across healthcare practices.

## Key Features

Security: Leverages existing firewall protection within healthcare practices to ensure confidentiality and security of patient records.

User-Friendly Interface: Similar to the Hotdoc homepage, the app is intuitive and requires no additional training for staff.

Search Functionality: Users can search other healthcare facilities or doctors practicing in specific locations.

Request Form: A form to request specific patient records like consultation notes, test results, last scans, medication history, etc. It includes patient identifiers and offers multiple ways to receive the requested records (email, fax, or directly through the app).

Real-Time Notifications: Upon a request, a notification appears on the requested clinic's desktop. An admin person or the patient's doctor can authorize sharing the records. If patient consent is needed, a real-time notifier can be sent to the requester.

Cloud Integration: Mentioned "Filed X (cloud drop)," it may imply integration with cloud storage, though details are not specified.

Optional Participation: Clinics can choose whether or not to use the platform, maintaining autonomy and patient privacy.

Benefits

Efficiency: Significantly reduces the time and effort required to access patient records.

Training Costs: No additional training is needed, saving both time and money.

Privacy Compliance: Does not aggregate records in the same database, acting only as a communication platform while respecting patient privacy.

Conclusion:
The proposed web app aims to streamline the process of requesting and sharing patient records across various healthcare practices. By utilizing existing security measures and offering an intuitive, real-time solution, it facilitates smoother communication, efficiency, and maintains the privacy and autonomy of participating entities. It represents a technologically savvy approach to a longstanding issue in healthcare coordination.
