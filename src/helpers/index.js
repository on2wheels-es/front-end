import moment from 'moment'
import { ccaaOptions } from '../data/data'
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
import girlAvatar from '../images/girl_cyclist.png'
import boyAvatar from '../images/guy_cyclist.png'


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

export const invalidDay = (day) => {
    if (day <= 0 || day > 31) {
       return true
    } else {
        return false
    }
}

export const invalidMoth = (month) => {
    if (month <= 0 || month > 12 ) {
        return true
    } else {
        return false
    }
}


export const invalidYear = (year) => {
    const yearToString = year.toString()
    const currentYear = new Date().getFullYear();

    if (year <= 0 || year > currentYear || yearToString.length !== 4) {
        return true
    } else {
        return false
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

export const difficulty = (value) => {
    if (value <= 1/3*100) {
        return 'Fácil'
    } if ( value > 2/3*100) {
        return 'Difícil'
    } else {
        return 'Media'
    }
}

export const avatar = (gender) => {
    if (gender === 'Mujer') {
        return girlAvatar
    } else {
        return boyAvatar
    }
}

export const removeDotFromString = (string) => {
    const newString = string.split('.').join("");
    return newString
}

export const getNameFromEmail = (email) => {
    return email.split("@")[0];
}