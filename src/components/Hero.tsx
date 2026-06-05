const Hero = () => {
    return (
        <section id="hero">
            <div
                className="petal"
                style={{
                    left: '8%',
                    animationDuration: '9s',
                    animationDelay: '0s',
                }}
            >
                🌸
            </div>
            <div
                className="petal"
                style={{
                    left: '22%',
                    animationDuration: '11s',
                    animationDelay: '2s',
                }}
            >
                🌺
            </div>
            <div
                className="petal"
                style={{
                    left: '55%',
                    animationDuration: '8s',
                    animationDelay: '1s',
                }}
            >
                🌸
            </div>
            <div
                className="petal"
                style={{
                    left: '70%',
                    animationDuration: '12s',
                    animationDelay: '3s',
                }}
            >
                🌿
            </div>
            <div
                className="petal"
                style={{
                    left: '85%',
                    animationDuration: '10s',
                    animationDelay: '.5s',
                }}
            >
                🌸
            </div>
            <div
                className="petal"
                style={{
                    left: '40%',
                    animationDuration: '9.5s',
                    animationDelay: '4s',
                }}
            >
                🌺
            </div>

            <div className="hero-content">
                <p className="hero-sub">🌿 An Auspicious Occasion 🌿</p>
                <div className="floral-divider">— 🌸 —</div>
                <h1 className="hero-names">
                    <span>T. Vinoth Kumar</span>
                    <span className="hero-amp">&</span>
                    <span>P. Rajeshwari</span>
                </h1>
                <div className="rings-icon">💍</div>
                <p className="hero-tagline">
                    We Invite you to the Engagement Ceremony <br /> and Share
                    with us A Celebration of Love and Commitment
                </p>
                <div className="floral-divider" style={{ marginTop: '1.5rem' }}>
                    — 🌸 🌿 🌸 —
                </div>
                <p
                    style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '.8rem',
                        letterSpacing: '.2em',
                        textTransform: 'uppercase',
                        color: 'var(--sage)',
                        marginTop: '1rem',
                    }}
                >
                    Sunday, May 31, 2026
                </p>
            </div>
        </section>
    )
}

export default Hero
