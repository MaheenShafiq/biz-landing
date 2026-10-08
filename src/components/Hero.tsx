type HeroProps = {
  title: string;
  subtitle: string;
};

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="bg-gray-900 px-4 py-20 text-center text-white">
      <h1 className="text-4xl font-bold md:text-6xl">{title}</h1>
      <p className="mt-4 text-lg text-gray-300">{subtitle}</p>
    </section>
  );
}