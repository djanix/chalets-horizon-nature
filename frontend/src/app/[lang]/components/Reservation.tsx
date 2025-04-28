'use client';

import RichText from '@/app/[lang]/components/RichText';
import { useReservationStore } from '@/app/store/reservation';
import { useState, FormEvent } from 'react';
import { getStrapiURL } from '@/app/[lang]/utils/api-helpers';
import GlobalConfig from '@/app/app.config';

interface ReservationProps {
  data: {
    id: string;
    rules: string;
    cancellation: string;
    note: string;
  };
}

export default function Reservation({ data }: ReservationProps) {
  const startDate = useReservationStore((state) => state.startDate);
  const endDate = useReservationStore((state) => state.endDate);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [pets, setPets] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

  function formValidation() {
    if (!startDate) {
      setErrorMessage('Start date cannot be blank.');
      return false;
    }

    if (!endDate) {
      setErrorMessage('End date cannot be blank.');
      return false;
    }

    if (!email) {
      setErrorMessage('Email cannot be blank.');
      return false;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format.');
      return false;
    }

    if (!firstName) {
      setErrorMessage('First name cannot be blank.');
      return false;
    }

    if (!lastName) {
      setErrorMessage('Last name cannot be blank.');
      return false;
    }

    if (!phone) {
      setErrorMessage('Phone number cannot be blank.');
      return false;
    }

    return true;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!GlobalConfig.reservation.enabled) return;

    const isValid = formValidation();
    if (!isValid) return;

    const res = await fetch(getStrapiURL() + '/api/reservation-form-submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: { startDate, endDate, adults, kids, pets, firstName, lastName, email, phone, message },
      }),
    });

    if (!res.ok) {
      setErrorMessage('Email failed to submit.');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('Email successfully submitted!');
  }

  return (
    <section>
      <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between px-6">
        <div className="flex flex-col justify-center pb-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left relative">
          {!GlobalConfig.reservation.enabled && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-natural-light/70">
              <h3 className="text-3xl rotate-45 font-bold text-natural">Réservations à venir</h3>
            </div>
          )}

          <form className="space-y-6 group" onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold">Dates</h3>
            <div className="flex flex-col lg:flex-row gap-4 items-end">
              <div className="flex-1">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Arrivée
                </label>
                <input id="startDate" type="date" required value={startDate?.toISOString().substring(0, 10)} disabled />
              </div>

              <div>au</div>

              <div className="flex-1">
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  Départ
                </label>
                <input id="endDate" type="date" required value={endDate?.toISOString().substring(0, 10)} disabled />
              </div>
            </div>

            <h3 className="text-xl font-bold">Invités</h3>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                  Adultes
                </label>
                <select id="adults" required value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                  {[...Array(11).keys()].map((num) => (
                    <option key={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label htmlFor="kids" className="block text-sm font-medium text-gray-700">
                  Enfants
                </label>
                <select id="kids" required value={kids} onChange={(e) => setKids(Number(e.target.value))}>
                  {[...Array(11).keys()].map((num) => (
                    <option key={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label htmlFor="pets" className="block text-sm font-medium text-gray-700">
                  Animaux
                </label>
                <select id="pets" required value={pets} onChange={(e) => setPets(Number(e.target.value))}>
                  {[...Array(11).keys()].map((num) => (
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
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Courriel
                </label>
                <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input id="tel" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message (Optionnel)
              </label>
              <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
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

            {successMessage && <p className="text-green-700 bg-green-300 px-4 py-2 rounded-lg">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 bg-red-200 px-4 py-2 rounded-lg my-2">{errorMessage}</p>}
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
