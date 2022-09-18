import Runable from "../shared/Runable";
import Koa from "koa";
import KoaRouter from "@koa/router";
import koaLogger from "koa-logger";
import json from "koa-json";
import { IncomingMessage, Server, ServerResponse} from "http";
import { RegisterRoutes } from "../../routes/routes";
import logger from '../shared/Logger';

export default class HttpServer implements Runable {

    private koaApp = new Koa();
    server: Server<typeof IncomingMessage, typeof ServerResponse> | undefined;

    constructor() {
        // Middlewares
        this.koaApp.use(json());
        this.koaApp.use(koaLogger({
            transporter: (str, args) => {
                const log = logger.child({class: 'Trazing'});
                log.trace(str, args);
            }
        }));

        const router = new KoaRouter();
        RegisterRoutes(router);
        this.koaApp.use(router.routes()).use(router.allowedMethods());
    }

    async start(): Promise<void> {
        if(this.server) {
            await this.stop();
        }
        this.server = this.koaApp.listen(3000);
    }

    async stop(): Promise<void> {
        const closeWithPromise = () => new Promise((resolve, reject) => {
            this.server?.close((err) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });

        await closeWithPromise();
        this.server = undefined;
    }
}