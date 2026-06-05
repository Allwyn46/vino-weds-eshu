import { useState } from 'react'

const Map = () => {
    const [hovered, setHovered] = useState(false)

    return (
        <section id="map-sec">
            <p className="section-label">📍 Directions</p>
            <h2 className="section-title">Find Us</h2>

            <div className="map-wrap">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.803476549959!2d78.8215848!3d9.950303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b005b3b632e3e31%3A0x1a244bfd2b8118d8!2sParkavagula%20Kalyana%20Mandapam!5e0!3m2!1sen!2sin!4v1779369465485!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Venue Location"
                />
            </div>

            <div style={{ textAlign: 'center' }}>
                <p className="map-address">
                    <strong>Parkavagula Kalyana Mandapam</strong>
                    <br />
                    Devakottai, Sivaganga District
                    <br />
                    Tamil Nadu, India
                </p>

                <a
                    href="https://maps.app.goo.gl/m3Q1QEq7HM3CYPeZ6?g_st=awb"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        display: 'inline-block',
                        marginTop: '1rem',
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '.78rem',
                        letterSpacing: '.15em',
                        textTransform: 'uppercase',
                        color: hovered ? '#fff' : 'var(--rose)',
                        textDecoration: 'none',
                        border: '1px solid var(--rose)',
                        padding: '.6rem 1.4rem',
                        borderRadius: '50px',
                        background: hovered ? '#c47b7b' : 'transparent',
                        transition: 'background .2s, color .2s',
                    }}
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                >
                    Open in Google Maps ↗
                </a>
            </div>
        </section>
    )
}

export default Map
