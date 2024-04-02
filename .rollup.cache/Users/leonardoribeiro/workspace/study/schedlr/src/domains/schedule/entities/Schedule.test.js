import { expect, test } from "vitest";
import { Schedule } from "@/domains/schedule/entities/Schedule";
import { ScheduleConfiguration } from "@/domains/schedule/entities/ScheduleConfiguration";
import { WeekDays } from "@/domains/schedule/entities/WeekDays";
import { Appointment } from "@/domains/schedule/entities/Appointment";
test("Schedule", function () {
    var config = new ScheduleConfiguration([
        WeekDays.MONDAY,
        WeekDays.TUESDAY,
        WeekDays.WEDNESDAY,
        WeekDays.THURSDAY,
        WeekDays.FRIDAY,
    ], '08:00', '18:00', '12:00', '14:00');
    var scheduler = new Schedule(config);
    var appointment0 = new Appointment(new Date('2024-03-24T08:00'), '02:00');
    var availableTime0 = scheduler.getAvailableTimeSlots(appointment0);
    expect(availableTime0).toEqual([]);
    var appointment = new Appointment(new Date('2024-03-25T08:00'), '02:00');
    var availableTime = scheduler.getAvailableTimeSlots(appointment);
    console.log(availableTime);
    expect(availableTime).toEqual(['08:00', '10:00', '14:00', '16:00']);
    var appointment2 = new Appointment(new Date('2024-03-25T08:00'), '01:00');
    scheduler.addAppointment(appointment2);
    var availableTime2 = scheduler.getAvailableTimeSlots(appointment2);
    console.log(availableTime2);
    expect(availableTime2).toEqual(['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']);
    var appointment3 = new Appointment(new Date('2024-03-25T08:00'), '03:00');
    scheduler.addAppointment(appointment3);
    var availableTime3 = scheduler.getAvailableTimeSlots(appointment3);
    console.log(availableTime3);
    expect(availableTime3).toEqual(['14:00', '17:00']);
    var appointment4 = new Appointment(new Date('2024-03-25T17:00'), '01:00');
    scheduler.addAppointment(appointment4);
    var availableTime4 = scheduler.getAvailableTimeSlots(appointment4);
    console.log(availableTime4);
    expect(availableTime4).toEqual(['11:00', '14:00', '15:00', '16:00']);
    var appointment5 = new Appointment(new Date('2024-03-25T11:00'), '01:00');
    scheduler.addAppointment(appointment5);
    var availableTime5 = scheduler.getAvailableTimeSlots(appointment5);
    console.log(availableTime5);
    expect(availableTime5).toEqual(['14:00', '15:00', '16:00']);
    var appointment6 = new Appointment(new Date('2024-03-25T14:00'), '02:00');
    scheduler.addAppointment(appointment6);
    var availableTime6 = scheduler.getAvailableTimeSlots(appointment6);
    console.log(availableTime6);
    expect(availableTime6).toEqual(['16:00']);
});
//# sourceMappingURL=Schedule.test.js.map