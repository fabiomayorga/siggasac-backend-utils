import { Configuration } from './configuration.interface';

const version = 'v1';
const name = 'sigasac';

/** Archivo de configuración para el módulo main */
export const MAIN: Configuration = {
    name,
    version,
    description: 'Módulo Siga Sac',
    port: 3000,
    host: '127.0.0.1',
    apiBasePath: `${name}/${version}`,
    subRoutes: {
        accountsTypes: 'accounts-types',
        banks: 'banks',
        budgets: 'budgets',
        budgetAccounts: 'budget-accounts',
        campus: 'campus',
        countries: 'countries',
        login: 'login',
        natureDocuments: 'nature-documents',
        typesPeople: 'type-persons',
        projects: 'projects',
        regimes: 'regimes',
        revenues: 'revenues',
        revenuesTypes: 'revenues-types',
        schools: 'schools',
        schoolBankAccounts: 'school-bank-accounts',
        singleAccountPlan: 'single-account-plan',
        thirdParties: 'third-parties',
        thirdPartyAccounts: 'third-party-accounts',
        thirdPartyTypes: 'third-party-types',
        typesAdministratorDocuments: 'types-administrator-documents',
        typesSchoolDocuments: 'types-school-documents',
        vouchers: 'vouchers'
    }
};
