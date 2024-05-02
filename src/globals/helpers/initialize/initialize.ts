import { GetMethodStoreGlobal } from '@/globals/stores/session/session';
import { HelperTime } from '../helpers';

type InitPageProps = {
  menuUIIsShow: {
    isShowHeader: boolean;
    isShowFooter: boolean;
  };
  loadTimeout: number;
};

export const InitPage = async (props: InitPageProps) => {
  const { setMenuUIIsShow, setIsLoading } = GetMethodStoreGlobal();

  setMenuUIIsShow(props.menuUIIsShow.isShowHeader, props.menuUIIsShow.isShowFooter);
  await HelperTime.WaitForMilliSecond(props.loadTimeout);
  setIsLoading(false);
};
