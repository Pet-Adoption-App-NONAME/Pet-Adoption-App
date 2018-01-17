import Pages from 'containers/Pages/Pages.jsx';
import Dash from 'containers/Dash/Dash.jsx';

var appRoutes = [
    { path: "/", name: "Pages", component: Pages },
    { path: "/register-page", name: "Pages", component: Pages },
    { path: "/lock-screen-page", name: "Pages", component: Pages },
    { path: "/Dashboard", name: "Home", component: Dash }
];

export default appRoutes;