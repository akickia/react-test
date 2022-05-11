import Ronja from "./Ronja"
import Lukas from "./Lukas"
import Kicki from "./Kicki"
import Footer from "./Footer"
import Ebba from "./Ebba"
import Martin from "./Martin"
import ReuseableButton from "./ReusableButton"


const Home = () => {
  return (
    <div className="container">
      <div>
        <h1>Lindstrands</h1>
        <p>Tryck på ditt namn</p>
      </div>
      <div>
        <ReuseableButton name="Martin" link="#martin"></ReuseableButton>
        <ReuseableButton name="Kicki" link="#kicki"></ReuseableButton>
        <ReuseableButton name="Ronja" link="#ronja"></ReuseableButton>
        <ReuseableButton name="Lukas" link="#lukas"></ReuseableButton>
        <ReuseableButton name="Ebba" link="#ebba"></ReuseableButton>
      </div>
      <div>
        <Martin/>
      </div>
      <div>
        <Kicki/>
        </div>
      <div>
        <Ronja/>
        </div>
      <div>
        <Lukas/>
        </div>
      <div>
        <Ebba/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;