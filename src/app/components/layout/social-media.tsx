import { Image } from '@nextui-org/react';

export const SocialMedia = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Image
        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg"
        alt="Facebook"
        width={36}
        height={36}
      />
      <Image
        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
        alt="Github"
        width={36}
        height={36}
      />
      <Image
        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
        alt="Linkedin"
        width={36}
        height={36}
      />
    </div>
  );
};
