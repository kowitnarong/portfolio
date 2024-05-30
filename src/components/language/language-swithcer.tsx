'use client';

import { useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

import { AiOutlineGlobal } from 'react-icons/ai';
import { GetMethodStoreGlobal } from '@/globals/stores/session/session';
import { HelperTime } from '@/globals/helpers/helpers';
import {
  GetMethodStoreGlobalPersist,
  UseStoreGlobalPersist,
} from '@/globals/stores/persist/persist';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { langData } = UseStoreGlobalPersist(['langData']);
  const { setLangData } = GetMethodStoreGlobalPersist();
  const { setIsLoading } = GetMethodStoreGlobal();
  const [selectedKeys, setSelectedKeys] = useState(new Set([langData.lang]));

  function onLangChange(key: string) {
    i18n.changeLanguage(String(key));
    document.querySelector('html')?.setAttribute('lang', String(key));
    setLangData({ lang: String(key) });
  }

  return (
    <div className="flex items-center justify-center">
      <Dropdown>
        <DropdownTrigger>
          <Button aria-label="Language switcher" isIconOnly size="sm">
            <AiOutlineGlobal size={18} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Language switcher"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onAction={async (key) => {
            setIsLoading(true);
            setSelectedKeys(new Set([String(key)]));
            onLangChange(String(key));
            await HelperTime.WaitForMilliSecond(1000);
            setIsLoading(false);
          }}
        >
          <DropdownItem className="text-black dark:text-slate-400" key="en">
            English
          </DropdownItem>
          <DropdownItem className="text-black dark:text-slate-400" key="th">
            ไทย
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
