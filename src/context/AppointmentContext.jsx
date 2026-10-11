import { createContext, useContext, useState } from "react";

const AppointmentContext = createContext(null);

export function AppointmentProvider({ children }) {
  const [appointment, setAppointment] = useState(null);

  function saveAppointment(data) {
    setAppointment(data);
  }

  function clearAppointment() {
    setAppointment(null);
  }

  return (
    <AppointmentContext.Provider
      value={{
        appointment,
        saveAppointment,
        clearAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  return useContext(AppointmentContext);
}