var Appointment = /** @class */ (function () {
    function Appointment(_startTime, _duration) {
        this._startTime = _startTime;
        this._duration = _duration;
        if (_duration === undefined || !(/\d{2}:\d{2}/g).test(_duration)) {
            throw new Error('Invalid duration format');
        }
        this._endTime = new Date(this._startTime.getTime() + (parseInt(_duration.split(':')[0]) * 60 + parseInt(_duration.split(':')[1])) * 60000);
        this._duration = _duration;
    }
    Object.defineProperty(Appointment.prototype, "date", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Appointment.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    return Appointment;
}());
export { Appointment };
//# sourceMappingURL=Appointment.js.map