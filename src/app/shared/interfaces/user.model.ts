export interface UserData {
  user: User;
  token: string;
}

export interface User {
  userId: string;
  username: string;
  email: string;
  authorities: Authority[];
}

export interface Authority {
  roleId: string;
  authority: string;
}

export interface UserProfile {
  username: string;
  token: string;
  role: string[];
}
