
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { CampusCard } from "@/components/ui/campus-card";
import { Calendar, Map, MapPin, School } from "lucide-react";

const HomePage = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative -mt-6 -mx-4 md:-mx-8 lg:-mx-16 h-[500px] overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="text-center space-y-4 animate-fade-in max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">Sardar Vallabhbhai</span>
              <br />
              National Institute of Technology
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Excellence in Engineering Education, Research and Innovation
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button size="lg">
                <Calendar className="mr-2 h-4 w-4" /> Upcoming Events
              </Button>
              <Button variant="outline" size="lg">
                <School className="mr-2 h-4 w-4" /> Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="animate-on-scroll">
        <SectionHeader 
          title="About SVNIT" 
          subtitle="One of the pioneering technical institutes of India"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Sardar Vallabhbhai National Institute of Technology, Surat (SVNIT) is one of the 31 National 
              Institutes of Technology in India established to provide high-quality technical education to 
              students across the country.
            </p>
            <p className="text-muted-foreground">
              The institute was established in 1961 as Sardar Vallabhbhai Regional College of Engineering & Technology 
              and was granted the status of National Institute of Technology, along with Deemed University status, 
              in 2002. SVNIT is a premier institute that offers undergraduate, postgraduate and doctoral programs 
              in various disciplines of engineering and technology.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="outline">
                Academic Programs
              </Button>
              <Button variant="outline">
                Research
              </Button>
              <Button variant="outline">
                History
              </Button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-full min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
              alt="SVNIT Campus" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="animate-on-scroll">
        <SectionHeader 
          title="Recent Highlights" 
          subtitle="Latest achievements and events at SVNIT"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CampusCard 
            title="International Conference on Advanced Computing" 
            description="SVNIT hosted the International Conference on Advanced Computing and Communications (ICACC)."
            imgSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
          />
          <CampusCard 
            title="Research Excellence Award" 
            description="SVNIT faculty received the National Research Excellence Award for contributions to sustainable technology."
            imgSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
          />
          <CampusCard 
            title="MOU with Industry Leaders" 
            description="SVNIT signed Memorandums of Understanding with leading technology companies to enhance industry-academia collaboration."
            imgSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          />
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">View All News</Button>
        </div>
      </section>

      {/* Campus Location */}
      <section className="animate-on-scroll">
        <SectionHeader 
          title="Campus Location" 
          subtitle="How to reach SVNIT"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border/50 p-5 rounded-xl space-y-4">
            <h3 className="text-lg font-medium flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Address
            </h3>
            <p className="text-muted-foreground">
              SVNIT Campus, Ichchhanath, <br />
              Surat - 395007, Gujarat, India
            </p>
            <div className="space-y-2">
              <h4 className="font-medium">Getting Here:</h4>
              <div className="text-sm text-muted-foreground">
                <p className="mb-1"><strong>By Air:</strong> Surat Airport (25 minutes)</p>
                <p className="mb-1"><strong>By Train:</strong> Surat Railway Station (20 minutes)</p>
                <p className="mb-1"><strong>By Road:</strong> Well connected to major highways</p>
              </div>
            </div>
            <Button className="mt-2">
              <Map className="mr-2 h-4 w-4" /> Get Directions
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden h-[300px] bg-muted">
            {/* Maps would ideally be implemented as an actual interactive map */}
            <iframe
              title="SVNIT Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0409241165197!2d72.7810107!3d21.1646357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04db12da2663b%3A0xfcfee1b4888e035c!2sSVNIT%2C%20Sardar%20Vallabhbhai%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1621341892180!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
