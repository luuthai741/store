import { formatCurrency } from "react-native-format-currency";
import moment from "moment";
import "moment/min/locales";
import { StarIcon as StarOutline } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

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
export const showRating = rating => {
    let result = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            result.push(<StarIcon key={i} color='orange' size={22} />);
        } else {
            result.push(<StarOutline key={i} color='orange' size={22} />);
        }
    }
    return result;
} 