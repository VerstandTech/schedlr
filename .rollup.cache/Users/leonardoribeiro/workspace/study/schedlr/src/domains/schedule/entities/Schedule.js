import { __spreadArray } from "tslib";
import dayjs from "@/lib/dayjs";
var Schedule = /** @class */ (function () {
    function Schedule(config) {
        this.appointments = new Map();
        this.config = config;
    }
    Schedule.prototype.getAvailableTimeSlots = function (appointment) {
        var currentDate = dayjs(appointment.date);
        var availableTimeSlots = [];
        if (!this.config.getWorkingDays().includes(currentDate.day())) {
            return [];
        }
        var currentTime = currentDate.set('hour', parseInt(this.config.getWorkingHoursStart().split(':')[0])).set('minute', parseInt(this.config.getWorkingHoursStart().split(':')[1]));
        var endTime = currentDate.set('hour', parseInt(this.config.getWorkingHoursEnd().split(':')[0])).set('minute', parseInt(this.config.getWorkingHoursEnd().split(':')[1]));
        var breakTime = currentDate.set('hour', parseInt(this.config.getBreakHoursStart().split(':')[0])).set('minute', parseInt(this.config.getBreakHoursStart().split(':')[1]));
        var endBreakTime = currentDate.set('hour', parseInt(this.config.getBreakHoursEnd().split(':')[0])).set('minute', parseInt(this.config.getBreakHoursEnd().split(':')[1]));
        var scheduleToday = this.appointments.get(currentDate.format('YYYY-MM-DD'));
        var duration = dayjs.duration({
            hours: Number(appointment.duration.split(':')[0]),
            minutes: Number(appointment.duration.split(':')[1])
        });
        while (currentTime.isBefore(endTime)) {
            if (currentTime.isBefore(breakTime) || currentTime.isSameOrAfter(endBreakTime)) {
                availableTimeSlots.push(currentTime);
            }
            currentTime = currentTime.add(duration);
        }
        return availableTimeSlots
            .filter(this.filterByBreakTime(availableTimeSlots, duration))
            .filter(this.filterByAppointments(availableTimeSlots, duration))
            .map(function (time) { return time.format('HH:mm'); });
    };
    Schedule.prototype.addAppointment = function (appointment) {
        if (appointment.endTime === undefined) {
            throw new Error('Appointment time is required');
        }
        this.appointments.set(dayjs(appointment.date).format('YYYY-MM-DD'), __spreadArray(__spreadArray([], (this.appointments.get(dayjs(appointment.date).format('YYYY-MM-DD')) || []), true), [
            appointment
        ], false));
    };
    Schedule.prototype.filterByAppointments = function (availableTimeSlots, duration) {
        var _this = this;
        return function (time) {
            var appointments = _this.appointments.get(time.format('YYYY-MM-DD')) || [];
            return !appointments.some(function (appointment) { return time.isBetween(dayjs(appointment.date), dayjs(appointment.endTime), null, '[)'); });
        };
    };
    Schedule.prototype.filterByBreakTime = function (availableTimeSlots, duration) {
        var _this = this;
        return function (time) {
            var breakTimeStart = time.set('hours', Number(_this.config.getBreakHoursStart().split(':')[0])).set('minutes', Number(_this.config.getBreakHoursStart().split(':')[1]));
            var endTimeStart = time.set('hours', Number(_this.config.getBreakHoursEnd().split(':')[0])).set('minutes', Number(_this.config.getBreakHoursEnd().split(':')[1]));
            var timeStart = time;
            var timeEnd = time.add(duration);
            return !timeStart.isBetween(breakTimeStart, endTimeStart, null, '[)') && !timeEnd.isBetween(breakTimeStart, endTimeStart, null, '(]');
        };
    };
    return Schedule;
}());
export { Schedule };
//# sourceMappingURL=Schedule.js.map