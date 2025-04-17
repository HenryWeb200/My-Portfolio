import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip lg:py-24">
      <div className="bg-gradient-to-r from-emerald-500 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Animated wrapper */}
          <div className="flex gap-4 flex-none py-3 animate-move-left [animation-duration:25s] whitespace-nowrap">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word, index) => (
                  <div key={`${word}-${idx}-${index}`} className="inline-flex gap-4 items-center px-2">
                    <span className="text-gray-900 text-sm uppercase font-extrabold">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
