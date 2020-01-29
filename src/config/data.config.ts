import { Configuration } from './configuration.interface';

const version = 'v1';
const name = 'data';

/** Archivo de configuración para el módulo data */
export const DATA: Configuration = {
    name,
    version,
    description: 'Módulo de Datos - Siga Sac',
    port: 3003,
    host: '127.0.0.1',
    apiBasePath: `${name}/${version}`,
    subRoutes: {
        months: 'months',
        states: 'states'
    }
};