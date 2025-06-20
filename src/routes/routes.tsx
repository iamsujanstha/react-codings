import MainLayout from "../layout/MainLayout";
import PageNotFound from "../components/page-not-found/PageNotFound";
import Masking from "../pages/masking-number/Masking";
import VerifyOtp from "../pages/verify-otp/VerifyOtp";
import InteractiveShape from "../pages/interactive-shape/InteractiveShape";
// import Example from "../components/closure-stale-value/ClosureStateRef";
import OperlappingCircles from "../components/overlapping-circles/OperlappingCircles";
import TicTacToe from "../components/tic-tac-toe/TicTacToe";
import IntersectionObserverComponent from "../pages/intersection-observer/IntersectionObserver";
import InfiniteScrolling from "../pages/infinite-scrolling/scroll-height/InfiniteScrolling";
import ObserverInfiniteScroll from "../pages/infinite-scrolling/intersection-observer/ObserverInfiniteScroll";
import ClosureStaleRef from "../components/closure-stale-ref/ClosureStaleRef";
import PopoverPage from "../pages/popover-page/PopoverPage";
import Pagination from "../components/pagination/Pagination";
import RainBowCircle from "../components/Css-Challenge/rainbow-circle/RainBowCircle";
import PigFace from "../components/Css-Challenge/pig-face/PigFace";
import StepperForm from "../components/Css-Challenge/stepper-form/StepperForm";

export const router = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/otp',
        element: <VerifyOtp />,
      },
      {
        path: '/settings/user-management',
        element: <VerifyOtp />
      },
      {
        path: '/masking',
        element: <Masking />
      },
      {
        path: '/interactive-shape',
        element: <InteractiveShape />
      },
      // {
      //   path: '/closure-stale-reference',
      //   element: <Example />
      // },
      {
        path: '/overlapping-circles',
        element: <OperlappingCircles />
      },
      {
        path: '/tic-tac-toe',
        element: <TicTacToe />
      },
      {
        path: '/intersection-observer',
        element: <IntersectionObserverComponent />
      },
      {
        path: '/scroll-height',
        element: <InfiniteScrolling />
      },
      {
        path: '/intersection-observer-scroll',
        element: <ObserverInfiniteScroll />
      },
      {
        path: '/closure-stale-reference',
        element: <ClosureStaleRef />
      },
      {
        path: '/popover',
        element: <PopoverPage />
      },
      {
        path: '/pagination',
        element: <Pagination />
      },
      {
        path: '/css-challenge/rainbow-circle',
        element: < RainBowCircle />
      },
      {
        path: '/css-challenge/pig-face',
        element: < PigFace />
      },
      {
        path: '/css-challenge/stepper-form',
        element: <StepperForm />
      }
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]