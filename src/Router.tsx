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
  UpdateBanenrPage,
  ViewNewsPage,
  CreateNewsPage,
  EditNewsPage,
} from "./pages/dashboard";
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
        <ScrollToTop />
        <GalleryPage />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <MainLayout hideNewsBar={true}>
        <ScrollToTop />
        <DashboardPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard/users",
    element: (
      <MainLayout hideNewsBar={true}>
        <ScrollToTop />
        <UsersPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard/news",
    element: (
      <MainLayout hideNewsBar={true}>
        <ScrollToTop />
        <ViewNewsPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard/news/create",
    element: (
      <MainLayout hideNewsBar={true}>
        <ScrollToTop />
        <CreateNewsPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard/news/edit/:id",
    element: (
      <MainLayout hideNewsBar={true}>
        <ScrollToTop />
        <EditNewsPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard/collections",
    element: (
      <MainLayout hideNewsBar={true}>
        <ScrollToTop />
        <CollectionsPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard/collections/create",
    element: (
      <MainLayout hideNewsBar={true}>
        <ScrollToTop />
        <GalleryCreatePage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard/collections/edit/:id",
    element: (
      <MainLayout hideNewsBar={true}>
        <ScrollToTop />
        <EditCollectionsPage />
      </MainLayout>
    ),
  },

  {
    path: "/dashboard/banners/update",
    element: (
      <MainLayout hideNewsBar={true}>
        <ScrollToTop />
        <UpdateBanenrPage />
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
        <ScrollToTop />,
        <LibraryPage />
      </MainLayout>
    ),
  },

  {
    path: "/register",
    element: <LoginPage />,
  },
]);
