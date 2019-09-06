export const hostname = "https://rts.a6raywa1cher.com/reschedule-tsu-spring"

const getAbsoluteUrl = (route: string) => `${hostname}/${route}`

export default {
  faculties: getAbsoluteUrl('faculties')
}
