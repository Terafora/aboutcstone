import React from 'react';
import { useTranslation } from 'react-i18next';
import './InfoBar.scss';

interface InfoBarProps {
  currentSlide: number;
}

const InfoBar = ({ currentSlide }: InfoBarProps) => {
  const { t } = useTranslation();
  const infoText = t(`infobar_${currentSlide}`); // Use a translation key based on the current slide index

  return (
    <div className="info-bar">
      <div className="info-bar__scroll">
        {infoText}
      </div>
    </div>
  );
};

export default InfoBar;