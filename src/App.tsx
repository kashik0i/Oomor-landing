import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Layout } from './components/Layout'

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const AboutPage = lazy(() => import('./pages/About').then(module => ({ default: module.AboutPage })))
const CareersPage = lazy(() => import('./pages/Careers').then(module => ({ default: module.CareersPage })))
const ContactPage = lazy(() => import('./pages/Contact').then(module => ({ default: module.ContactPage })))
const LegalPage = lazy(() => import('./pages/Legal').then(module => ({ default: module.LegalPage })))
const BlogPage = lazy(() => import('./pages/Blog').then(module => ({ default: module.BlogPage })))
const HelpPage = lazy(() => import('./pages/Help').then(module => ({ default: module.HelpPage })))
const TutorialsPage = lazy(() => import('./pages/Tutorials').then(module => ({ default: module.TutorialsPage })))
const CommunityPage = lazy(() => import('./pages/Community').then(module => ({ default: module.CommunityPage })))
const FeaturesPage = lazy(() => import('./pages/Features').then(module => ({ default: module.FeaturesPage })))
const PricingPage = lazy(() => import('./pages/Pricing').then(module => ({ default: module.PricingPage })))
const IntegrationsPage = lazy(() => import('./pages/Integrations').then(module => ({ default: module.IntegrationsPage })))
const UpdatesPage = lazy(() => import('./pages/Updates').then(module => ({ default: module.UpdatesPage })))
const DemoPage = lazy(() => import('./pages/Demo').then(module => ({ default: module.DemoPage })))
const AdminAuth = lazy(() => import('./pages/AdminAuth').then(module => ({ default: module.AdminAuth })))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').then(module => ({ default: module.AdminDashboard })))
const DashboardHome = lazy(() => import('./pages/admin/DashboardHome').then(module => ({ default: module.DashboardHome })))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/careers',
        element: <CareersPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/legal',
        element: <LegalPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/help',
        element: <HelpPage />,
      },
      {
        path: '/tutorials',
        element: <TutorialsPage />,
      },
      {
        path: '/community',
        element: <CommunityPage />,
      },
      {
        path: '/features',
        element: <FeaturesPage />,
      },
      {
        path: '/pricing',
        element: <PricingPage />,
      },
      {
        path: '/integrations',
        element: <IntegrationsPage />,
      },
      {
        path: '/updates',
        element: <UpdatesPage />,
      },
      {
        path: '/demo',
        element: <DemoPage />,
      },
      {
        path: '/admin/auth',
        element: <AdminAuth />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminDashboard />,
    children: [
      {
        path: '',
        element: <DashboardHome />,
      },
    ],
  },
])

export const App = () => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
  )
}
