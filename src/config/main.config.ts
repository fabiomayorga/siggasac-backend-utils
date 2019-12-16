import { Configuration } from './configuration.interface';

const version = 'v1';

export const MAIN: Configuration = {
    name: 'sigasac',
    version,
    description: 'Módulo Siga Sac',
    port: 3000,
    host: '127.0.0.1',
    apiBasePath: `sigasac/${version}`,
    subRoutes: {
        schools: 'schools',
        login: 'login',
        country: 'countries',
    }
};
