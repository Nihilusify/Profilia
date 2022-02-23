import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { writable } from "svelte/store";
import { firebaseApp } from '../firebase';
import type { User } from "../global";

const createUserWritable = () => {
    const { subscribe, update } = writable({} as User | {});

    const auth = getAuth(firebaseApp)
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            update(() => {
                return {};
            });
            accountSignOut();
            return;
        }

        if (!user.emailVerified) {
            update(() => {
                return {};
            });
            accountSignOut();

            return;
        }

        update(() => {
            return {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            }
        });
    });

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .catch((error) => {
                console.error('Error signing in', error);
            });
    };

    const accountSignOut = () => {
        signOut(auth).then(()=> {})
            .catch((error) => {
                console.error('Error signing out', error);
            });
    };

    return {
        subscribe,
        signInWithGoogle,
        accountSignOut
    }
};

export const user = createUserWritable();