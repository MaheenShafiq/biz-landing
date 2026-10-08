import type { Service } from "../types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-lg border p-4 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </article>
  );
}