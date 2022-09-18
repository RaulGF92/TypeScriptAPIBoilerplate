import { autoInjectable } from "tsyringe";
import HttpServer from "./servers/HttpServer";
import logger from "./shared/Logger";
import Runnable from "./shared/Runnable";

const log = logger.child({layer: 'Application'});

@autoInjectable()
export default class Application implements Runnable {
    servers: Record<string, Runnable>;

    constructor(
        httpServer: HttpServer
    ) {
        this.servers = {
            'httpServer': httpServer
        }
    }

    async start(): Promise<void> {
        log.info(`[stop] Starting servers ${Object.keys(this.servers)}`);
        const promises = Object.values(this.servers)
        .map(s => s.start());
        await Promise.all(promises);
    }

    async stop(): Promise<void> {
        const promises = Object.values(this.servers)
        .map(s => s.stop());
        await Promise.all(promises);
    }
}