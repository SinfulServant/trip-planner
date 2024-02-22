import { IDay } from "./day"

export interface ITripData {
    city: string,
    startDate: string,
    endDate: string,
    img: string,
    days: IDay[]
}
