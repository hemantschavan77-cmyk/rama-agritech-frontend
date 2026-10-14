function DiseaseSection({ problems = [], onViewProduct }) {
    return (

        <section className="py-16 sm:py-20">
            {/* Section Heading */}
            <div className="mb-10">
                <span className="inline-block rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold text-rose-700">
                    पीक संरक्षण
                </span>

                <h2 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    रोग व समस्या
                </h2>

                <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
                    पिकांवरील रोग व इतर समस्यांची माहिती, त्यावरील उपाय आणि
                    संबंधित कृषी उत्पादनांची माहिती येथे पहा.
                </p>
            </div>

            {/* Problem Cards */}
            {problems.length > 0 ? (
                <div className="space-y-6">
                    {problems.map((problem) => (
                        <article
                            key={problem.id}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)]">
                                {/* Problem Image */}
                                <div className="relative h-56 bg-slate-100 md:h-full md:min-h-[300px]">
                                    {problem.image ? (
                                        <img
                                            src={problem.image}
                                            alt={problem.name}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full min-h-56 items-center justify-center text-5xl">
                                            🌿
                                        </div>
                                    )}
                                </div>

                                {/* Problem Information */}
                                <div className="p-5 sm:p-7 lg:p-8">
                                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                                        {problem.name}
                                    </h3>

                                    {/* Description */}
                                    <div className="mt-5">
                                        <h4 className="text-sm font-bold text-slate-800">
                                            समस्येची माहिती
                                        </h4>

                                        <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base">
                                            {problem.description}
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div className="mt-5 rounded-xl bg-emerald-50 p-4 sm:p-5">
                                        <h4 className="flex items-center gap-2 font-bold text-emerald-900">
                                            <span aria-hidden="true">✓</span>
                                            उपाय व मार्गदर्शन
                                        </h4>

                                        <p className="mt-2 whitespace-pre-line text-sm leading-7 text-emerald-900/80 sm:text-base">
                                            {problem.solution}
                                        </p>
                                    </div>

                                    {/* Recommended Products */}
                                    {problem.products?.length > 0 && (
                                        <div className="mt-6">
                                            <h4 className="font-bold text-slate-900">
                                                संबंधित कृषी उत्पादने
                                            </h4>

                                            <div className="mt-3 flex flex-wrap gap-3">
                                                {problem.products.map((product) => (
                                                    <button
                                                        key={product.id}
                                                        type="button"
                                                        onClick={() => onViewProduct?.(product)}
                                                        className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                                                    >
                                                        {product.name}
                                                        <span aria-hidden="true">→</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center sm:py-16">
                    <div className="text-4xl" aria-hidden="true">
                        🌱
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                        रोग व समस्यांची माहिती लवकरच उपलब्ध होईल
                    </h3>

                    <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                        या पिकासाठी रोग व समस्यांबाबतची माहिती सध्या उपलब्ध नाही.
                        कृपया नंतर पुन्हा भेट द्या.
                    </p>
                </div>
            )}
        </section>
    )
}

export default DiseaseSection