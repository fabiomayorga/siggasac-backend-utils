import { Configuration } from './configuration.interface';

const version = 'v1';
const name = 'users';

/** Archivo de configuración para el módulo users */
export const USERS: Configuration = {
    name,
    version,
    description: 'Módulo de manejo de usuarios - Siga Sac',
    port: 3001,
    host: '127.0.0.1',
    apiBasePath: `${name}/${version}`,
    subRoutes: {
        main: 'main',
        passwords: 'passwords'
    }
};
