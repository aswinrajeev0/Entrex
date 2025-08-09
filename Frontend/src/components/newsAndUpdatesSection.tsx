import Image from "next/image";
import UpdatesCard from "./updatesCard";

export default function NewsAndUodatesSection() {
    return (
        <section className="mt-10 text-center">
            <h1 className="font-bold text-5xl">
                News & Updates
            </h1>

            <div className="my-8 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:mx-20">
                <UpdatesCard
                    imgSrc="/employees1.jpg"
                    heading="Surviving through tough times as a first time SaaS..."
                />
                
                <UpdatesCard
                    imgSrc="/employees2.png"
                    heading="SaaS customer development and no-code prototypes"
                />
                
                <UpdatesCard
                    imgSrc="/employees3.jpg"
                    heading="Highnote Emerges from Stealth with $54 Million in..."
                />
            </div>
            <span className="font-bold text-base text-blue-600 py-10">View more articles →</span>
        </section>
    )
}