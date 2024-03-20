
export interface user {
  name: string;
  email: string;
  picture: string;
}

export interface post {
  title: string;
  body: string;
}

export interface AuthContextType {
  user: user | null;
  loggedIn: boolean | null;
  checkLoginState: () => Promise<void>; // Assuming checkLoginState returns a Promise<void>
}
