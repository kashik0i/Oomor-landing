import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { AboutPage } from './pages/About'
import { CareersPage } from './pages/Careers'
import { ContactPage } from './pages/Contact'
import { LegalPage } from './pages/Legal'
import { BlogPage } from './pages/Blog'
import { HelpPage } from './pages/Help'
import { TutorialsPage } from './pages/Tutorials'
import { CommunityPage } from './pages/Community'
import { FeaturesPage } from './pages/Features'
import { PricingPage } from './pages/Pricing'
import { IntegrationsPage } from './pages/Integrations'
import { UpdatesPage } from './pages/Updates'

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
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
