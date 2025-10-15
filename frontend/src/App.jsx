import { useState } from "react"
import SuspenseNav from "./components/SuspenseNav"
import FirstSection from "./components/FirstSection"
import SecondSection from "./components/SecondSection"
import ThirdSection from "./components/ThirdSection"
import FourthSection from "./components/FourthSection"
import Footer from "./components/Footer"
import StatisticContainer from "./components/StatistiscContainer"

function App() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function onScheduleAppointmentRedirect() {
    window.open(
      "https://api.whatsapp.com/send/?phone=5511975126282&text&type=phone_number&app_absent=0",
      "_blank",
      "noopener,noreferrer"
    );
  };



  return (
    <>
      <SuspenseNav onScheduleAppointmentRedirect={onScheduleAppointmentRedirect} />
      <FirstSection
        onScheduleAppointmentRedirect={onScheduleAppointmentRedirect}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
      <StatisticContainer />
      <SecondSection />
      <ThirdSection />
      <FourthSection onScheduleAppointmentRedirect={onScheduleAppointmentRedirect} />
      <Footer />
    </>
  )
}

export default App;
