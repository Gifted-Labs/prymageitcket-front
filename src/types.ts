export enum TicketStatus {
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  RESOLVED = 'Resolved',
  CLOSED = 'Closed'
}

export enum TicketSeverity {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export enum TicketDepartment {
  GENERAL = 'General Support',
  TECHNICAL = 'Technical Support',
  BILLING = 'Billing & Finance',
  CONSULTANCY = 'Strategic Consultancy'
}

export interface Ticket {
  id: string;
  submissionId: string; // The ID client uses to track
  clientName: string;
  clientEmail: string;
  department: TicketDepartment;
  category: string;
  severity: TicketSeverity;
  subject: string;
  description: string;
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
  attachments?: string[];
  comments: TicketComment[];
}

export interface TicketComment {
  id: string;
  authorName: string;
  authorRole: 'Client' | 'Staff';
  content: string;
  createdAt: string;
}

export interface Staff {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  dateAdded: string;
  avatar?: string;
  performance: {
    ticketsResolved: number;
    avgResolutionTime: string;
    satisfactionRate: number;
  };
}
