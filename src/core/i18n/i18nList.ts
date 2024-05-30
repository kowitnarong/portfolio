import { I18N as Home } from '@/app/home/i18n/i18n';
import { I18N as Resume } from '@/app/resume/i18n/i18n';
import { I18N as About } from '@/app/about/i18n/i18n';
import { I18N as GameDevelopment } from '@/app/work/game-development/i18n/i18n';
import { I18N as WebDevelopment } from '@/app/work/web-development/i18n/i18n';
import { HelperI18Next } from '@/globals/helpers/helpers';

export const routei18nList: HelperI18Next.TypeI18NDomain[] = [
  Home,
  Resume,
  About,
  GameDevelopment,
  WebDevelopment,
];
