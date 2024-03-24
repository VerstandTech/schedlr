## Getting started

`Schedular` is a simple scheduling library for javascript / typescript. It allows you to create schedules programmatically and extend them with your application logic.

### Installation

```bash
npm install schedular
```

### Usage

```typescript
import { Schedule, ScheduleConfiguration, WeekDays, Appointment } from 'schedular';

const config = new ScheduleConfiguration(
  [
    WeekDays.MONDAY,
    WeekDays.TUESDAY,
    WeekDays.WEDNESDAY,
    WeekDays.THURSDAY,
    WeekDays.FRIDAY,
  ],
  '08:00',
  '18:00',
  '12:00',
  '14:00'
)
const scheduler = new Schedule(config)

const appointment0 = new Appointment(new Date('2024-03-24T08:00'), '02:00')
const availableTime0 = scheduler.getAvailableTimeSlots(appointment0)
console.log(availableTime0) // on weekends should return []

const appointment = new Appointment(new Date('2024-03-25T08:00'), '02:00')
const availableTime = scheduler.getAvailableTimeSlots(appointment)
console.log(availableTime) // should return ['08:00', '10:00', '14:00', '16:00']
```
