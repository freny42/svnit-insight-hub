
import { cn } from "@/lib/utils";

interface CampusCardProps {
  title: string;
  description?: string;
  imgSrc: string;
  className?: string;
}

export function CampusCard({ title, description, imgSrc, className }: CampusCardProps) {
  return (
    <div className={cn(
      "overflow-hidden rounded-xl bg-card border border-border/50 hover-card group",
      className
    )}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
