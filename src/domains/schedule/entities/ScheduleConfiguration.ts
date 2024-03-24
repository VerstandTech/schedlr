export class ScheduleConfiguration {
  constructor(
    private workingDays: number[],
    private workingHoursStart: string,
    private workingHoursEnd: string,
    private breakHoursStart: string,
    private breakHoursEnd: string,
    ) {
      if (workingDays.length === 0) throw new Error('At least one working day is required')
      if (workingDays.length > 7) throw new Error('Maximum working days is 7')
      if (workingDays.some(day => day < 0 || day > 6)) throw new Error('Invalid day')

      this.validateHour(workingHoursStart)
      this.validateHour(workingHoursEnd)

      this.workingDays = workingDays
  }

  getWorkingDays() {
    return this.workingDays
  }

  getWorkingHoursStart() {
    return this.workingHoursStart
  }

  getWorkingHoursEnd() {
    return this.workingHoursEnd
  }

  getBreakHoursStart() {
    return this.breakHoursStart
  }

  getBreakHoursEnd() {
    return this.breakHoursEnd
  }

  private validateHour(hour: string) {
    const [hours, minutes] = hour.split(':')
    if (parseInt(hours) < 0 || parseInt(hours) > 23) throw new Error('Invalid hour')
    if (parseInt(minutes) < 0 || parseInt(minutes) > 59) throw new Error('Invalid minutes')
  }
}
