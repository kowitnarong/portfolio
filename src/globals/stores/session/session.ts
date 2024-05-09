import { createWithEqualityFn } from 'zustand/traditional';

import { HelperZustand } from '@/globals/helpers/helpers';

export type TypeStoreGlobal = {
  isMobile: boolean;
  isLoading: boolean;
  menuUIIsShow: {
    isShowHeader: boolean;
    isShowFooter: boolean;
  };
};

export const StoreGlobal = createWithEqualityFn(
  (): TypeStoreGlobal => ({
    isMobile: false,
    isLoading: true,
    menuUIIsShow: {
      isShowHeader: true,
      isShowFooter: true,
    },
  }),
);

// ============ Method ==============
export type TypeMethodStoreGlobal = {
  setIsMobile: (isMobile: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setMenuUIIsShow: (isShowHeader: boolean, isShowFooter: boolean) => void;
};

const methodStoreGlobal: TypeMethodStoreGlobal = {
  setIsMobile: (isMobile: boolean) => {
    StoreGlobal.setState({ isMobile });
  },
  setIsLoading: (isLoading: boolean) => {
    StoreGlobal.setState({ isLoading });
  },
  setMenuUIIsShow: (isShowHeader: boolean, isShowFooter: boolean) => {
    StoreGlobal.setState({
      menuUIIsShow: { isShowHeader, isShowFooter },
    });
  },
};

// ============ Export ==============
export const UseStoreGlobal = (
  stateList: string[],
  isShallow?: boolean,
): TypeStoreGlobal => {
  return HelperZustand.StateMapping(stateList, StoreGlobal, isShallow) as TypeStoreGlobal;
};

export const GetMethodStoreGlobal = (): TypeMethodStoreGlobal => {
  return methodStoreGlobal;
};

export const GetStoreGlobal = () => StoreGlobal.getState();
export const SetStoreGlobal = (prop: any) => StoreGlobal.setState(prop);
