import { GetMethodStoreGlobal } from '@/globals/stores/session/session';
import { useRouter } from 'next/navigation';
import { HelperTime } from '@/globals/helpers/helpers';

interface INavigateWithLoader {
  path: string;
  loadTimeout: number;
}

export const useNavigateLoader = () => {
  const router = useRouter();
  const { setIsLoading } = GetMethodStoreGlobal();

  const navigateWithLoader = async ({ path, loadTimeout }: INavigateWithLoader) => {
    setIsLoading(true);
    await HelperTime.WaitForMilliSecond(loadTimeout);
    router.push(path);
  };

  return navigateWithLoader;
};
