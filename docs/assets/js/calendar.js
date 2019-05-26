document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid' ],
    header: {
      left: 'prevYear,prev,next,nextYear today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    defaultDate: new Date(),
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2019-06-01'
      },
      {
        title: 'Long Event',
        start: '2019-06-07',
        end: '2019-06-10'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2019-06-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2019-06-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2019-06-11',
        end: '2019-06-13'
      },
      {
        title: 'Meeting',
        start: '2019-06-12T10:30:00',
        end: '2019-06-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2019-06-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2019-06-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2019-06-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2019-06-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2019-06-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2019-06-28'
      }
    ]
  });

  calendar.render();
});
