const About = () => {
    return (
        <section id="story">
            <div style={{ textAlign: 'center' }}>
                <p className="section-label">🌿 About the Couple</p>
                <h2 className="section-title">Two Hearts, One Story</h2>
            </div>
            <div className="story-grid">
                <div className="story-side">
                    <div className="story-initial">V</div>
                    <h3 className="story-name">T. Vinoth Kumar</h3>
                    <p className="story-title">The Groom</p>
                    <p className="story-bio">
                        "Gentle in spirit, steadfast in heart — he walks into
                        love the way sunlight enters a room, quietly brightening
                        every corner."
                    </p>
                </div>
                <div className="story-center">
                    <div className="center-rings">💍</div>
                    <svg width="2" height="120" viewBox="0 0 2 120">
                        <line
                            x1="1"
                            y1="0"
                            x2="1"
                            y2="120"
                            stroke="#c47b7b"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            opacity=".5"
                        />
                    </svg>
                    <p className="center-text" style={{ marginTop: '.5rem' }}>
                        Together
                        <br />
                        Forever
                    </p>
                </div>
                <div className="story-side">
                    <div className="story-initial">R</div>
                    <h3 className="story-name">P. Rajeshwari</h3>
                    <p className="story-title">The Bride</p>
                    <p className="story-bio">
                        "Like jasmine in bloom, she fills every moment with
                        grace and fragrance — a soul as radiant as the first
                        light of dawn."
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
