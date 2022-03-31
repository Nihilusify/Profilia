import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { writable } from "svelte/store";
import { firebaseApp, db } from '../firebase';
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

        update(async () => {
            const date = new Date();
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            console.log(user, docSnap.data(), docSnap.exists(), user.uid, docRef.path);
            
            if (docSnap.exists()) {
                console.log(date)
                updateDoc(docRef, {
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    lastModifiedDate: date,
                });
            } else {
                console.log('set')
                setDoc(docRef, {
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    createdDate: date,
                    lastModifiedDate: date,
                } as User);
            }



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
        signOut(auth).then(() => { })
            .catch((error) => {
                console.error('Error signing out', error);
            });
    };

    return {
        subscribe,
        signInWithGoogle,
        accountSignOut,
    }
};

export const user = createUserWritable();