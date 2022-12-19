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
import { LibraryPage } from "./pages/library";
import { EditPage, DashboardPage, UsersPage } from "./pages/dashboard";
import { ContactPage } from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/home",
    element: (
      <MainLayout hideNewsBar={false}>
        <ScrollToTop />
        <HomePage />
      </MainLayout>
    ),
  },

  {
    path: "/news",
    element: (
      <MainLayout hideNewsBar={false}>
        <ScrollToTop />
        <NewsPage />
      </MainLayout>
    ),
  },

  {
    path: "/contact",
    element: (
      <MainLayout hideNewsBar={true}>
        <ScrollToTop />
        <ContactPage />
      </MainLayout>
    ),
  },

  {
    path: "/post/:id",
    element: (
      <MainLayout hideNewsBar={false}>
        <ScrollToTop />
        <PostPage />
      </MainLayout>
    ),
  },

  {
    path: "/gallery",
    element: (
      <MainLayout hideNewsBar={false}>
        <GalleryPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard/create",
    element: (
      <MainLayout hideNewsBar={true}>
        <EditPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard/users",
    element: (
      <MainLayout hideNewsBar={true}>
        <UsersPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <MainLayout hideNewsBar={true}>
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
    element: (
      <MainLayout hideNewsBar={true}>
        <LibraryPage />
      </MainLayout>
    ),
  },

  {
    path: "/register",
    element: <LoginPage />,
  },
]);
