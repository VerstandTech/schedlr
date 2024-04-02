export class ScheduleConfiguration {
  constructor (
    workingDays: number[],
    workingHoursStart: string,
    workingHoursEnd: string,
    breakHoursStart: string,
    breakHoursEnd: string,
  )

  getWorkingDays (): number[]
  getWorkingHoursStart (): string
  getWorkingHoursEnd (): string
  getBreakHoursStart (): string
  getBreakHoursEnd (): string
}

export const WeekDays = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
}

export class Appointment {
  constructor (startTime: Date, duration: string)

  get date (): Date
  set date (value: Date): void
  get endTime (): Date
  get duration (): string
}

export class Schedule {
  constructor (config: ScheduleConfiguration)
  getAvailableTimeSlots (appointment: Appointment): string[]
  addAppointment (appointment: Appointment): void
}
