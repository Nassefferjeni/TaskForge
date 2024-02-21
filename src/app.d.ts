// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

interface LoginForm {
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserData {
  uid: string;
  users: object;
  data: Array;
  loading: boolean;
}
