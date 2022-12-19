import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import RegisterPage from "./pages/auth/register";
import HomePage from "./pages/home";
import IndexPage from "./pages";
import NewsPage from "./pages/news";
import PostPage from "./pages/post";
import GalleryPage from "./pages/gallery";
import ScrollToTop from "./utils/scrollTop";
import { LoginPage } from "./pages/auth/login";
import { LibraryPage } from "./pages/library";
import {
  DashboardPage,
  UsersPage,
  GalleryCreatePage,
  CollectionsPage,
  EditCollectionsPage,
  ViewNewsPage,
  CreateNewsPage,
  EditNewsPage,
} from "./pages/dashboard";
import { ContactPage } from "./pages/contact";

export const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },

      {
        path: "/home",
        element: (
          <MainLayout hideNewsBar={false}>
            <HomePage />
          </MainLayout>
        ),
      },

      {
        path: "/news",
        element: (
          <MainLayout hideNewsBar={false}>
            <NewsPage />
          </MainLayout>
        ),
      },

      {
        path: "/contact",
        element: (
          <MainLayout hideNewsBar={true}>
            <ContactPage />
          </MainLayout>
        ),
      },

      {
        path: "/post/:id",
        element: (
          <MainLayout hideNewsBar={false}>
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
        path: "/dashboard",
        element: (
          <MainLayout hideNewsBar={true}>
            <DashboardPage />
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
        path: "/dashboard/news",
        element: (
          <MainLayout hideNewsBar={true}>
            <ViewNewsPage />
          </MainLayout>
        ),
      },

      {
        path: "/dashboard/news/create",
        element: (
          <MainLayout hideNewsBar={true}>
            <CreateNewsPage />
          </MainLayout>
        ),
      },

      {
        path: "/dashboard/news/edit/:id",
        element: (
          <MainLayout hideNewsBar={true}>
            <EditNewsPage />
          </MainLayout>
        ),
      },

      {
        path: "/dashboard/collections",
        element: (
          <MainLayout hideNewsBar={true}>
            <CollectionsPage />
          </MainLayout>
        ),
      },

      {
        path: "/dashboard/collections/create",
        element: (
          <MainLayout hideNewsBar={true}>
            <GalleryCreatePage />
          </MainLayout>
        ),
      },

      {
        path: "/dashboard/collections/edit/:id",
        element: (
          <MainLayout hideNewsBar={true}>
            <EditCollectionsPage />
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
    ],
  },
]);
