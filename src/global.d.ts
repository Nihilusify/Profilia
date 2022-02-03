/// <reference types="svelte" />

interface User{
    uid: string;
    displayName: string;
    email: string;
    createdDate: Date;
    lastModifiedDate: Date;
    createdUser?: User;
    photoURL?: string;
    name?: string;
    surname?: string;
    contactNumber?: string;
}