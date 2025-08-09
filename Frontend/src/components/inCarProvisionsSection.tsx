import { SVG_ICONS } from "@/constants/icons";
import ProvisionCard from "./provisionCard";

export default function InCarProvisionsSection() {
  return (
    <>
      {/* Header */}
      <div className="text-center mt-6 sm:mt-10 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          In-car Provisions
        </h1>
        <span className="text-sm sm:text-lg font-bold block mt-2">
          Every ENTREX ride comes with thoughtful in-car provisions to ensure
          your comfort, safety, and satisfaction.
        </span>
      </div>

      {/* Cards */}
      <div
        className="
          flex flex-wrap justify-center gap-6 mt-6 sm:mt-10 
          mx-4 sm:mx-10 md:mx-20
          sm:grid sm:grid-cols-2 lg:flex
        "
      >
        <ProvisionCard svg={SVG_ICONS.WATER_BOTTLE} provisionName="Water bottle" />
        <ProvisionCard svg={SVG_ICONS.NEWS_PAPER} provisionName="News paper" />
        <ProvisionCard svg={SVG_ICONS.TISSUE_PAPER_POUCH} provisionName="Tissue paper pouch" />
        <ProvisionCard svg={SVG_ICONS.COOKIES} provisionName="Cookies" />
        <ProvisionCard svg={SVG_ICONS.WRITING_SLIP} provisionName="Writing slip & pen" />
        <ProvisionCard svg={SVG_ICONS.ICE_BOX} provisionName="Ice Box (Based on request)" />
        <ProvisionCard svg={SVG_ICONS.FIRE_EXTENGUSHER} provisionName="Fire Extengusher Kit" />
        <ProvisionCard svg={SVG_ICONS.PERFUME} provisionName="Perfume" />
        <ProvisionCard svg={SVG_ICONS.HAND_PHONE_CHARGER} provisionName="Hand-phone Charger" />
        <ProvisionCard svg={SVG_ICONS.GPS_TRACKING} provisionName="GPS Tracking" />
        <ProvisionCard svg={SVG_ICONS.UMBRELLA} provisionName="Umbrella" />
        <ProvisionCard svg={SVG_ICONS.TORCH_LIGHT} provisionName="Torch Light" />
        <ProvisionCard svg={SVG_ICONS.FIRST_AID_KIT} provisionName="First Aid Kit" />
      </div>

      {/* Button */}
      <div className="text-center mt-6 sm:mt-10 px-4 sm:px-0">
        <button
          type="button"
          className="
            bg-gradient-to-r from-red-500 to-orange-400 
            transform rounded-[140px] 
            w-full sm:w-[270px] 
            h-[45px] sm:h-[50px] 
            text-sm sm:text-base md:text-lg
            font-bold text-white
          "
        >
          Book your journey now
        </button>
      </div>
    </>
  );
}
