export interface UserReport {
  userId: string;
  username: string;
  role: string;
  email: string;
  command: string;
  timestamp: Date;
  id: string;
}

export interface Customers {
  userId: string;
  username: string;
  email: string;
  role: string;
  createdAt: Date;
}
