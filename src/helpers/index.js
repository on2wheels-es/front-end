import moment from 'moment'
import { ccaaOptions } from '../data/data'
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

export const calculateMiddleDate = (arrival, departure) => {
    const date1 = new Date(arrival);
    const date2 = new Date(departure);
    const middleDate = new Date(date2 - (date2-date1)/2);
    const dd = middleDate.getDate();
    const mm = middleDate.getMonth();
    const middleDateQueryFormat = `mm=${mm}&dd=${dd}`
    return middleDateQueryFormat;
}

export const createQueryStrings = (selectedCCAA) => {
    return selectedCCAA.map(ccaa => ccaa.value).join('&');
}

export const getCCAAIds = (selectedCCAA) => {
    let ccaaIds;
    if (selectedCCAA.some(el => el.value === 'España')) {
        // We filter out 'Spain' as there is no such value for the API
        // Instead we get all CCAA ids to run this search
        const filteredCCAA = ccaaOptions.filter(ccaa => ccaa.id > 0);
        ccaaIds = filteredCCAA.map(location => location.id);
    } else {
      ccaaIds = selectedCCAA.map(location => location.id);
    }
    return ccaaIds
}

export const checkDayValues = (day) => {
    const dayToString = day.toString()

    if (dayToString.lenght > 2 || day > 31 ) {
        return  NotificationManager.error('Introduce un día válido', 'Día incorrecto', 800);
    }
}

export const checkMonthValues = (month) => {
    const monthToString = month.toString()

    if (monthToString.lenght > 2 || month > 12 ) {
        return  NotificationManager.error('Introduce un mes válido', 'Mes incorrecto ', 800);
    }
}


export const checkYearValues = (year) => {
    const yearToString = year.toString()
    const currentYear = new Date().getFullYear();

    if (yearToString.lenght > 4 || year > currentYear ) {
        return  NotificationManager.error('Introduce un año válido', 'Año incorrecto', 800);
    }
}

export const giveFormatToBirthday = (day, month, year) => {

    return moment(new Date(`${year}-${month}-${day}`)).format('L');
}

export const createErrorNotification = (type) => {
    switch (type) {
        case 409:
            NotificationManager.warning('Por favor, accede a tu cuenta', 'Este email ya esta registrado', 800);
            break;
        case 422:
            NotificationManager.warning('Email o contraseña vacíos', 'Rellena todos los campos', 800);
            break;
        case 404:
            NotificationManager.error('Si no tienes cuenta registrate', 'Email o contraseña no validos', 800);
             break;
       case (type.toString().charAt(0) === '5'):
            NotificationManager.error('Si no tienes cuenta registrate', 'Email o contraseña no validos', 800);
            break;
        default:
            NotificationManager.error('Intentalo más tarde', `Ha habido un error ${type}`, 800);
            break;

  }
}

export const formatNumber = (num) => {
    return num.toLocaleString();
}