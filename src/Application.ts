import { autoInjectable } from "tsyringe";
import HttpServer from "./servers/HttpServer";
import logger from "./shared/Logger";
import Runable from "./shared/Runable";

const log = logger.child({layer: 'Application'});

@autoInjectable()
export default class Application implements Runable {
    servers: Record<string, Runable>;

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
        await Promise.allSettled(promises);
    }

    async stop(): Promise<void> {
        const promises = Object.values(this.servers)
        .map(s => s.stop());
        await Promise.allSettled(promises);
    }
}