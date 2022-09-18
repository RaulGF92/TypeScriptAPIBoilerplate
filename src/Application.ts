import { autoInjectable } from "tsyringe";
import HttpServer from "./servers/HttpServer";
import Runable from "./shared/Runable";

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