import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const validationRules = {
	minLength: 12,
	specialChar: /[!@#$%^&*(),.?":{}|<>]/,
	capitalLetter: /[A-Z]/,
	smallLetter: /[a-z]/,
	emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};
