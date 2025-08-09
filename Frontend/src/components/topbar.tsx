import React from "react";

export default function TopBar() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-2 bg-white text-black text-sm md:text-base text-center md:text-left gap-1">
            <span>bookings@entrix.in</span>
            <span>
                +91 44 4953 0055 | +91 98400 27990 | +91 91767 81444
            </span>
        </div>
    );
}
