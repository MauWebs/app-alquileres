import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./myreservations.scss";
import moment from "moment";
import {
  format,
  parse,
  startOfWeek,
  getDay,
  eachDayOfInterval,
} from "date-fns";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
  getDay,
  locales: {
    es: moment.locale("es"),
  },
});

const MyCalendar: React.FC = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<Date[]>([]);

  const handleSelectDate = (slotInfo: { start: Date }) => {
    if (!checkIn) {
      setCheckIn(slotInfo.start);
      setCheckOut(null);
      setSelectedRange([]);
    } else if (!checkOut) {
      if (slotInfo.start > checkIn) {
        setCheckOut(slotInfo.start);
        const range = eachDayOfInterval({
          start: checkIn,
          end: slotInfo.start,
        });
        setSelectedRange(range);
      } else {
        setCheckIn(slotInfo.start);
        setCheckOut(null);
        setSelectedRange([]);
      }
    } else {
      setCheckIn(slotInfo.start);
      setCheckOut(null);
      setSelectedRange([]);
    }
  };

  const dayPropGetter = (date: Date) => {
    if (
      selectedRange.some(
        (selectedDate) => selectedDate.toDateString() === date.toDateString()
      )
    ) {
      return {
        className: "selected-day",
      };
    }
    if (checkIn && date.toDateString() === checkIn.toDateString()) {
      return {
        className: "check-in-day",
      };
    }
    return {};
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        selectable
        onSelectSlot={handleSelectDate}
        startAccessor="start"
        endAccessor="end"
        views={["month"]}
        dayPropGetter={dayPropGetter}
        style={{ height: 500, margin: "50px" }}
        messages={{
          today: "Hoy",
          previous: "Anterior",
          next: "Siguiente",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
          allDay: "Todo el día",
          noEventsInRange: "No hay eventos en este rango",
          showMore: (total) => `+ Ver más (${total})`,
        }}
      />
      <div>
        <p>
          Check-In: {checkIn ? checkIn.toLocaleDateString() : "Not selected"}
        </p>
        <p>
          Check-Out: {checkOut ? checkOut.toLocaleDateString() : "Not selected"}
        </p>
      </div>
    </div>
  );
};

export default MyCalendar;
