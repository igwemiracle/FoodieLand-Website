import { FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
import { cn } from '../utils';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const SocialIcons = ({ className }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="flex gap-8">
      <FacebookIcon className={cn("text-black fill-black", isDark && "text-white", className)} />
      <TwitterIcon className={cn("text-black fill-black", isDark && "text-white", className)} />
      <InstagramIcon className={cn("text-black", isDark && "text-white", className)} />
    </div>
  );
};

export default SocialIcons;
