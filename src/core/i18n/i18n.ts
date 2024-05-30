'use client';

import { HelperI18Next } from '@/globals/helpers/helpers';

export const MiddlewareInit = async ({
  i18nList = [],
}: {
  i18nList: HelperI18Next.TypeI18NDomain[];
}) => {
  let storageUser;
  if (typeof window !== 'undefined') {
    storageUser = JSON.parse(localStorage.getItem('storage-user') || '{}');
  }

  const langData = storageUser?.state?.langData;

  HelperI18Next.MiddlewareI18nInit(
    {
      debug: false,
      fallbackLng: langData?.lang || 'en',
    },
    i18nList,
  );
};
