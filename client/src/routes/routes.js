import routes from '~/config';
import { AuthLayout, MainLayout } from '~/layouts';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import RegisterRole from '~/pages/RegisterRole';
import ForgotPassword from '~/pages/ForgotPassword';
import ChangePassword from '~/pages/ChangePassword';
import ConfirmCode from '~/pages/ConfirmCode';
import CampaignList from '~/pages/CampaignList';
import CreateCampaign from '~/pages/CreateCampaign';
import Account from '~/pages/Account';
import ManageBooth from '~/pages/ManageBooth';
import CreateBooth from '~/pages/CreateBooth';
import BoothList from '~/pages/Supervisor/BoothList';

const publicRoutes = [
    { path: routes.home, component: Home, layout: MainLayout },
    { path: routes.login, component: Login, layout: AuthLayout },
    { path: routes.register, component: Register, layout: AuthLayout },
    { path: routes.registerRole, component: RegisterRole, layout: AuthLayout },
    { path: routes.forgotPassword, component: ForgotPassword, layout: AuthLayout },
    { path: routes.changePassword, component: ChangePassword, layout: AuthLayout },
    { path: routes.confirmCode, component: ConfirmCode, layout: AuthLayout },
    { path: routes.campaignList, component: CampaignList, layout: MainLayout },
    { path: routes.createCampaign, component: CreateCampaign, layout: MainLayout },
    { path: routes.account, component: Account, layout: MainLayout },
    { path: routes.manageBooth, component: ManageBooth, layout: MainLayout },
    { path: routes.createBooth, component: CreateBooth, layout: MainLayout },
    { path: routes.createBooth, component: CreateBooth, layout: MainLayout },

    { path: routes.supervisor.BoothList, component: BoothList, layout: MainLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
