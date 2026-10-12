import GuidanceSection from "../components/GuidenceSection";
import { guidanceData } from "../data/guidenceData";
import { Link, useParams } from "react-router-dom";
import AvailableVarities from "../components/AvailableVarieties"
import products from "../data/productsData"
const cropData = {
    banana: {
        name: "केळी",
        image: "/images/crops/banana.jpg",
        description:
            "केळी पिकाच्या लागवडीपासून काढणीपर्यंतची माहिती, पिकाचे व्यवस्थापन आणि संबंधित कृषी उत्पादनांची माहिती येथे मिळवा.",
    },

    cotton: {
        name: "कापूस",
        image: "/images/crops/cotton.jpg",
        description:
            "कापूस पिकाचे व्यवस्थापन, पिकाच्या विविध अवस्था आणि संबंधित कृषी उत्पादनांची माहिती येथे मिळवा.",
    },

    watermelon: {
        name: "कलिंगड",
        image: "/images/crops/watermelon.jpg",
        description:
            "कलिंगड पिकाचे व्यवस्थापन, पिकाच्या विविध अवस्था आणि संबंधित कृषी उत्पादनांची माहिती येथे मिळवा.",
    },

    papaya: {
        name: "पपई",
        image: "/images/crops/papaya.jpg",
        description:
            "पपई पिकाचे व्यवस्थापन, पिकाच्या विविध अवस्था आणि संबंधित कृषी उत्पादनांची माहिती येथे मिळवा.",
    },

    maize: {
        name: "मका",
        image: "/images/crops/maize.jpg",
        description:
            "मका पिकाचे व्यवस्थापन, पिकाच्या विविध अवस्था आणि संबंधित कृषी उत्पादनांची माहिती येथे मिळवा.",
    },

    sorghum: {
        name: "ज्वारी",
        image: "/images/crops/jowar.jpg",
        description:
            "ज्वारी पिकाचे व्यवस्थापन, पिकाच्या विविध अवस्था आणि संबंधित कृषी उत्पादनांची माहिती येथे मिळवा.",
    },

    "pearl-millet": {
        name: "बाजरी",
        image: "/images/crops/bajra.jpg",
        description:
            "बाजरी पिकाचे व्यवस्थापन, पिकाच्या विविध अवस्था आणि संबंधित कृषी उत्पादनांची माहिती येथे मिळवा.",
    },
};



function CropDetails() {
    const { slug } = useParams();

    const crop = cropData[slug];
    const stages = guidanceData[slug] || [];

    const cropProducts = products.filter((product)=>product.cropSlugs.includes(slug));

    if (!crop) {
        return (
            <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
                <h1 className="text-3xl font-bold text-slate-900">
                    पीक सापडले नाही
                </h1>

                <p className="mt-3 text-slate-600">
                    कृपया उपलब्ध पिकांमधून योग्य पीक निवडा.
                </p>

                <Link
                    to="/crops"
                    className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >
                    सर्व पिके पहा
                </Link>
            </main>
        );
    }



    return (
        <main className="min-h-screen bg-slate-50">

            {/* Crop Hero */}
            <section className="relative isolate overflow-hidden">
                <div aria-hidden="true" className="absolute inset-0 -z-10">
                    <img
                        src={crop.image}
                        alt=""
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/70 to-black/40" />
                </div>

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
                    <Link
                        to="/crops"
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-100 transition hover:text-white sm:text-base"
                    >
                        <span aria-hidden="true">←</span>
                        सर्व पिके
                    </Link>

                    <div className="mt-10 max-w-3xl">
                        <span className="inline-block rounded-full border border-emerald-300/30 bg-emerald-900/50 px-4 py-1.5 text-sm font-medium text-emerald-100 backdrop-blur-sm">
                            पीक मार्गदर्शन
                        </span>

                        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
                            {crop.name}
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                            {crop.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Crop Information Navigation */}
            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        पिकाची संपूर्ण माहिती
                    </h2>

                    <p className="mt-3 text-slate-600">
                        तुमच्या पिकासाठी आवश्यक माहिती खालील विभागांमध्ये पहा.
                    </p>
                </div>

                {/* Crop Guidance */}
                <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                    <GuidanceSection stages={stages} />
                </section>

                <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                    <AvailableVarities products={cropProducts} />
                </section>

            </section>
        </main>
    )
}

export default CropDetails