import Sixtys from "./assets/60s.jpg" 
import Seventys from "./assets/70s.avif"
import Eightys from "./assets/80s.jpg"
import Ninetys from "./assets/90s.jpg"
import TwoThousands from "./assets/00s.png"
import Tens from "./assets/10s.jpg"
import Twentys from "./assets/20s.jpeg"

function App() {

  return (
    <>
      <div>
        <header>
          <h1 className="text-7xl font-bold text-center font-[Poppins] uppercase my-[3rem]">
            Az internet fejlődése
          </h1>
        </header>
        <main>
          <hr className="mx-[3rem]" />  
           <h3 className="text-3xl font-bold font-[Poppins] uppercase ml-[16rem] mt-[3rem]">
            1960-as évek: Az internet előzményei
           </h3>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1962:</b> Paul Baran, az amerikai RAND Corporation kutatója javaslatot tesz egy decentralizált hálózat kiépítésére, amely ellenállna egy esetleges nukleáris támadásnak.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1969:</b> Az ARPANET, az első „csomagkapcsolt” hálózat létrejön az Egyesült Államokban, az amerikai Védelmi Minisztérium támogatásával. Az első négy csomópont között (UCLA, Stanford, UC Santa Barbara és Utah Egyetem) sikeresen valósul meg az adatcsere.
           </p>
           <img className="w-[20rem] ml-[24rem] mt-[1rem] rounded-2xl shadow-2xl shadow-slate-500 border-[2px] border-black mb-[3rem]" src={Sixtys} alt="" />


           <hr className="mx-[3rem]" /> 
           <h3 className="text-3xl font-bold font-[Poppins] uppercase ml-[16rem] mt-[3rem]">
           1970-es évek: Az alapok lefektetése
           </h3>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1971:</b> Ray Tomlinson kifejleszti az első elektronikus levelezési rendszert, az emailt, és a „@” szimbólum használatát a címzéshez.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1973:</b> Bob Kahn és Vint Cerf kifejlesztik a Transmission Control Protocol (TCP) és Internet Protocol (IP) protokollokat, amelyek később az internet alapját képezik.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1974:</b> A „network” szóból származó „internet” kifejezést először használják a hálózatok összekapcsolására.
           </p>
           <img className="w-[20rem] ml-[24rem] mt-[1rem] rounded-2xl shadow-2xl shadow-slate-500 border-[2px] border-black mb-[3rem]" src={Seventys} alt="" />



           <hr className="mx-[3rem]" /> 
           <h3 className="text-3xl font-bold font-[Poppins] uppercase ml-[16rem] mt-[3rem]">
           1980-as évek: Az internet elterjedése
           </h3>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1983:</b> Az ARPANET teljesen átáll a TCP/IP protokollra, amely megalapozza az internet működésének mai formáját. Ebben az évben vezetik be a Domain Name Systemet (DNS), amely lehetővé teszi a könnyebb címzést (pl. „.com”, „.org” stb.).
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1985:</b> A National Science Foundation Network (NSFNET) létrejön, hogy összekapcsolja az amerikai egyetemeket és kutatóintézeteket, elősegítve ezzel az internet szélesebb körű használatát.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1989:</b> Tim Berners-Lee, a CERN kutatója javaslatot tesz egy „World Wide Web” (WWW) néven ismert globális hipertext rendszerre.
           </p>
           <img className="w-[20rem] ml-[24rem] mt-[1rem] rounded-2xl shadow-2xl shadow-slate-500 border-[2px] border-black mb-[3rem]" src={Eightys} alt="" />



           <hr className="mx-[3rem]" /> 
           <h3 className="text-3xl font-bold font-[Poppins] uppercase ml-[16rem] mt-[3rem]">
           1990-es évek: Az internet világhódítása
           </h3>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1990:</b> Tim Berners-Lee megalkotja az első weboldalt és böngészőt. Ebben az évben hivatalosan is befejezik az ARPANET működését.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1991:</b> A World Wide Web nyilvánossá válik, és mindenki számára elérhető.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1993:</b> A Mosaic nevű első grafikus böngésző megjelenik, amely lehetővé teszi a felhasználók számára a vizuálisan vonzóbb weboldalak megtekintését. Ez hozzájárul az internet népszerűségének növekedéséhez.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1995:</b> Az NSFNET megszűnik, és az internetet kereskedelmi célokra is felhasználják. Az Amazon és az eBay ebben az évben indul el.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>1998:</b> Megalakul a Google, amely hamarosan az egyik legfontosabb keresőmotor lesz az interneten.
           </p>
           <img className="w-[20rem] ml-[24rem] mt-[1rem] rounded-2xl shadow-2xl shadow-slate-500 border-[2px] border-black mb-[3rem]" src={Ninetys} alt="" />



           <hr className="mx-[3rem]" /> 
           <h3 className="text-3xl font-bold font-[Poppins] uppercase ml-[16rem] mt-[3rem]">
           2000-es évek: Az internet a mindennapokban
           </h3>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>2004:</b> Megalakul a Facebook, amely az egyik legfontosabb közösségi hálózat lesz, és hozzájárul az internetes közösségi élet kialakulásához.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>2005:</b> Elindul a YouTube, amely a felhasználók által készített videótartalmak megosztásának vezető platformjává válik.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>2007:</b> Az Apple bemutatja az iPhone-t, amely az okostelefonok korszakát nyitja meg, forradalmasítva az internethez való hozzáférést mobil eszközökön keresztül.
           </p>
           <img className="w-[20rem] ml-[24rem] mt-[1rem] rounded-2xl shadow-2xl shadow-slate-500 border-[2px] border-black mb-[3rem]" src={TwoThousands} alt="" />



           <hr className="mx-[3rem]" /> 
           <h3 className="text-3xl font-bold font-[Poppins] uppercase ml-[16rem] mt-[3rem]">
           2010-es évek: Mobilinternet és felhőalapú szolgáltatások
           </h3>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>2010:</b> Az Instagram elindul, amely a mobilfotózást és a közösségi média vizuális kultúráját formálja át.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>2015:</b> Az internetes streaming szolgáltatások, mint a Netflix és Spotify, világszerte népszerűvé válnak, átalakítva a médiafogyasztás módját.
           </p>
           <img className="w-[20rem] ml-[24rem] mt-[1rem] rounded-2xl shadow-2xl shadow-slate-500 border-[2px] border-black mb-[3rem]" src={Tens} alt="" />



           <hr className="mx-[3rem]" /> 
           <h3 className="text-3xl font-bold font-[Poppins] uppercase ml-[16rem] mt-[3rem]">
           2020-as évek: 5G és IoT (Internet of Things)
           </h3>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>2020:</b> Az 5G hálózatok bevezetése elkezdődik, amely sokkal gyorsabb internetkapcsolatot biztosít, és lehetővé teszi a fejlett IoT alkalmazásokat.
           </p>
           <p className="text-xl font-[Poppins] uppercase ml-[20rem] mt-[1rem] mr-[20rem]">
            <b>2021:</b> A COVID-19 világjárvány miatt az internetes szolgáltatások, mint a videokonferenciák és az online vásárlás, még fontosabbá válnak.
           </p>
           <img className="w-[20rem] ml-[24rem] mt-[1rem] rounded-2xl shadow-2xl shadow-slate-500 border-[2px] border-black mb-[3rem]" src={Twentys} alt="" />
        </main>
        <footer>
        <hr className="mx-[3rem]" /> 
          <h1 className="text-4xl font-bold text-center font-[Poppins] uppercase m-[3rem]">
            Az internet fejlődése folyamatos, és továbbra is új technológiák és innovációk formálják, mint a mesterséges intelligencia, a blokklánc technológia és a virtuális valóság.
          </h1>
          <hr className="mx-[3rem]" /> 
          <h1 className="text-2xl font-bold text-center font-[Poppins] uppercase m-[3rem]">
            Készítette: Vásári András
          </h1>
        </footer>
      </div>
    </>
  )
}

export default App
