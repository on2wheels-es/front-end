import moment from 'moment'

export const calculateMiddleDate = (arrival, departure) => {
    const date1 = new Date(arrival);
    const date2 = new Date(departure);
    const middleDate = new Date(date2 - (date2-date1)/2);
    const dd = middleDate.getDate();
    const mm = middleDate.getMonth();
    const middleDateQueryFormat = `mm=${mm}&dd=${dd}`
    return middleDateQueryFormat;
}



export const giveFormatToBirthday = (day, month, year) => {
    return moment(new Date(`${year}-${month}-${day}`)).format('L');
}