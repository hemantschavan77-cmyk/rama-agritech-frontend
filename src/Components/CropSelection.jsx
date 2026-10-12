import { Link } from "react-router-dom";

const crops = [
  {
    id: 1,
    name: "कापूस",
    slug : "cotton",
    category: "मुख्य पीक",
    image: "/images/crops/cotton.jpg",
  },
  {
    id: 2,
    name: "केळी",
    slug : "banana",
    category: "फळ पीक",
    image: "/images/crops/banana.jpg",
  },
  {
    id: 3,
    name: "मका",
    slug : "maize",
    category: "धान्य",
    image: "/images/crops/maize.jpg",
  },
  {
    id: 4,
    name: "ज्वारी",
    slug : "sorghum",
    category: "धान्य",
    image: "/images/crops/jowar.jpg",
  },
  {
    id: 5,
    name: "बाजरी",
    slug : "pearl-millet",
    category: "धान्य",
    image: "/images/crops/bajra.jpg",
  },
  {
    id: 6,
    name: "पपई",
    slug : "papaya",
    category: "फळ पीक",
    image: "/images/crops/papaya.jpg",
    
  },
  {
    id: 7,
    name: "कलिंगड",
    slug : "watermelon",
    category: "फळ पीक",
    image: "/images/crops/watermelon.jpg",
    
  },
];

const CropSelection = () => {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            आमची पीक माहिती
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            तुमचे पीक निवडा
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            तुमच्या पिकानुसार मार्गदर्शन, वाण, रोग व समस्या आणि
            संबंधित कृषी उत्पादनांची माहिती मिळवा.
          </p>
        </div>

        {/* Crop Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {crops.map((crop) => (
            <article
              key={crop.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Crop Image */}
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src={crop.image}
                  alt={crop.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
                  {crop.category}
                </span>
              </div>

              {/* Crop Details */}
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {crop.name}
                </h3>

                <Link
                  to={`/crops/${crop.slug}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  माहिती पहा
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CropSelection