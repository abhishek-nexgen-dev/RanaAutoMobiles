export interface LoginFormInputs {
  Email: string;
  Password: string;
}

export interface Auth_Type {
  user: {
    _id: string;
    name: string;
    email: string;
    role: string; // Role field
  } | null; // User can be null if not logged in
}
