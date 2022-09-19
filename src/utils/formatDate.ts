import dayjs from 'dayjs'

export function formatDate(data: string, format = 'YYYY/MM/DD HH:mm:ss') {
  return dayjs.utc(data).format(format)
}
