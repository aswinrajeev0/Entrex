import { COMPANY_LOGOS } from "@/constants/companyLogos";

export default function CompaniesSection() {
    return (
        <div className="text-center mt-10">
            <h1 className="font-bold text-[56px]">Trusted by 1500+ popular companies</h1>
            <span className="font-normal text-base sm:text-lg lg:text-xl block max-w-5xl mx-auto mb-10">
                Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
            </span>

            <div className="flex flex-wrap justify-around gap-10 mt-30 mx-20">
                <div>
                    {COMPANY_LOGOS.GOOGLE}
                </div>

                <div>
                    {COMPANY_LOGOS.CREATIVE_MARKET}
                </div>

                <div>
                    {COMPANY_LOGOS.AIRBNB}
                </div>

                <div>
                    {COMPANY_LOGOS.SHOPIFY}
                </div>

                <div>
                    {COMPANY_LOGOS.AMAZON}
                </div>

                <div>
                    {COMPANY_LOGOS.DROPBOX}
                </div>

                <div>
                    {COMPANY_LOGOS.SPOTIFY}
                </div>

                <div>
                    {COMPANY_LOGOS.ASANA}
                </div>

                <div>
                    {COMPANY_LOGOS.DELIVEROO}
                </div>

                <div>
                    {COMPANY_LOGOS.NISSAN}
                </div>
            </div>
        </div>
    )
}