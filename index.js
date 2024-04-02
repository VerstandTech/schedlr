(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.schedlr = {}));
})(this, (function (exports) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    var dayjs_min = {exports: {}};

    (function (module, exports) {
    	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
    } (dayjs_min));

    var dayjs_minExports = dayjs_min.exports;
    var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

    var isBetween$1 = {exports: {}};

    (function (module, exports) {
    	!function(e,i){module.exports=i();}(commonjsGlobal,(function(){return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return (r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))};}})); 
    } (isBetween$1));

    var isBetweenExports = isBetween$1.exports;
    var isBetween = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);

    var isSameOrAfter$1 = {exports: {}};

    (function (module, exports) {
    	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)};}})); 
    } (isSameOrAfter$1));

    var isSameOrAfterExports = isSameOrAfter$1.exports;
    var isSameOrAfter = /*@__PURE__*/getDefaultExportFromCjs(isSameOrAfterExports);

    var isSameOrBefore$1 = {exports: {}};

    (function (module, exports) {
    	!function(e,i){module.exports=i();}(commonjsGlobal,(function(){return function(e,i){i.prototype.isSameOrBefore=function(e,i){return this.isSame(e,i)||this.isBefore(e,i)};}})); 
    } (isSameOrBefore$1));

    var isSameOrBeforeExports = isSameOrBefore$1.exports;
    var isSameOrBefore = /*@__PURE__*/getDefaultExportFromCjs(isSameOrBeforeExports);

    var duration$1 = {exports: {}};

    (function (module, exports) {
    	!function(t,s){module.exports=s();}(commonjsGlobal,(function(){var t,s,n=1e3,i=6e4,e=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,a=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,h={years:u,months:d,days:r,hours:e,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof g},f=function(t,s,n){return new g(t,n,s.$l)},m=function(t){return s.p(t)+"s"},l=function(t){return t<0},$=function(t){return l(t)?Math.ceil(t):Math.floor(t)},y=function(t){return Math.abs(t)},v=function(t,s){return t?l(t)?{negative:!0,format:""+y(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}},g=function(){function l(t,s,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),s)return f(t*h[m(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(s){i.$d[m(s)]=t[s];})),this.calMilliseconds(),this;if("string"==typeof t){var e=t.match(a);if(e){var r=e.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var y=l.prototype;return y.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,n){return s+(t.$d[n]||0)*h[n]}),0);},y.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=$(t/u),t%=u,this.$d.months=$(t/d),t%=d,this.$d.days=$(t/r),t%=r,this.$d.hours=$(t/e),t%=e,this.$d.minutes=$(t/i),t%=i,this.$d.seconds=$(t/n),t%=n,this.$d.milliseconds=t;},y.toISOString=function(){var t=v(this.$d.years,"Y"),s=v(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=v(n,"D"),e=v(this.$d.hours,"H"),r=v(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var u=v(o,"S"),d=t.negative||s.negative||i.negative||e.negative||r.negative||u.negative,a=e.format||r.format||u.format?"T":"",h=(d?"-":"")+"P"+t.format+s.format+i.format+a+e.format+r.format+u.format;return "P"===h||"-P"===h?"P0D":h},y.toJSON=function(){return this.toISOString()},y.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,s){return s||String(i[t])}))},y.as=function(t){return this.$ms/h[m(t)]},y.get=function(t){var s=this.$ms,n=m(t);return "milliseconds"===n?s%=1e3:s="weeks"===n?$(s/h[n]):this.$d[n],s||0},y.add=function(t,s,n){var i;return i=s?t*h[m(s)]:c(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},y.subtract=function(t,s){return this.add(t,s,!0)},y.locale=function(t){var s=this.clone();return s.$l=t,s},y.clone=function(){return f(this.$ms,this)},y.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},y.valueOf=function(){return this.asMilliseconds()},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},l}(),p=function(t,s,n){return t.add(s.years()*n,"y").add(s.months()*n,"M").add(s.days()*n,"d").add(s.hours()*n,"h").add(s.minutes()*n,"m").add(s.seconds()*n,"s").add(s.milliseconds()*n,"ms")};return function(n,i,e){t=e,s=e().$utils(),e.duration=function(t,s){var n=e.locale();return f(t,{$l:n},s)},e.isDuration=c;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,s){return c(t)?p(this,t,1):r.bind(this)(t,s)},i.prototype.subtract=function(t,s){return c(t)?p(this,t,-1):o.bind(this)(t,s)};}})); 
    } (duration$1));

    var durationExports = duration$1.exports;
    var duration = /*@__PURE__*/getDefaultExportFromCjs(durationExports);

    dayjs.extend(isBetween);
    dayjs.extend(isSameOrAfter);
    dayjs.extend(isSameOrBefore);
    dayjs.extend(duration);

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
            this.appointments.get(currentDate.format('YYYY-MM-DD'));
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

    var WeekDays = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
    };

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

    exports.Appointment = Appointment;
    exports.Schedule = Schedule;
    exports.ScheduleConfiguration = ScheduleConfiguration;
    exports.WeekDays = WeekDays;

}));
