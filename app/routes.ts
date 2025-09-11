import { type RouteConfig, index , route} from "@react-router/dev/routes";

export default [
    index("routes/Home.tsx"),
    // route('home', 'routes/Home.tsx'),
    // route("routes/about.tsx", "about"),
] satisfies RouteConfig;
