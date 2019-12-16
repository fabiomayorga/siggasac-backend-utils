/**
 * Funcíon para redondear un número.
 *
 * @param num número a ser redondeado
 * @param decimales cantidad de decimales al que se desea redondear el número, por default es igual a 4
 */
export const round = (num: any, decimals: number = 4) => {
    /** Signo del número ingresado */
    const sign = num >= 0 ? 1 : -1;

    num = num * sign;

    if (decimals === 0) {
        return sign * Math.round(num);
    }

    num = num.toString().split('e');

    num = Math.round(
        +(num[0] + 'e' + (num[1] ? +num[1] + decimals : decimals))
    );

    num = num.toString().split('e');

    return (
        sign * Number(num[0] + 'e' + (num[1] ? +num[1] - decimals : -decimals))
    );
};
