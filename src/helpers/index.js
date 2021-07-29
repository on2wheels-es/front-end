import moment from 'moment'
import { ccaaOptions } from '../data/data'

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

export const giveFormatToBirthday = (day, month, year) => {
    return moment(new Date(`${year}-${month}-${day}`)).format('L');
}