import Style from "./style"
import  {Navbar, Business, GetStarted, Hero, Button, Clients, Stats, Testimonials, CardDeal,
 CTA, Footer, Billing} from "./Components/Index"


function App() {
 return (
  <>
    <div className="bg-primary  w-full overflow-hidden">
    <div className={`${Style.paddingX} ${Style.flexCenter}`}>
      <div className={`${Style.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
    </div>


    <div className={`${Style.flexStart } bg-primary`}>
      <div className={`${Style.boxWidth}`}>
          <Hero/>
      </div>
    </div>



    <div className={`bg-primary ${Style.paddingX} ${Style.flexStart} text-white`}>
      <div className={`${Style.boxWidth}`}>
           <Stats/>
           <Business/>
           <Billing/>
           <CardDeal/>
           <Testimonials/>
           <Clients/>
           <CTA/>
           <Footer/>
      </div>
    </div>
  </>
 ) 
   
  
}

export default App
