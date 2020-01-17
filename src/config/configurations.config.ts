import { Configuration } from './configuration.interface';

const version = 'v1';
const name = 'configurations';

/** Archivo de configuración para el módulo main */
export const CONFIGURATION: Configuration = {
    name,
    version,
    description: 'Módulo de Configuración - Siga Sac',
    port: 3002,
    host: '127.0.0.1',
    apiBasePath: `${name}/${version}`,
    subRoutes: {
        menus: 'menus',
        permissions: 'permissions',
        profiles: 'profiles',
    }
};
