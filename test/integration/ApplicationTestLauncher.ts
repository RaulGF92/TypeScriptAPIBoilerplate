import Application from "../../src/Application";
import {container} from 'tsyringe';
import HttpServer from "../../src/servers/HttpServer";
import request from 'supertest';

export default class ApplicationTestLauncher {
    
    /**
     * Get the application instance without start
     */
    static get application() {
        return container.resolve(Application);
    }

    /**
     * Return a Supertest instance with the actual instance of application
     * 
     * {@link https://www.npmjs.com/package/supertest}
     * 
     */
    static get request() {
        const httpServer: HttpServer = <HttpServer> ApplicationTestLauncher.application
        .servers['httpServer'];
        return request.agent(httpServer.server);
    }
}