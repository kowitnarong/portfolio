import { HelperI18Next } from '@/globals/helpers/helpers';
import en from './en/index.json';
import th from './th/index.json';

export const I18nDomainName = 'game-development';

export const I18N: HelperI18Next.TypeI18NDomain = {
  name: I18nDomainName,
  locate: { en, th },
};
