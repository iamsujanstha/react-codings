import MainLayout from "../layout/MainLayout";
import PageNotFound from "../components/page-not-found/PageNotFound";
import Masking from "../components/masking-number/Masking";
import VerifyOtp from "../components/verify-otp/VerifyOtp";
import InteractiveShape from "../components/interactive-shape/InteractiveShape";
// import Example from "../components/closure-stale-value/ClosureStateRef";
import OperlappingCircles from "../components/overlapping-circles/OperlappingCircles";
import TicTacToe from "../components/tic-tac-toe/TicTacToe";
import IntersectionObserverComponent from "../components/intersection-observer/IntersectionObserver";
import InfiniteScrolling from "../components/infinite-scrolling/scroll-height/InfiniteScrolling";
import ObserverInfiniteScroll from "../components/infinite-scrolling/intersection-observer/ObserverInfiniteScroll";
import ClosureStaleRef from "../components/closure-stale-ref/ClosureStaleRef";

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
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]