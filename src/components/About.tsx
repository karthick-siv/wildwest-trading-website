const About = () => {
  return (
    <section id="about" className="py-20 bg-section-alt">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-semibold mb-8">About WildWest Trading</h2>
        <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
          <p>
            WildWest Trading Ltd. is a British Virgin Islands registered company specializing
            in enabling international clients to access US equities and exchange-traded funds.
            We operate as a brokerage intermediary, maintaining omnibus clearing and custody
            relationships with US-registered broker-dealers and clearing firms.
          </p>
          <p>
            Our infrastructure leverages stablecoin settlement rails for efficient cross-border
            capital movement, reducing friction and settlement times for international investors.
            Client assets are held at regulated US clearing firms, segregated through subledger
            accounting at the omnibus level.
          </p>
          <p>WildWest Trading does not provide services to US persons.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
