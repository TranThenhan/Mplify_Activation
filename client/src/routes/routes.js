import routes from '~/config';
import { AuthLayout, MainLayout } from '~/layouts';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import RegisterRole from '~/pages/RegisterRole';
import ForgotPassword from '~/pages/ForgotPassword';
import ChangePassword from '~/pages/ChangePassword';
import ConfirmCode from '~/pages/ConfirmCode';

const publicRoutes = [
    { path: routes.home, component: Home, layout: MainLayout },
    { path: routes.login, component: Login, layout: AuthLayout },
    { path: routes.register, component: Register, layout: AuthLayout },
    { path: routes.registerRole, component: RegisterRole, layout: AuthLayout },
    { path: routes.forgotPassword, component: ForgotPassword, layout: AuthLayout },
    { path: routes.changePassword, component: ChangePassword, layout: AuthLayout },
    { path: routes.confirmCode, component: ConfirmCode, layout: AuthLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
