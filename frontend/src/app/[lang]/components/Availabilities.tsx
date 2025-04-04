'use client';

import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { useReservationStore } from '@/app/store/reservation';

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
  const startDate = useReservationStore((state) => state.startDate);
  const endDate = useReservationStore((state) => state.endDate);
  const setStartDate = useReservationStore((state) => state.setStartDate);
  const setEndDate = useReservationStore((state) => state.setEndDate);
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const filteredDates = data.reservations.filter((reservation) => {
    return new Date(reservation.endDate) > new Date();
  });

  const disabledDates = filteredDates.map((reservation) => {
    // split the date into year, month, day to prevent timezone issues
    const [startYear, startMonth, startDay] = reservation.startDate.split('-');
    const [endYear, endMonth, endDay] = reservation.endDate.split('-');

    const from = new Date(Number(startYear), Number(startMonth) - 1, Number(startDay));
    const to = new Date(Number(endYear), Number(endMonth) - 1, Number(endDay) - 1);
    return { from, to };
  });

  function selectDates(from: Date | undefined, to: Date | undefined) {
    if (from) setStartDate(from);
    if (to) setEndDate(to);
  }

  return (
    <section>
      <div className="container flex flex-col justify-center mx-auto lg:flex-row">
        <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left whitespace-pre-wrap">
          {data.description}
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
          <DayPicker
            mode="range"
            selected={{ from: startDate, to: endDate }}
            onSelect={(selected) => {
              selectDates(selected?.from, selected?.to);
            }}
            min={2}
            showOutsideDays
            excludeDisabled
            disabled={[{ before: new Date() }, ...disabledDates]}
            footer={
              <div>
                {startDate && endDate ? (
                  <div>
                    Arrivée: {startDate.toLocaleDateString('fr-CA', dateOptions)}
                    <br />
                    Départ: {endDate.toLocaleDateString('fr-CA', dateOptions)}
                  </div>
                ) : (
                  <div>Choisissez une date.</div>
                )}
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
