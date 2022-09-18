import 'reflect-metadata';
import {container} from 'tsyringe';
import Application from './Application';
import logger from './shared/Logger';

const log = logger.child({layer: 'index'});

const bootstrap = async () => {
    log.info('[bootstrap] Taking application context');
    const app = container.resolve(Application);
    return app.start();
}

bootstrap()
    .catch(err => {
        log.error('[bootstrap] Unexpected error happend it', err);
        process.exit(-1);
    }); 