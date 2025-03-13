import RichText from "@/app/[lang]/components/RichText";

interface ReservationProps {
  data: {
    id: string;
    rules: string;
    cancellation: string;
    note: string;
  };
}

export default function Reservation({ data }: ReservationProps) {
  return (
    <section>
      <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between px-6">
        <div className="flex flex-col justify-center pb-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
          <h3 className="text-xl font-bold">Réservation à venir.</h3>
          {/*{data.note}*/}
        </div>

        <div>
          <div className="pb-5">
            <RichText data={{body: data.rules}} />
          </div>

          <div>
            <RichText data={{body: data.cancellation}} />
          </div>
        </div>
      </div>
    </section>
  );
}
