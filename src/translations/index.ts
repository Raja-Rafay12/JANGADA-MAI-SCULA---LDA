import { en } from './en';
import { pt } from './pt';
import { ar } from './ar';

export type Language = 'en' | 'ar' | 'pt';

export const translations = {
  en,
  pt,
  ar,
};

export type Translations = typeof en;
