import { FC } from 'react';
import {
  Github,
  MailCheck,
  Home,
  Image as ImageIcon,
  Instagram,
  Book,
  Linkedin,
  X,
} from 'lucide-react';
import List from '../ui/List';
import { useMenu } from '../Provider';

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  const { showMenuVisibility } = useMenu();
  return (
    <div
      className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
      onClick={() => showMenuVisibility(false)}
    >
      <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
        <X className={`text-primary`} />
      </div>
      {/* List 1 */}
      <List link="/" effect="slideUp">
        <Home /> Home
      </List>

      {/* List 2 */}
      <List
        target="_blank"
        link="https://www.instagram.com/kaswan812/"
        effect="slideUp"
      >
        <Instagram color="#b5179e" /> Instagram
      </List>
      <List target="_blank" link="https://github.com/nwaliaez" effect="slideUp">
        <Github color="#2a9d8f" /> Github
      </List>
      <List
        target="_blank"
        link="https://leetcode.com/ManishKaswan/"
        effect="slideUp"
      >
        <Book color="orange" /> LeetCode
      </List>
      <List
        target="_blank"
        link="https://www.linkedin.com/in/manish-kaswan-36b972235/"
        effect="slideUp"
      >
        <Linkedin color="#0277b5" /> LinkedIn
      </List>
      <List
        target="_blank"
        link="https://mail.google.com/mail/u/0/#inbox"
        effect="slideUp"
      >
        <MailCheck color="#0277b5" /> Gmail
      </List>
    </div>
  );
};

export default Menu;
