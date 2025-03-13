"use client";

import { DayPicker, getDefaultClassNames, DateRange } from "react-day-picker";
import { useState } from "react";

interface AvailabilitiesProps {
  data: {
    id: string;
    description: string;
    reservations: Reservation[];
  };
}

interface Reservation {
  title: string;
  startDate: string;
  endDate: string;
}

export default function Availabilities({ data }: AvailabilitiesProps) {
  const defaultClassNames = getDefaultClassNames();
  const [selected, setSelected] = useState<DateRange>();
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  const filteredDates = data.reservations.filter(reservation => {
    return new Date(reservation.endDate) > new Date();
  });

  const disabledDates = filteredDates.map(reservation => {
    // split the date into year, month, day to prevent timezone issues
    const [startYear, startMonth, startDay] = reservation.startDate.split('-');
    const [endYear, endMonth, endDay] = reservation.endDate.split('-');

    const startDate = new Date(Number(startYear), Number(startMonth) - 1, Number(startDay));
    const endDate = new Date(Number(endYear), Number(endMonth) - 1, Number(endDay) - 1);
    return { from: startDate, to: endDate };
  });

  return (
    <section>
      <div className="container flex flex-col justify-center mx-auto lg:flex-row">
        <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left whitespace-pre-wrap">
          {data.description}
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
          <DayPicker
            mode="range"
            selected={selected}
            onSelect={setSelected}
            min={2}
            showOutsideDays
            excludeDisabled
            disabled={[
              { before: new Date() },
              ...disabledDates
            ]}
            footer={
            <div>
              {(selected?.from && selected?.to) ?
                <div>
                  Arrivée: {selected.from.toLocaleDateString("fr-CA", dateOptions)}<br />
                  Départ: {selected.to.toLocaleDateString("fr-CA", dateOptions)}
                </div>
              : <div>Choisissez une date.</div>}
            </div>
            }
            classNames={{
              today: `${defaultClassNames.today} font-bold`,
              footer: 'pt-5 h-20 text-center',
            }}
          />
        </div>
      </div>
    </section>
  );
}
