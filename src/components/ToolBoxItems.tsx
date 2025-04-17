
import { twMerge } from "tailwind-merge";
import { TechIcons } from "./techIcons"
import { Fragment } from "react";

export const ToolBoxItems = ({
     items, 
     className,
     ItemsWrapperClassName, 
    }: {
    items: {
        title: string;
        iconType: React.ElementType;
    }[];
    className?: string;
    ItemsWrapperClassName?: string;
}) => {
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
         <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", ItemsWrapperClassName)}>
        {[...new Array(2).fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map(items => (
            <div key={items.title} className="inline-flex gap-4 items-center rounded-lg py-2 px-3 outline outline-2 outline-white/40">
              <TechIcons component={items.iconType} />
              <span className="font-semibold">{items.title}</span>
            </div>
          ))}
          </Fragment>
        ))]}
          
         </div>
        </div>
    )
}