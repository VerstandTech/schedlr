import { ScheduleConfiguration } from "@/domains/schedule/entities/ScheduleConfiguration";
import { Appointment } from "@/domains/schedule/entities/Appointment";
import dayjs from "@/lib/dayjs";
import plugin from "dayjs/plugin/utc";

export class Schedule {
  private config: ScheduleConfiguration
  private appointments: Map<string, Appointment[]> = new Map()

  constructor(config: ScheduleConfiguration) {
    this.config = config
  }
  getAvailableTimeSlots(appointment: Appointment) {
    const currentDate = dayjs(appointment.date)
    const availableTimeSlots: dayjs.Dayjs[] = []

    if (!this.config.getWorkingDays().includes(currentDate.day())) {
      return []
    }

    let currentTime = currentDate.set('hour', parseInt(this.config.getWorkingHoursStart().split(':')[0])).set('minute', parseInt(this.config.getWorkingHoursStart().split(':')[1]))
    const endTime = currentDate.set('hour', parseInt(this.config.getWorkingHoursEnd().split(':')[0])).set('minute', parseInt(this.config.getWorkingHoursEnd().split(':')[1]))

    const breakTime = currentDate.set('hour', parseInt(this.config.getBreakHoursStart().split(':')[0])).set('minute', parseInt(this.config.getBreakHoursStart().split(':')[1]))
    const endBreakTime = currentDate.set('hour', parseInt(this.config.getBreakHoursEnd().split(':')[0])).set('minute', parseInt(this.config.getBreakHoursEnd().split(':')[1]))

    const scheduleToday = this.appointments.get(currentDate.format('YYYY-MM-DD'))
    const duration = dayjs.duration({
      hours: Number(appointment.duration.split(':')[0]),
      minutes: Number(appointment.duration.split(':')[1])
    })

    while (currentTime.isBefore(endTime)) {
      if (currentTime.isBefore(breakTime) || currentTime.isSameOrAfter(endBreakTime)) {
        availableTimeSlots.push(currentTime)
      }
      currentTime = currentTime.add(duration)
    }

    return availableTimeSlots
      .filter(this.filterByBreakTime(availableTimeSlots, duration))
      .filter(this.filterByAppointments(availableTimeSlots, duration))
      .map(time => time.format('HH:mm'))
  }

  addAppointment(appointment: Appointment) {
    if (appointment.endTime === undefined) {
      throw new Error('Appointment time is required')
    }

    this.appointments.set(dayjs(appointment.date).format('YYYY-MM-DD'), [
      ...(this.appointments.get(dayjs(appointment.date).format('YYYY-MM-DD')) || []),
      appointment
    ])
  }

  private filterByAppointments(availableTimeSlots: dayjs.Dayjs[], duration: plugin.Duration) {
    return (time: dayjs.Dayjs) => {
      const appointments = this.appointments.get(time.format('YYYY-MM-DD')) || []
      return !appointments.some(appointment => time.isBetween(dayjs(appointment.date), dayjs(appointment.endTime), null, '[)'))
    }
  }

  private filterByBreakTime(availableTimeSlots: dayjs.Dayjs[], duration: plugin.Duration) {
    return (time: dayjs.Dayjs) => {
      const breakTimeStart = time.set('hours', Number(this.config.getBreakHoursStart().split(':')[0])).set('minutes', Number(this.config.getBreakHoursStart().split(':')[1]))
      const endTimeStart = time.set('hours', Number(this.config.getBreakHoursEnd().split(':')[0])).set('minutes', Number(this.config.getBreakHoursEnd().split(':')[1]))

      const timeStart = time
      const timeEnd = time.add(duration)

      return !timeStart.isBetween(breakTimeStart, endTimeStart, null, '[)') && !timeEnd.isBetween(breakTimeStart, endTimeStart, null, '(]')
    }
  }
}
