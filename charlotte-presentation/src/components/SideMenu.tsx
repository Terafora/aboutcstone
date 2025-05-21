import { useTranslation } from 'react-i18next';
import './SideMenu.scss';

interface SideMenuProps {
  slides: string[];
  currentSlide: number;
  onSelect: (index: number) => void;
}

const SideMenu = ({ slides, currentSlide, onSelect }: SideMenuProps) => {
  const { t } = useTranslation();
  return (
    <div className="side-menu">
      <ul>
        {slides.map((slide, idx) => (
          <li
            key={slide}
            className={idx === currentSlide ? 'active' : ''}
            onClick={() => onSelect(idx)}
          >
            {t(`slides.${slide}`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
