import { type RouteConfig, index , route} from "@react-router/dev/routes";

export default [
    index("routes/Home.tsx"),
    route("produtos", "routes/Produtos.tsx", [
        route("controle-acesso", "routes/produtos/ControleAcesso.tsx"),
        route("relogio-ponto", "routes/produtos/RelogioPonto.tsx"),
        route("sistemas", "routes/produtos/Sistemas.tsx"),
    ]),

    route("contato", "routes/Contato.tsx"),
    route("sobre", "routes/Sobre.tsx"),
    route("suporte", "routes/Suporte.tsx"),
] satisfies RouteConfig;
