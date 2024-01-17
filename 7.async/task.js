class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn("Уже присутствует звонок на это же время");
        }
        this.alarmCollection.push({
            time,
            callback,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        let h_str = (now.getHours() < 10) ? '0' + now.getHours().toString() : now.getHours().toString();
        let m_str = (now.getMinutes() < 10) ? '0' + now.getMinutes().toString() : now.getMinutes().toString();
        return h_str + ':' + m_str;
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                const currentTime = this.getCurrentFormattedTime();
                this.alarmCollection.forEach(alarm => {
                    if (alarm.time === currentTime && alarm.canCall) {
                        alarm.canCall = false;
                        alarm.callback();
                    }
                });
            }, 1000);
        }
    }



    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
