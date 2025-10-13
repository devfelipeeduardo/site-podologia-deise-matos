import Nav from "./components/Nav"
import FirstSection from "./components/FirstSection"
import SecondSection from "./components/SecondSection"
import StatisticContainer from "./components/StatistiscContainer"
import ThirdSection from "./components/ThirdSection"

function App() {

  function onScheduleAppointmentRedirect() {window.location.href = "https://api.whatsapp.com/send/?phone=5511975126282&text&type=phone_number&app_absent=0"};

  return (
    <>
      <Nav scheduleAppointmentRedirect={onScheduleAppointmentRedirect} />
      <FirstSection scheduleAppointmentRedirect={onScheduleAppointmentRedirect} />
      <StatisticContainer />
      <SecondSection />
      <ThirdSection />
    </>
  )
}

export default App
