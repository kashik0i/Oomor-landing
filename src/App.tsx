import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import {Layout} from './components/Layout'
import {AuthProvider} from './context/AuthContext';
import {ProtectedRoute} from './components/ProtectedRoutes';
import {PlaceholderPage} from './components/PlaceholderPage';

const Home = lazy(() => import('./pages/Home').then(module => ({default: module.Home})))
const AboutPage = lazy(() => import('./pages/About').then(module => ({default: module.AboutPage})))
const CareersPage = lazy(() => import('./pages/Careers').then(module => ({default: module.CareersPage})))
const ContactPage = lazy(() => import('./pages/Contact').then(module => ({default: module.ContactPage})))
const LegalPage = lazy(() => import('./pages/Legal').then(module => ({default: module.LegalPage})))
const BlogPage = lazy(() => import('./pages/Blog').then(module => ({default: module.BlogPage})))
const HelpPage = lazy(() => import('./pages/Help').then(module => ({default: module.HelpPage})))
const TutorialsPage = lazy(() => import('./pages/Tutorials').then(module => ({default: module.TutorialsPage})))
const CommunityPage = lazy(() => import('./pages/Community').then(module => ({default: module.CommunityPage})))
const FeaturesPage = lazy(() => import('./pages/Features').then(module => ({default: module.FeaturesPage})))
const PricingPage = lazy(() => import('./pages/Pricing').then(module => ({default: module.PricingPage})))
const IntegrationsPage = lazy(() => import('./pages/Integrations').then(module => ({default: module.IntegrationsPage})))
const UpdatesPage = lazy(() => import('./pages/Updates').then(module => ({default: module.UpdatesPage})))
const DemoPage = lazy(() => import('./pages/Demo').then(module => ({default: module.DemoPage})))
const AdminAuth = lazy(() => import('./pages/AdminAuth').then(module => ({default: module.AdminAuth})))
const DashboardHome = lazy(() => import('./pages/admin/DashboardHome').then(module => ({default: module.DashboardHome})))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').then(module => ({default: module.AdminDashboard})))
const PageNotFound = lazy(() => import('./pages/PageNotFound').then(module => ({default: module.PageNotFound})))
const SubscriptionsManagement = lazy(() => import('./pages/admin/SubscriptionsManagement').then(module => ({default: module.SubscriptionsManagement})))
const TransactionMonitoring = lazy(() => import('./pages/admin/TransactionMonitoring').then(module => ({default: module.TransactionMonitoring})))
const RevenueSharing = lazy(() => import('./pages/admin/RevenueSharing').then(module => ({default: module.RevenueSharing})))
const AdvertisingPlatform = lazy(() => import('./pages/admin/AdvertisingPlatform').then(module => ({default: module.AdvertisingPlatform})))
const AddOnServices = lazy(() => import('./pages/admin/AddOnServices').then(module => ({default: module.AddOnServices})))

export const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: '/about',
                    element: <AboutPage/>,
                },
                {
                    path: '/careers',
                    element: <CareersPage/>,
                },
                {
                    path: '/contact',
                    element: <ContactPage/>,
                },
                {
                    path: '/legal',
                    element: <LegalPage/>,
                },
                {
                    path: '/blog',
                    element: <BlogPage/>,
                },
                {
                    path: '/help',
                    element: <HelpPage/>,
                },
                {
                    path: '/tutorials',
                    element: <TutorialsPage/>,
                },
                {
                    path: '/community',
                    element: <CommunityPage/>,
                },
                {
                    path: '/features',
                    element: <FeaturesPage/>,
                },
                {
                    path: '/pricing',
                    element: <PricingPage/>,
                },
                {
                    path: '/integrations',
                    element: <IntegrationsPage/>,
                },
                {
                    path: '/updates',
                    element: <UpdatesPage/>,
                },
                {
                    path: '/demo',
                    element: <DemoPage/>,
                },
                {
                    path: '/admin/auth',
                    element: <AdminAuth/>,
                },
            ],
        },
        {
            path: '/admin',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/admin',
                    element: <AdminDashboard/>,
                    children: [
                        {
                            path: 'dashboard',
                            element: <DashboardHome/>,
                        },
                        {
                            path: 'mini-apps',
                            element: <PlaceholderPage title="Mini Apps Management" />,
                        },
                        {
                            path: 'mini-apps/stores',
                            element: <PlaceholderPage title="Storefronts Management" />,
                        },
                        {
                            path: 'mini-apps/services',
                            element: <PlaceholderPage title="Services Management" />,
                        },
                        {
                            path: 'mini-apps/approvals',
                            element: <PlaceholderPage title="Mini App Approvals" />,
                        },
                        {
                            path: 'marketplace',
                            element: <AdvertisingPlatform />,
                        },
                        {
                            path: 'vendor-hub',
                            element: <RevenueSharing />,
                        },
                        {
                            path: 'users',
                            element: <PlaceholderPage title="User Management" />,
                        },
                        {
                            path: 'products',
                            element: <PlaceholderPage title="Product Management" />,
                        },
                        {
                            path: 'services',
                            element: <AddOnServices />,
                        },
                        {
                            path: 'orders',
                            element: <PlaceholderPage title="Order Management" />,
                        },
                        {
                            path: 'payments',
                            element: <TransactionMonitoring />,
                        },
                        {
                            path: 'shipping',
                            element: <PlaceholderPage title="Shipping Management" />,
                        },
                        {
                            path: 'subscriptions',
                            element: <SubscriptionsManagement />,
                        },
                        {
                            path: 'analytics',
                            element: <PlaceholderPage title="Analytics Dashboard" />,
                        },
                        {
                            path: 'settings',
                            element: <PlaceholderPage title="Admin Settings" />,
                        },
                        {
                            path: 'support',
                            element: <PlaceholderPage title="Support Center" />,
                        },
                        {
                            path: 'feedback',
                            element: <PlaceholderPage title="User Feedback" />,
                        },
                    ],
                },
            ],
        },
        {
            path:'*',
            element: <PageNotFound/>,
        }
    ]);

    return (
        <AuthProvider>
            <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
                </div>
            }>
                <RouterProvider router={router}/>
            </Suspense>
        </AuthProvider>
    );
}
