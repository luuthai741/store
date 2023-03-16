import { formatCurrency } from "react-native-format-currency";
import moment from "moment";

export const currencyFormatter = (amount) => {
    const [valueFormattedWithSymbol] =
        formatCurrency({ amount: Number(amount), code: 'VND' });
    return valueFormattedWithSymbol;
}
export const dateFormatter = (date) => {
    let newDate = moment("date", 'YYYY-MM-DD').format('MMM Do YY').locale('VI');
    console.log(newDate);
    return date;
}