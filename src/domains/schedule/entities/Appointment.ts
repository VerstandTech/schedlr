export class Appointment {

  private _endTime: Date;
  constructor(
    private _startTime: Date,
    private _duration: string,
  ) {
    if (_duration === undefined || !(/\d{2}:\d{2}/g).test(_duration)) {
      throw new Error('Invalid duration format')
    }
    this._endTime = new Date(this._startTime.getTime() + (parseInt(_duration.split(':')[0]) * 60 + parseInt(_duration.split(':')[1])) * 60000)
    this._duration = _duration;
  }

  get date(): Date {
    return this._startTime;
  }

  set date(value: Date) {
    this._startTime = value;
  }

  get endTime(): Date {
    return this._endTime;
  }

  get duration(): string {
    return this._duration;
  }
}
