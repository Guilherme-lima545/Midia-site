import React from 'react';
import { useSelector } from 'react-redux';
import ScreenOne from './ScreenOne';
import Members from './Members';
import ScreenInitial from './Screeninitial';
import PageFinal from './PageFinal';

const slides = [<ScreenInitial />, <ScreenOne />, <Members />, <PageFinal />];

const SlideShow = () => {
  const currentIndex = useSelector((state) => state.slide.currentIndex);

  return <>{slides[currentIndex]}</>;
};

export default SlideShow;
