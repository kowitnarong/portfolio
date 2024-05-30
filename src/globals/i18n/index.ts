import { HelperI18Next } from '../helpers/helpers';
import { routei18nList } from '@/core/i18n/i18nList';
import en from './en/index.json';
import th from './th/index.json';

export const I18nDomainName = 'globals';

const initI18N = ({ name = '' }: { name: string }): HelperI18Next.TypeI18NDomain => {
  return {
    name: name,
    locate: { en, th },
  };
};

export const i18nList: HelperI18Next.TypeI18NDomain[] = [
  initI18N({ name: I18nDomainName }),
  ...routei18nList,
];
