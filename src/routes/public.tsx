import MainLayout from "../layout/MainLayout";
import PageNotFound from "../components/page-not-found/PageNotFound";
import Masking from "../components/masking-number/Masking";
import VerifyOtp from "../components/verify-otp/VerifyOtp";

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
      }
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]