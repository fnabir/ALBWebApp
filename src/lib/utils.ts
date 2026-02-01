import { database } from '@/firebase/config';
import { clsx, type ClassValue } from 'clsx';
import { FirebaseError } from 'firebase/app';
import { child, push, ref, set } from 'firebase/database';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function addContactForm(data: object): Promise<'success'> {
  try {
    const newRef = push(child(ref(database), 'forms/contact'));
    const dataWithDate = {
      ...data,
      date: new Date().toISOString(),
    };
    await set(newRef, dataWithDate);
    return 'success';
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message);
    }
    throw new Error(
      'An unexpected error occurred while submitting the form. Please try again',
    );
  }
}

export async function addQuoteForm(data: object): Promise<'success'> {
  try {
    const newRef = push(child(ref(database), 'forms/quote'));
    const dataWithDate = {
      ...data,
      date: new Date().toISOString(),
    };
    await set(newRef, dataWithDate);
    return 'success';
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message);
    }
    throw new Error(
      'An unexpected error occurred while submitting the form. Please try again',
    );
  }
}
