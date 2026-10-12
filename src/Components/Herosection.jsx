import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <section className="relative isolate flex min-h-[580px] items-center overflow-hidden sm:min-h-[640px] lg:min-h-[720px]">

      {/* Background Image + Gradient Overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banana-farm.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-black/75 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl text-center sm:text-left">

          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-medium text-emerald-200 shadow-sm backdrop-blur-md sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            <span>शेतकऱ्यांच्या सेवेसाठी सदैव तत्पर</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl leading-[1.15] font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl xl:text-7xl">
            शेतीला योग्य दिशा,
            <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-emerald-200 to-green-100 bg-clip-text text-transparent">
              प्रगतीला नवी आशा!
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:mx-0 sm:text-lg lg:text-xl">
            Rama Agritech सोबत जाणून घ्या पिकांचे नियोजन, खत व औषध
            व्यवस्थापन आणि पिकांवरील रोग व समस्यांविषयी उपयुक्त माहिती.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
            <Link
              to="/crops"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/30 transition-all duration-200 hover:bg-emerald-500 hover:shadow-emerald-900/40 active:scale-95 sm:text-base"
            >
              <span>पिकांची माहिती पहा</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white/15 active:scale-95 sm:text-base"
            >
              आमच्याबद्दल
            </Link>
          </div>

          {/* Key Benefits */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-6">

            <div>
              <p className="text-xl font-bold text-emerald-400 sm:text-2xl">
                पिकनिहाय
              </p>
              <p className="text-xs text-slate-300 sm:text-sm">
                शेतीविषयक मार्गदर्शन
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-emerald-400 sm:text-2xl">
                दर्जेदार
              </p>
              <p className="text-xs text-slate-300 sm:text-sm">
                कृषी उत्पादने
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-xl font-bold text-emerald-400 sm:text-2xl">
                शेतकरी प्रथम
              </p>
              <p className="text-xs text-slate-300 sm:text-sm">
                सेवा आणि मार्गदर्शन
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-slate-950/60 to-transparent"
      />
    </section>
  );
};

export default Herosection;