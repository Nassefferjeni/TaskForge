import { writable } from "svelte/store";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "$lib/firebase/firebase";

interface UserData {
  uid: string;
  user: UserData | null;
  loading: boolean;
  data: any;
}

export const authStore = writable<UserData>({
  uid: "",
  user: null,
  loading: true,
  data: {},
});

export const authHandlers = {
  signup: async (email: string, pass: string) => {
    await createUserWithEmailAndPassword(auth, email, pass);
  },
  login: async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  },
  logout: async () => {
    signOut(auth);
  },
};
