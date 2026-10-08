import { ServiceCard } from "./ServiceCard";
import { services } from "../data/services";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-6 text-2xl font-bold">Our services</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </div>
    </section>
  );
}