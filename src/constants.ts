import { Ticket, TicketStatus, TicketSeverity, TicketDepartment, Staff } from './types';

export const MOCK_TICKETS: Ticket[] = [
  {
    id: 't1',
    submissionId: 'PRY-1024-XJ',
    clientName: 'Sarah Jenkins',
    clientEmail: 's.jenkins@techex.com',
    department: TicketDepartment.CONSULTANCY,
    category: 'Market Entry',
    severity: TicketSeverity.HIGH,
    subject: 'Urgent: Feedback on Q3 Strategy adjustments',
    description: 'We need a review of the proposed expansion into the SE Asia market by end of week.',
    status: TicketStatus.IN_PROGRESS,
    createdAt: '2024-03-10T10:30:00Z',
    updatedAt: '2024-03-12T14:20:00Z',
    comments: [
      {
        id: 'c1',
        authorName: 'Sarah Jenkins',
        authorRole: 'Client',
        content: 'I have uploaded the latest proposal document.',
        createdAt: '2024-03-10T10:35:00Z'
      },
      {
        id: 'c2',
        authorName: 'David Chen',
        authorRole: 'Staff',
        content: 'Received. Our team is reviewing the financial projections now.',
        createdAt: '2024-03-11T09:00:00Z'
      }
    ]
  },
  {
    id: 't2',
    submissionId: 'PRY-1025-YT',
    clientName: 'Marcus Vane',
    clientEmail: 'marcus@vane.investments',
    department: TicketDepartment.BILLING,
    category: 'Invoice Dispute',
    severity: TicketSeverity.MEDIUM,
    subject: 'Request for clarification on Feb Invoice #998',
    description: 'The hours billed for the risk assessment phase seem higher than initially quoted.',
    status: TicketStatus.OPEN,
    createdAt: '2024-03-12T16:45:00Z',
    updatedAt: '2024-03-12T16:45:00Z',
    comments: []
  },
  {
    id: 't3',
    submissionId: 'PRY-1026-LQ',
    clientName: 'Elena Rodriquez',
    clientEmail: 'elena@biotech-global.es',
    department: TicketDepartment.TECHNICAL,
    category: 'Portal Access',
    severity: TicketSeverity.LOW,
    subject: 'Cannot access the secure data room',
    description: 'My credentials are valid but I am getting a 403 error on the Biotech project folder.',
    status: TicketStatus.RESOLVED,
    createdAt: '2024-03-08T11:20:00Z',
    updatedAt: '2024-03-09T10:15:00Z',
    comments: [
      {
        id: 'c3',
        authorName: 'System',
        authorRole: 'Staff',
        content: 'Permissions synced. Please try again.',
        createdAt: '2024-03-09T10:10:00Z'
      }
    ]
  }
];

export const MOCK_STAFF: Staff[] = [
  {
    id: 's1',
    name: 'David Chen',
    email: 'd.chen@prymage.com',
    role: 'Senior Consultant',
    status: 'Active',
    dateAdded: '2022-01-15',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    performance: {
      ticketsResolved: 142,
      avgResolutionTime: '2.4 days',
      satisfactionRate: 98
    }
  },
  {
    id: 's2',
    name: 'Sarah Miller',
    email: 's.miller@prymage.com',
    role: 'Financial Analyst',
    status: 'Active',
    dateAdded: '2022-06-20',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    performance: {
      ticketsResolved: 89,
      avgResolutionTime: '1.8 days',
      satisfactionRate: 95
    }
  },
  {
    id: 's3',
    name: 'James Wilson',
    email: 'j.wilson@prymage.com',
    role: 'Support Lead',
    status: 'On Leave',
    dateAdded: '2021-11-05',
    performance: {
      ticketsResolved: 256,
      avgResolutionTime: '1.2 days',
      satisfactionRate: 92
    }
  }
];
