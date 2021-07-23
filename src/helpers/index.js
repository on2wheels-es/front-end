export const calculateMiddleDate = (arrival, departure) => {
    const date1 = new Date(arrival);
    const date2 = new Date(departure);
    const middleDate = new Date(date2 - (date2-date1)/2);
    return middleDate;
}