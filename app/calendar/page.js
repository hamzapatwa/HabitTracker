"use client"
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './calendar.module.css';

const localizer = momentLocalizer(moment);

export default function MyCalendar() {
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([
        ...events,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };

  const handleEventClick = (event) => {
    const confirm = window.confirm(`Do you want to delete the event: "${event.title}"?`);
    if (confirm) {
      setEvents(events.filter(e => e !== event));
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Calendar</h1>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventClick}
      />
    </div>
  );
}
