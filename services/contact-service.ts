import { Contact, CONTACT_TAG_TYPE } from "@/lib/type";

export async function fetchContactData(): Promise<Contact[]> {
  return data;
}
const data: Contact[] = [
  {
    UserCardID: 1,
    connectionID: 1,
    connectedUserCardID: 1,
    connectedUserID: 1,
    connectedUsername: "John Doe",
    connectedUserOccupation: "Software Engineer",
    connectedUserCompany: "Tech Innovators Ltd.",
    connectedUserImage:
      "data:image/jpeg;base64,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",
    connectedDate: new Date("2023-01-15T10:30:00"),
    tag: CONTACT_TAG_TYPE.FAMILY,
  },
  {
    UserCardID: 2,
    connectionID: 3,
    connectedUserCardID: 1,
    connectedUserID: 1,
    connectedUsername: "Alice Smith",
    connectedUserOccupation: "Marketing Manager",
    connectedUserCompany: "Creative Solutions",
    connectedUserImage:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSL0eH9M7zlW3oznwVU_iFfBBm9NvGK699uWfVawLlQ_zkifc__LtOS7cM6t89WCTYEYGteM__Izy8uSLt2yA3h9mHXIWClQyqwVhRsFPsHua1Awbtn-KwmvKv5TqPKU9qTA7tvFms&usqp=CAc",
    connectedDate: new Date("2023-01-16T14:00:00"),
    tag: CONTACT_TAG_TYPE.FRIEND,
  },
  {
    UserCardID: 3,
    connectionID: 2,
    connectedUserCardID: 2,
    connectedUserID: 2,
    connectedUsername: "Robert Johnson",
    connectedUserOccupation: "Product Designer",
    connectedUserCompany: "Design Co.",
    connectedUserImage:
      "data:image/jpeg;base64,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",
    connectedDate: new Date("2023-01-17T16:30:00"),
    tag: CONTACT_TAG_TYPE.COLLEAGUE,
  },
  {
    UserCardID: 4,
    connectionID: 4,
    connectedUserCardID: 3,
    connectedUserID: 3,
    connectedUsername: "Emily Turner",
    connectedUserOccupation: "Software Architect",
    connectedUserCompany: "Tech Pioneers",
    connectedUserImage: "",
    connectedDate: new Date("2023-01-18T09:00:00"),
    tag: CONTACT_TAG_TYPE.CLIENT,
  },
  {
    UserCardID: 5,
    connectionID: 5,
    connectedUserCardID: 4,
    connectedUserID: 4,
    connectedUsername: "David Lee",
    connectedUserOccupation: "Operations Manager",
    connectedUserCompany: "SupplyChain Solutions",
    connectedUserImage: "",
    connectedDate: new Date("2023-02-01T11:30:00"),
    tag: CONTACT_TAG_TYPE.SUPPLIER,
  },
  {
    UserCardID: 6,
    connectionID: 6,
    connectedUserCardID: 5,
    connectedUserID: 5,
    connectedUsername: "Sarah Kim",
    connectedUserOccupation: "Business Analyst",
    connectedUserCompany: "Enterprise Consulting",
    connectedUserImage: "",
    connectedDate: new Date("2023-02-05T10:45:00"),
    tag: CONTACT_TAG_TYPE.INVESTOR,
  },
  {
    UserCardID: 7,
    connectionID: 7,
    connectedUserCardID: 6,
    connectedUserID: 6,
    connectedUsername: "Michael Brown",
    connectedUserOccupation: "Legal Counsel",
    connectedUserCompany: "Lawyers United",
    connectedUserImage: "",
    connectedDate: new Date("2023-02-10T12:30:00"),
    tag: CONTACT_TAG_TYPE.EMPLOYEE,
  },
  {
    UserCardID: 8,
    connectionID: 8,
    connectedUserCardID: 7,
    connectedUserID: 7,
    connectedUsername: "Olivia Williams",
    connectedUserOccupation: "Data Scientist",
    connectedUserCompany: "Data Insights",
    connectedUserImage: "",
    connectedDate: new Date("2023-02-15T13:00:00"),
    tag: CONTACT_TAG_TYPE.VENDOR,
  },
  {
    UserCardID: 9,
    connectionID: 9,
    connectedUserCardID: 8,
    connectedUserID: 8,
    connectedUsername: "Sophia Harris",
    connectedUserOccupation: "Chief Technology Officer",
    connectedUserCompany: "Tech Enterprises",
    connectedUserImage: "",
    connectedDate: new Date("2023-03-01T09:30:00"),
    tag: CONTACT_TAG_TYPE.FAMILY,
  },
  {
    UserCardID: 10,
    connectionID: 10,
    connectedUserCardID: 9,
    connectedUserID: 9,
    connectedUsername: "Lucas Walker",
    connectedUserOccupation: "Customer Support Lead",
    connectedUserCompany: "SupportNow",
    connectedUserImage: "",
    connectedDate: new Date("2023-03-05T11:15:00"),
    tag: CONTACT_TAG_TYPE.FRIEND,
  },
  {
    UserCardID: 11,
    connectionID: 11,
    connectedUserCardID: 10,
    connectedUserID: 10,
    connectedUsername: "Grace Johnson",
    connectedUserOccupation: "HR Director",
    connectedUserCompany: "Global Enterprises",
    connectedUserImage: "",
    connectedDate: new Date("2023-03-07T15:00:00"),
    tag: CONTACT_TAG_TYPE.COLLEAGUE,
  },
  {
    UserCardID: 12,
    connectionID: 12,
    connectedUserCardID: 11,
    connectedUserID: 11,
    connectedUsername: "Daniel Moore",
    connectedUserOccupation: "UI/UX Designer",
    connectedUserCompany: "Creative Vision",
    connectedUserImage: "",
    connectedDate: new Date("2023-03-10T17:45:00"),
    tag: CONTACT_TAG_TYPE.CLIENT,
  },
  {
    UserCardID: 13,
    connectionID: 13,
    connectedUserCardID: 12,
    connectedUserID: 12,
    connectedUsername: "Ella Martin",
    connectedUserOccupation: "Financial Analyst",
    connectedUserCompany: "FinCorp",
    connectedUserImage: "",
    connectedDate: new Date("2023-03-15T10:00:00"),
    tag: CONTACT_TAG_TYPE.SUPPLIER,
  },
  {
    UserCardID: 14,
    connectionID: 14,
    connectedUserCardID: 13,
    connectedUserID: 13,
    connectedUsername: "James Taylor",
    connectedUserOccupation: "Business Consultant",
    connectedUserCompany: "ConsultPro",
    connectedUserImage: "",
    connectedDate: new Date("2023-03-20T12:30:00"),
    tag: CONTACT_TAG_TYPE.INVESTOR,
  },
  {
    UserCardID: 15,
    connectionID: 15,
    connectedUserCardID: 14,
    connectedUserID: 14,
    connectedUsername: "Charlotte Young",
    connectedUserOccupation: "Operations Executive",
    connectedUserCompany: "LogiCorp",
    connectedUserImage: "",
    connectedDate: new Date("2023-04-01T14:00:00"),
    tag: CONTACT_TAG_TYPE.EMPLOYEE,
  },
  {
    UserCardID: 16,
    connectionID: 16,
    connectedUserCardID: 15,
    connectedUserID: 15,
    connectedUsername: "Oliver Scott",
    connectedUserOccupation: "Senior Engineer",
    connectedUserCompany: "TechStream",
    connectedUserImage: "",
    connectedDate: new Date("2023-04-10T09:30:00"),
    tag: CONTACT_TAG_TYPE.VENDOR,
  },
  {
    UserCardID: 17,
    connectionID: 17,
    connectedUserCardID: 16,
    connectedUserID: 16,
    connectedUsername: "Ava Lee",
    connectedUserOccupation: "Marketing Specialist",
    connectedUserCompany: "BrandCo",
    connectedUserImage: "",
    connectedDate: new Date("2023-04-15T10:00:00"),
    tag: CONTACT_TAG_TYPE.FAMILY,
  },
  {
    UserCardID: 18,
    connectionID: 18,
    connectedUserCardID: 17,
    connectedUserID: 17,
    connectedUsername: "Henry Perez",
    connectedUserOccupation: "Project Manager",
    connectedUserCompany: "ManageIt",
    connectedUserImage: "",
    connectedDate: new Date("2023-04-20T13:45:00"),
    tag: CONTACT_TAG_TYPE.FRIEND,
  },
  {
    UserCardID: 19,
    connectionID: 19,
    connectedUserCardID: 18,
    connectedUserID: 18,
    connectedUsername: "Isla Green",
    connectedUserOccupation: "Operations Manager",
    connectedUserCompany: "Operations360",
    connectedUserImage: "",
    connectedDate: new Date("2023-04-25T12:00:00"),
    tag: CONTACT_TAG_TYPE.COLLEAGUE,
  },
  {
    UserCardID: 20,
    connectionID: 20,
    connectedUserCardID: 19,
    connectedUserID: 19,
    connectedUsername: "Elijah Carter",
    connectedUserOccupation: "Lead Developer",
    connectedUserCompany: "DevTech",
    connectedUserImage: "",
    connectedDate: new Date("2023-05-01T10:15:00"),
    tag: CONTACT_TAG_TYPE.CLIENT,
  },
  {
    UserCardID: 21,
    connectionID: 21,
    connectedUserCardID: 20,
    connectedUserID: 20,
    connectedUsername: "Scarlett Evans",
    connectedUserOccupation: "Customer Success Manager",
    connectedUserCompany: "SuccessPartners",
    connectedUserImage: "",
    connectedDate: new Date("2023-05-05T14:30:00"),
    tag: CONTACT_TAG_TYPE.SUPPLIER,
  },
  {
    UserCardID: 22,
    connectionID: 22,
    connectedUserCardID: 21,
    connectedUserID: 21,
    connectedUsername: "Benjamin Clark",
    connectedUserOccupation: "Business Strategist",
    connectedUserCompany: "StratCorp",
    connectedUserImage: "",
    connectedDate: new Date("2023-05-10T11:00:00"),
    tag: CONTACT_TAG_TYPE.INVESTOR,
  },
  {
    UserCardID: 23,
    connectionID: 23,
    connectedUserCardID: 22,
    connectedUserID: 22,
    connectedUsername: "Mia Wilson",
    connectedUserOccupation: "HR Executive",
    connectedUserCompany: "PeopleFirst",
    connectedUserImage: "",
    connectedDate: new Date("2023-05-15T13:30:00"),
    tag: CONTACT_TAG_TYPE.EMPLOYEE,
  },
  {
    UserCardID: 24,
    connectionID: 24,
    connectedUserCardID: 23,
    connectedUserID: 23,
    connectedUsername: "Lucas Harris",
    connectedUserOccupation: "Software Developer",
    connectedUserCompany: "CodeWorks",
    connectedUserImage: "",
    connectedDate: new Date("2023-05-20T16:00:00"),
    tag: CONTACT_TAG_TYPE.VENDOR,
  },
  {
    UserCardID: 25,
    connectionID: 25,
    connectedUserCardID: 24,
    connectedUserID: 24,
    connectedUsername: "James King",
    connectedUserOccupation: "Senior Developer",
    connectedUserCompany: "DevSolutions",
    connectedUserImage: "",
    connectedDate: new Date("2023-05-25T17:45:00"),
    tag: CONTACT_TAG_TYPE.FAMILY,
  },
  {
    UserCardID: 26,
    connectionID: 26,
    connectedUserCardID: 25,
    connectedUserID: 25,
    connectedUsername: "Amelia Adams",
    connectedUserOccupation: "Product Manager",
    connectedUserCompany: "TechFlow",
    connectedUserImage: "",
    connectedDate: new Date("2023-06-01T09:30:00"),
    tag: CONTACT_TAG_TYPE.FRIEND,
  },
  {
    UserCardID: 27,
    connectionID: 27,
    connectedUserCardID: 26,
    connectedUserID: 26,
    connectedUsername: "Ethan Baker",
    connectedUserOccupation: "CEO",
    connectedUserCompany: "FutureTech",
    connectedUserImage: "",
    connectedDate: new Date("2023-06-05T12:00:00"),
    tag: CONTACT_TAG_TYPE.COLLEAGUE,
  },
  {
    UserCardID: 28,
    connectionID: 28,
    connectedUserCardID: 27,
    connectedUserID: 27,
    connectedUsername: "Charlotte Moore",
    connectedUserOccupation: "Software Engineer",
    connectedUserCompany: "Tech Innovations",
    connectedUserImage: "",
    connectedDate: new Date("2023-06-10T14:30:00"),
    tag: CONTACT_TAG_TYPE.CLIENT,
  },
  {
    UserCardID: 29,
    connectionID: 29,
    connectedUserCardID: 28,
    connectedUserID: 28,
    connectedUsername: "Liam Turner",
    connectedUserOccupation: "Business Analyst",
    connectedUserCompany: "Consulting Group",
    connectedUserImage: "",
    connectedDate: new Date("2023-06-15T13:15:00"),
    tag: CONTACT_TAG_TYPE.SUPPLIER,
  },
  {
    UserCardID: 30,
    connectionID: 30,
    connectedUserCardID: 29,
    connectedUserID: 29,
    connectedUsername: "Sophia Gonzalez",
    connectedUserOccupation: "Financial Consultant",
    connectedUserCompany: "FinancesPro",
    connectedUserImage: "",
    connectedDate: new Date("2023-06-20T15:00:00"),
    tag: CONTACT_TAG_TYPE.INVESTOR,
  },
];