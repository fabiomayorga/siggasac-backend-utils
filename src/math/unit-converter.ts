export class UnitConverter {
    value: number;
    type: number;

    /**
     *
     * @param {number} value
     * @param {number} type
     */
    constructor(value: number, type: number) {
        this.value = value;
        this.type = type;
    }

    tonsToWatts() {
        return this.value * 3516.85;
    }

    btuToWatts() {
        return this.value * 0.29307107;
    }

    hpToWatts() {
        return this.value * 745.7;
    }

    getConversion() {
        let watts = 0;
        switch (this.type) {
            case 1:
                watts = this.tonsToWatts();
                break;
            case 2:
                watts = this.btuToWatts();
                break;
            case 3:
                watts = this.hpToWatts();
                break;
            default:
                watts = this.value;
                break;
        }

        return watts;
    }
}
