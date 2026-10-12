function GuidenceSection({ stages = [] }) {
    return (
        <section className="py-16 sm:py-20">
            {/* Section Heading */}
            <div className="mb-10">
                <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                    टप्प्याटप्प्याने माहिती
                </span>

                <h2 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    पिकाचे मार्गदर्शन
                </h2>

                <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
                    पिकाच्या विविध अवस्थांनुसार आवश्यक माहिती आणि मार्गदर्शन येथे पहा.
                </p>
            </div>

            {/* Guidance Stages */}
            {stages.length > 0 ? (
                <div className="space-y-6">
                    {stages.map((stage, index) => (
                        <article
                            key={stage.id}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                        >
                            <div className="p-5 sm:p-7">
                                <div className="flex items-start gap-4 sm:gap-5">
                                    {/* Stage Number */}
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-800 sm:h-14 sm:w-14 sm:text-lg">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    {/* Stage Content */}
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                            {stage.title}
                                        </h3>

                                        {stage.duration && (
                                            <p className="mt-2 inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-600">
                                                <span aria-hidden="true">🗓️</span>
                                                <span>
                                                    <strong className="font-semibold">कालावधी:</strong>{" "}
                                                    {stage.duration}
                                                </span>
                                            </p>
                                        )}

                                        <div className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base">
                                            {stage.content}
                                        </div>
                                    </div>
                                </div>

                                {/* Optional Stage Image */}
                                {stage.image && (
                                    <div className="mt-6 sm:ml-[4.5rem]">
                                        <img
                                            src={stage.image}
                                            alt={stage.imageAlt || stage.title}
                                            loading="lazy"
                                            className="max-h-96 w-full rounded-xl object-cover sm:max-w-2xl"
                                        />
                                    </div>
                                )}
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
                        मार्गदर्शनाची माहिती लवकरच उपलब्ध होईल
                    </h3>

                    <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                        या पिकासाठी मार्गदर्शनाची माहिती अद्याप उपलब्ध नाही.
                        कृपया नंतर पुन्हा भेट द्या.
                    </p>
                </div>
            )}
        </section>

    )
}

export default GuidenceSection