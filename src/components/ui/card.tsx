import React from "react";
import { cn } from "@/src/lib/utils";
import { Avatar,AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";
import { Link } from "lucide-react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  tech?: string;
  image?: string;
}

const Card: React.FC<CardProps | any> = (card) => {
  const {className, title, description, image,tech, ...props} = card
  return(
  <div
    className={cn(
      " w-[175px] md:w-[220px] items-center overflow-hidden relative  gap-5 min-h-[175px] justify-between flex flex-col px-4 py-4 rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  >

  {tech && 
  <Badge variant={'secondary'} className="absolute bg-green-200 rounded-md -right-1 top-0">{tech}</Badge>}
    <div className="w-full flex justify-between">
   {image && 
    <Avatar>
          <AvatarImage src={`${image}`} alt="@shadcn" />
          <AvatarFallback>Fall Back</AvatarFallback>
    </Avatar>
  }

    </div>
 
  <div className=" flex flex-col gap-5">
    {title && <h2 className="text-xl font-semibold">{title}</h2>}
    {description && <p className="leading-none text-md indent-1 ">{description}</p>}
  </div>
  <div className="w-full">
    <Link href=""></Link>

  </div>
  </div>
);


}
export default Card;
