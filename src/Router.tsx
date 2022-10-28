import { createBrowserRouter, Route, Link } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import IndexPage from "./pages";
import NewsPage from "./pages/news";
import PostPage from "./pages/post";
import GalleryPage from "./pages/gallery";
import ScrollToTop from "./utils/scrollTop";
import { LoginPage } from "./pages/login";
import { DashboardPage } from "./pages/dashboard";
import { LibraryPage } from "./pages/library";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/home",
    element: (
      <MainLayout>
        <ScrollToTop />
        <HomePage />
      </MainLayout>
    ),
  },

  {
    path: "/news",
    element: (
      <MainLayout>
        <ScrollToTop />
        <NewsPage />
      </MainLayout>
    ),
  },

  {
    path: "/post/:id",
    element: (
      <MainLayout>
        <ScrollToTop />
        <PostPage />
      </MainLayout>
    ),
  },

  {
    path: "/gallery",
    element: (
      <MainLayout>
        <GalleryPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <MainLayout>
        <DashboardPage />
      </MainLayout>
    ),
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/library",
    element: <LibraryPage />,
  },

  {
    path: "/register",
    element: <LoginPage />,
  },
]);
