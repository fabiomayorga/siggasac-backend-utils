import * as moment from "moment";
import 'moment/locale/es';

export class DatesHelper {
    static setLocalTime(date: Date | string) {
        const fecha = moment(date).utc(true).locale('es')

        return fecha.format('dddd DD [de] MMMM [de] YYYY, h:mm:ss a')
    }
}