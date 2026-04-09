const Compliance = () => {
  return (
    <section id="compliance" className="py-20 bg-section-alt">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-semibold mb-8">Compliance & Risk Management</h2>
        <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
          <p>
            WildWest Trading maintains a robust compliance program designed to meet
            international regulatory standards.
          </p>
          <p>
            <span className="font-semibold text-foreground">KYC/AML Program</span> — All
            clients undergo identity verification and anti-money laundering screening before
            account activation. We utilize industry-leading verification providers with ongoing
            transaction monitoring.
          </p>
          <p>
            <span className="font-semibold text-foreground">Transaction Screening</span> — All
            transactions are screened against global sanctions lists and monitored for suspicious
            activity through automated compliance systems.
          </p>
          <p>
            <span className="font-semibold text-foreground">Asset Segregation</span> — Client
            assets are held at US-registered clearing and custody providers. Client balances are
            tracked through subledger accounts within our omnibus structure, ensuring clear
            attribution and auditability.
          </p>
          <p>
            <span className="font-semibold text-foreground">Restricted Jurisdictions</span> —
            WildWest Trading does not provide services to US persons or residents of
            OFAC-sanctioned jurisdictions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
