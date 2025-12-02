import Link from 'next/link';
import data from "@/data/websites_data.json";

function GridSection() {
  return (
    <section className="w-full px-8 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {data.map((site) => {
          console.log(site);
          return (
            
              <Link
                key={site.id}
                href={site.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" group relative overflow-hidden cursor-pointer h-fit-content">
                  {/* Image Background */}
                  <div
                    className={`w-full h-64 relative bg-cover bg-center bg-no-repeat`}
                    style={{ backgroundImage: `url(${site.image_url})` }}
                  ></div>

                  <p>{site.image_url.split("_").pop()?.replace(".jpg", "")}</p>
                </div>
              </Link>
            
          );
        })}
      </div>
    </section>
  );
}

export default GridSection