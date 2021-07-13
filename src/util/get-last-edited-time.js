import dayjs from "dayjs";

export const getLastEditedTime = () => {
    const raw = dayjs();
    const day = raw.format('MMM D, YYYY');
    const time = raw.format('h:mm A');
    return {
        raw,
        printed: `${day} at ${time}`
    };
}