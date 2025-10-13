import Nav from "./components/Nav"
import FirstSection from "./components/FirstSection"
import SecondSection from "./components/SecondSection"
import ThirdSection from "./components/ThirdSection"
import FourthSection from "./components/FourthSection"
import Footer from "./components/Footer"
import StatisticContainer from "./components/StatistiscContainer"

function App() {

  function onScheduleAppointmentRedirect() {
    window.open(
      "https://api.whatsapp.com/send/?phone=5511975126282&text&type=phone_number&app_absent=0",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Nav onScheduleAppointmentRedirect={onScheduleAppointmentRedirect} />
      <FirstSection onScheduleAppointmentRedirect={onScheduleAppointmentRedirect} />
      <StatisticContainer />
      <SecondSection />
      <ThirdSection />
      <FourthSection onScheduleAppointmentRedirect={onScheduleAppointmentRedirect}/>
      <Footer />
    </>
  )
}

export default App
