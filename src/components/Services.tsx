import { BarChart3, Shield, Coins, Server } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "US Equities Access",
    description:
      "We provide international clients with access to US-listed equities and ETFs through our correspondent clearing relationships with US-registered broker-dealers.",
  },
  {
    icon: Shield,
    title: "Omnibus Clearing & Custody",
    description:
      "Client assets are custodied at US-registered clearing firms under an omnibus account structure with per-client subledger tracking and daily reconciliation.",
  },
  {
    icon: Coins,
    title: "Stablecoin Settlement",
    description:
      "We utilize USDC-based settlement rails for cross-border capital movement, enabling faster deposits and lower transaction costs compared to traditional wire transfers.",
  },
  {
    icon: Server,
    title: "Institutional Infrastructure",
    description:
      "Our platform is built on institutional-grade technology including multi-party computation (MPC) key management, automated compliance screening, and real-time position tracking.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-12">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border rounded-lg p-8 bg-card"
            >
              <service.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
