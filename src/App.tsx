import './App.css'
import About from './components/About'
import Counter from './components/Counter'
import Event from './components/Event'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Map from './components/Map'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
            {/* <audio
                ref={audioRef}
                src="/web_piano.mp3"
                loop
                preload="auto"
                playsInline
            /> */}

            {/* {!entered && (
                <div className="music-overlay">
                    <div className="music-card">
                        <p>
                            Vinoth 💍 Rajeshwari <br />
                            <span
                                style={{
                                    fontStyle: 'italic',
                                    marginTop: '20px',
                                }}
                            >
                                ✨ Engagement Ceremony✨
                            </span>
                        </p>

                        <button
                            className="music_invite_btn"
                            onClick={startExperience}
                        >
                            View Invite
                        </button>
                    </div>
                </div>
            )} */}
            <Navbar />
            <Hero />
            <About />
            <Counter />
            <Event />
            <Map />
            <Footer />
        </>
  )
}

export default App
