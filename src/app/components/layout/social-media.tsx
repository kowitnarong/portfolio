import { Button, Link } from '@nextui-org/react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';

export const SocialMedia = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <Button
        size="md"
        as={Link}
        isIconOnly
        aria-label="Facebook"
        isExternal
        href="https://www.facebook.com/golf183/"
      >
        <FaFacebook size={24} />
      </Button>
      <Button
        size="md"
        as={Link}
        isIconOnly
        aria-label="Github"
        isExternal
        href="https://github.com/kowitnarong/"
      >
        <FaGithub size={24} />
      </Button>
      <Button
        size="md"
        as={Link}
        isIconOnly
        aria-label="Linkedin"
        isExternal
        href="https://www.linkedin.com/in/kowit-narongtuwapan-4a6b2825a/"
      >
        <FaLinkedin size={24} />
      </Button>
    </div>
  );
};
