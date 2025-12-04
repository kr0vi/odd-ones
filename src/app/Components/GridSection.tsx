import data from "@/data/websites_data.json";
import WebsiteCard from "./WebsiteCard";

function GridSection() {
  return (
    <section className="w-full px-8 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {data.map((site) => (
          <WebsiteCard
            key={site.id}
            id={site.id}
            website_url={site.website_url}
            image_url={site.image_url}
          />
        ))}
      </div>
    </section>
  );
}

export default GridSection;
