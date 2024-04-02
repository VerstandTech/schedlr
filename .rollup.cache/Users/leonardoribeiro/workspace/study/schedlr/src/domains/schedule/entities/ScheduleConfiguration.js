var ScheduleConfiguration = /** @class */ (function () {
    function ScheduleConfiguration(workingDays, workingHoursStart, workingHoursEnd, breakHoursStart, breakHoursEnd) {
        this.workingDays = workingDays;
        this.workingHoursStart = workingHoursStart;
        this.workingHoursEnd = workingHoursEnd;
        this.breakHoursStart = breakHoursStart;
        this.breakHoursEnd = breakHoursEnd;
        if (workingDays.length === 0)
            throw new Error('At least one working day is required');
        if (workingDays.length > 7)
            throw new Error('Maximum working days is 7');
        if (workingDays.some(function (day) { return day < 0 || day > 6; }))
            throw new Error('Invalid day');
        this.validateHour(workingHoursStart);
        this.validateHour(workingHoursEnd);
        this.workingDays = workingDays;
    }
    ScheduleConfiguration.prototype.getWorkingDays = function () {
        return this.workingDays;
    };
    ScheduleConfiguration.prototype.getWorkingHoursStart = function () {
        return this.workingHoursStart;
    };
    ScheduleConfiguration.prototype.getWorkingHoursEnd = function () {
        return this.workingHoursEnd;
    };
    ScheduleConfiguration.prototype.getBreakHoursStart = function () {
        return this.breakHoursStart;
    };
    ScheduleConfiguration.prototype.getBreakHoursEnd = function () {
        return this.breakHoursEnd;
    };
    ScheduleConfiguration.prototype.validateHour = function (hour) {
        var _a = hour.split(':'), hours = _a[0], minutes = _a[1];
        if (parseInt(hours) < 0 || parseInt(hours) > 23)
            throw new Error('Invalid hour');
        if (parseInt(minutes) < 0 || parseInt(minutes) > 59)
            throw new Error('Invalid minutes');
    };
    return ScheduleConfiguration;
}());
export { ScheduleConfiguration };
//# sourceMappingURL=ScheduleConfiguration.js.map