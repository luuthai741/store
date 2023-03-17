import { formatCurrency } from "react-native-format-currency";
import moment from "moment";
import "moment/min/locales";

export const currencyFormatter = (amount) => {
    const [valueFormattedWithSymbol] =
        formatCurrency({ amount: Number(amount), code: 'VND' });
    return valueFormattedWithSymbol;
}
export const dateFormatter = (date) => {
    moment.locale('VI');
    let newDate = moment(date, 'YYYY-MM-DD').format('MMM Do YY');
    return newDate;
}