<template>
    <div>
        <div id="app">
            <persian-calendar :events-list="events" :show-date="$moment('1399/05/26', 'jYYYY/jMM/jDD')"
                :display-period.sync="period">
                <template slot="event" slot-scope="i">
                    <div :key="i.value.id" :class="i.value.classes"
                        :style="`top:${i.top};background-color:${i.value.color};`" class="vpc_event"
                        style="border:2px dashed #eee">
                        <!--  Anything You Wish -->
                        <span class="vpc_event-title" style="text-decoration: underline">{{ i.value.title }}</span>
                    </div>
                </template>
            </persian-calendar>
            <h2>Current Display Period {{ period }}</h2>
        </div>
    </div>
</template>

<script>
import PersianCalendar from '../../PersianCalendar';
//import PersianCalendar from PersianCalendar

export default {
    components: {
        PersianCalendar
    },
    data() {
        return {
            period: 'week',
            events: [
                { id: 1, startDateTime: this.$moment('1399/05/07 19:30', 'jYYYY/jMM/jDD HH:mm'), endDateTime: this.$moment('1399/05/09 07:15', 'jYYYY/jMM/jDD HH:mm'), title: 'رویداد شماره ۱', color: '#2a79b8', classes: [] },
                { id: 2, startDateTime: this.$moment('1399/05/13 10:30', 'jYYYY/jMM/jDD HH:mm'), endDateTime: this.$moment('1399/05/13 15:00', 'jYYYY/jMM/jDD HH:mm'), title: 'رویداد شماره ۲', color: '#a71749', classes: [] },
                { id: 7, startDateTime: this.$moment('1399/05/13 10:30', 'jYYYY/jMM/jDD HH:mm'), endDateTime: this.$moment('1399/05/13 11:30', 'jYYYY/jMM/jDD HH:mm'), title: 'گفتگوی اسکایپی با مدیر شرکت آرمان', color: '#a71749', classes: [] },
                { id: 4, startDateTime: this.$moment('1399/05/09 10:30', 'jYYYY/jMM/jDD HH:mm'), endDateTime: this.$moment('1399/05/13 14:00', 'jYYYY/jMM/jDD HH:mm'), title: 'رویداد شماره ۳', color: '#34147e', classes: [] },
                { id: 5, startDateTime: this.$moment('1399/05/06 10:30', 'jYYYY/jMM/jDD HH:mm'), endDateTime: this.$moment('1399/05/08 18:35', 'jYYYY/jMM/jDD HH:mm'), title: 'رویداد شماره ۴', color: '#34147e', classes: [] },
                { id: 3, startDateTime: this.$moment('1399/05/10', 'jYYYY/jMM/jDD'), endDateTime: this.$moment('1399/05/25', 'jYYYY/jMM/jDD'), title: 'گفتگوی اسکایپی با مدیر شرکت آرمان', color: '#cb09cb', classes: [] }
            ]
        }
    }
}
</script>