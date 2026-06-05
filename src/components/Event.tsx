const Event = () => {
    return (
        <section id="details">
            <div style={{ textAlign: 'center' }}>
                <p className="section-label">🌸 Event Details</p>
                <h2 className="section-title">Join Us</h2>
            </div>
            <div className="cards-row">
                <div className="detail-card">
                    <div className="detail-icon">
                        <img src="may-31.png" alt="" height={"20px"} width={"20px"} />
                    </div>
                    <p className="detail-heading">Date</p>
                    <p className="detail-main">Sunday, May 31</p>
                    <p className="detail-sub">2026</p>
                </div>
                <div className="detail-card">
                    <div className="detail-icon">🕙</div>
                    <p className="detail-heading">Time</p>
                    <p className="detail-main">10:00 AM</p>
                    <p className="detail-sub">to 11:00 AM IST</p>
                </div>
                <div className="detail-card">
                    <div className="detail-icon">📍</div>
                    <p className="detail-heading">Venue</p>
                    <p className="detail-main">Parkavagula Kalyana Mandapam</p>
                    <p className="detail-sub">Devakottai, Tamil Nadu</p>
                </div>
            </div>
        </section>
    )
}

export default Event
