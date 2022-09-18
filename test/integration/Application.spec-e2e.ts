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

    test('given a API client we need to know if server is alive', async () => {
        await ApplicationTestLauncher
        .request.get('/hello-world')
        .expect(200)
        .expect('Content-Type', /json/);
    });
    
});