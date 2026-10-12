function AvailableVarieties({ products = [] })
{
    return(
        <section className="py-16 sm:py-20">
      {/* Section Heading */}
      <div className="mb-10">
        <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800">
          उपलब्ध कृषी उत्पादने
        </span>

        <h2 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          उपलब्ध वाण
        </h2>

        <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
          या पिकासाठी उपलब्ध असलेले वाण आणि संबंधित कृषी उत्पादनांची माहिती पहा.
        </p>
      </div>

      {/* Product Cards */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-5xl">
                    🌱
                  </div>
                )}

                {/* Availability Badge */}
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    product.available
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.available
                    ? "सध्या उपलब्ध"
                    : "सध्या उपलब्ध नाही"}
                </span>
              </div>

              {/* Product Information */}
              <div className="p-5 sm:p-6">
                <p className="text-sm font-medium text-emerald-700">
                  {product.type}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-500">
                      रामा ॲग्रीटेक किंमत
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-900">
                      {product.price != null
                        ? `₹${product.price}`
                        : "किंमत विचारावी"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => product.onViewDetails?.(product)}
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    अधिक माहिती
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center sm:py-16">
          <div className="text-4xl" aria-hidden="true">
            🌾
          </div>

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            उत्पादनांची माहिती लवकरच उपलब्ध होईल
          </h3>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
            या पिकासाठी उत्पादनांची माहिती सध्या उपलब्ध नाही.
            कृपया नंतर पुन्हा भेट द्या.
          </p>
        </div>
      )}
    </section>
    )
}

export default AvailableVarieties