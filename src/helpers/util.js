import dayjs from 'dayjs'
export function getDiffFecha(fecha,diff){
    const date1 =    dayjs()

    return date1.diff(fecha,diff)
}

export function getFormatDate(fecha,format ='hh:m A'){

    return dayjs(fecha).format(format)
}