import {
    beforeAll,
    describe, test
} from '@jest/globals';
import Application from '../../src/Application';
import ApplicationTestLauncher from './ApplicationTestLauncher';

describe('application', () => {
    let application: Application;
    
    beforeAll(async () => {
        application = ApplicationTestLauncher.application;
        await application.start();
    });

    afterAll(async () => {
        await application.stop();
    });

    test('given a API we need to know the interface of our application', async () => {
        const response = await ApplicationTestLauncher
        .request.get('/openapi')
        .expect(200)
        .expect('Content-Type', /json/);

        expect(response.body).toEqual(await import("../../tsoa/routes/swagger.json"));
    });

    test('given a API client we need to know if server is alive', async () => {
        const response = await ApplicationTestLauncher
        .request.get('/hello-world')
        .expect(200)
        .expect('Content-Type', /json/);

        expect(response.body).toEqual({ msg: "Hello World"});
    });
    
});