import RichText from '@/app/[lang]/components/RichText';

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
          {/*<h3 className="text-xl font-bold">Réservation à venir.</h3>*/}

          <form className="space-y-6 group">
            <h3 className="text-xl font-bold">Dates</h3>
            <div className="flex flex-col lg:flex-row gap-4 items-end">
              <div className="flex-1">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Arrivée
                </label>
                <input id="startDate" type="date" required />
              </div>

              <div>au</div>

              <div className="flex-1">
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  Départ
                </label>
                <input id="endDate" type="date" required />
              </div>
            </div>

            <h3 className="text-xl font-bold">Invités</h3>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                  Adultes
                </label>
                <select id="adults" required>
                  {[...Array(5).keys()].map((num) => (
                    <option key={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label htmlFor="kids" className="block text-sm font-medium text-gray-700">
                  Enfants
                </label>
                <select id="kids" required>
                  {[...Array(5).keys()].map((num) => (
                    <option key={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label htmlFor="pets" className="block text-sm font-medium text-gray-700">
                  Animaux
                </label>
                <select id="pets" required>
                  {[...Array(5).keys()].map((num) => (
                    <option key={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <h3 className="text-xl font-bold">Information</h3>
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    Prénom
                  </label>
                  <input id="firstName" type="text" required />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <input id="lastName" type="text" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Courriel
                </label>
                <input id="email" type="email" required />
              </div>
              <div>
                <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input id="tel" type="tel" required />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message (Optionnel)
              </label>
              <textarea id="message" rows={5} />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="rules"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="rules" className="font-medium text-gray-700">
                  J&apos;affirme avoir lu les règlements...
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-greyFriends hover:bg-greyFriends focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greyFriends group-invalid:pointer-events-none group-invalid:opacity-30"
            >
              Soumettre la demande de réservation
            </button>
          </form>

          <p className="mt-6">{data.note}</p>
        </div>

        <div>
          <div className="pb-5">
            <RichText data={{ body: data.rules }} />
          </div>

          <div>
            <RichText data={{ body: data.cancellation }} />
          </div>
        </div>
      </div>
    </section>
  );
}
