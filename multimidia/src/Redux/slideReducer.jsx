import Members from '../Components/Members';
import PageFinal from '../Components/PageFinal';
import Screeninitial from '../Components/Screeninitial';
import ScreenOne from '../Components/ScreenOne';

const slides = [<Screeninitial />, <Members />, <ScreenOne /> , <PageFinal />];

const initialState = {
  currentIndex: 0,
  totalSlides: slides.length,
};

const slide = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.totalSlides,
      };
    case 'PREV':
      return {
        ...state,
        currentIndex:
          state.currentIndex === 0
            ? state.totalSlides - 1
            : state.currentIndex - 1,
      };
    default:
      return state;
  }
};

export default slide;

export const nextSlide = () => ({ type: 'NEXT' });

export const prevSlide = () => ({ type: 'PREV' });
