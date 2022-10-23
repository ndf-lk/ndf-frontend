import { createBrowserRouter, Route, Link } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import IndexPage from "./pages";
import NewsPage from "./pages/news";
import PostPage from "./pages/post";
import GalleryPage from "./pages/gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/home",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },

  {
    path: "/news",
    element: (
      <MainLayout>
        <NewsPage />
      </MainLayout>
    ),
  },

  {
    path: "/post/:id",
    element: (
      <MainLayout>
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
    path: "/register",
    element: (
      <MainLayout>
        <RegisterPage />
      </MainLayout>
    ),
  },
]);
