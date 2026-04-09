const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact</h2>
        <div className="space-y-4 text-muted-foreground text-base">
          <p>
            <span className="font-medium text-foreground">Email: </span>
            <a href="mailto:info@wildwesttrading.xyz" className="hover:text-primary transition-colors">
              info@wildwesttrading.xyz
            </a>
          </p>
          <p>
            <span className="font-medium text-foreground">Registered Office: </span>
            Keyway Chambers, 3rd Floor, Akara Building, Road Town, Tortola, VG1110, British Virgin Islands
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
