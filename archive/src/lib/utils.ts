import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// used to translate project title to url
export const getLink = (title: string) => {
  let str = '/' + title;
  str = str.replace(/\s/g, '-');
  return str.toLocaleLowerCase();
};
