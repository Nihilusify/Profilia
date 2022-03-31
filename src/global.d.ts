/// <reference types="svelte" />

export interface User{
    uid: string;
    displayName: string;
    email: string;
    createdDate: Date;
    lastModifiedDate: Date;
    createdUser?: string;
    photoURL?: string;
    name?: string;
    surname?: string;
    contactNumber?: string;
}