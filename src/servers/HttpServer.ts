import Runnable from "../shared/Runnable";
import Koa from "koa";
import KoaRouter from "@koa/router";
import koaLogger from "koa-logger";
import json from "koa-json";
import { IncomingMessage, Server, ServerResponse} from "http";
import { RegisterRoutes } from "../../routes/routes";
import logger from '../shared/Logger';

 const log = logger.child({layer: 'HttpServer'});

export default class HttpServer implements Runnable {

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
        const port = 3000;
        log.info(`[start] Starting Http Server in ${port}`);
        if(this.server) {
            log.warn(`[start] Previous server launched, trying stoped`);
            await this.stop();
        }
        this.server = this.koaApp.listen(port);
    }

    async stop(): Promise<void> {
        log.info(`[stop] Stoping Http Server`);
        const closeWithPromise = () => new Promise((resolve, reject) => {
            this.server?.close((err) => {
                if(err) {
                    log.warn(`[stop] Server stoped unsuccesfully`, err);
                    reject(err);
                } else {
                    log.info(`[stop] Server stoped succesfully`);
                    resolve(true);
                }
            });
        });

        await closeWithPromise();
        this.server = undefined;
    }
}