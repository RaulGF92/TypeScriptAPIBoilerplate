import Mockito from 'ts-mockito';
import Application from '../../src/Application';
import HttpServer from '../../src/servers/HttpServer';

describe('Application', () => {
    test('Application should created with dependencies', () => {
        const mockHttpServer = Mockito.mock(HttpServer);
        const instance = new Application(Mockito.instance(mockHttpServer));
        expect(instance).not.toBeNull();
    });
    test('Application when start should launch all dependencies', () => {
        const mockHttpServer = Mockito.mock(HttpServer);
        Mockito.when(mockHttpServer.start()).thenResolve();

        const instance = new Application(Mockito.instance(mockHttpServer));
        expect(() => instance.start()).not.toThrow();
    });
    test('Application when start should throw error in case error in dependencies', async () => {
        const mockHttpServer = Mockito.mock(HttpServer);
        Mockito.when(mockHttpServer.start()).thenReject(new Error('UnExpected Erroneus 🪄🪄🪄🪄'));

        const instance = new Application(Mockito.instance(mockHttpServer));
        await expect(async () => { await instance.start()}).rejects.toEqual(new Error('UnExpected Erroneus 🪄🪄🪄🪄'));
    });
    test('Application when stop should stop all dependencies', () => {
        const mockHttpServer = Mockito.mock(HttpServer);
        Mockito.when(mockHttpServer.stop()).thenResolve();

        const instance = new Application(Mockito.instance(mockHttpServer));
        expect(() => instance.stop()).not.toThrow();
    });
    test('Application when start should throw error in case error in dependencies', async () => {
        const mockHttpServer = Mockito.mock(HttpServer);
        Mockito.when(mockHttpServer.stop()).thenReject(new Error('UnExpected Erroneus 🪄🪄🪄🪄'));

        const instance = new Application(Mockito.instance(mockHttpServer));
        await expect(async () => { await instance.stop()}).rejects.toEqual(new Error('UnExpected Erroneus 🪄🪄🪄🪄'));
    });
});