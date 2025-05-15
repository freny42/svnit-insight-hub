
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface HostelCardProps {
  name: string;
  description: string;
  imgSrc: string;
  category: string;
  className?: string;
  onViewMenu?: () => void;
}

export function HostelCard({ name, description, imgSrc, category, onViewMenu, className }: HostelCardProps) {
  return (
    <div className={cn(
      "overflow-hidden rounded-xl bg-card border border-border/50 hover-card",
      className
    )}>
      <div className="aspect-video w-full overflow-hidden relative">
        <img
          src={imgSrc}
          alt={name}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{description}</p>
        {onViewMenu && (
          <Button variant="outline" size="sm" className="mt-3" onClick={onViewMenu}>
            View Mess Menu
          </Button>
        )}
      </div>
    </div>
  );
}
