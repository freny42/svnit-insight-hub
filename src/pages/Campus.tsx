
import { SectionHeader } from "@/components/ui/section-header";
import { CampusCard } from "@/components/ui/campus-card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Mock campus facilities data
const campusData = {
  "Academic Buildings": [
    {
      name: "Computer Engineering Department",
      description: "Houses computer labs, faculty offices, and research facilities for computing disciplines.",
      imgSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBsYWJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Electrical Engineering Department",
      description: "Advanced laboratories for electrical engineering research and education.",
      imgSrc: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWNhbCUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Mechanical Engineering Department",
      description: "Well-equipped workshops and laboratories for mechanical engineering studies.",
      imgSrc: "https://images.unsplash.com/photo-1581092160607-ee22731c9c8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVjaGFuaWNhbCUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
  "Libraries & Learning Centers": [
    {
      name: "Central Library",
      description: "Comprehensive collection of books, journals, and digital resources spanning all disciplines.",
      imgSrc: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Digital Learning Center",
      description: "Modern facility with access to online journals, e-books, and research databases.",
      imgSrc: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMGxpYnJhcnl8ZW58MHx8MHx8fDA%3D"
    }
  ],
  "Sports & Recreation": [
    {
      name: "Sports Complex",
      description: "Multi-purpose sports facility with indoor and outdoor areas for various games and activities.",
      imgSrc: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzJTIwY29tcGxleHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Swimming Pool",
      description: "Olympic-sized swimming pool with proper facilities and trained instructors.",
      imgSrc: "https://images.unsplash.com/photo-1576013551627-0ae7d1d192b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpbW1pbmclMjBwb29sfGVufDB8fDB8fHww"
    },
    {
      name: "Cricket Ground",
      description: "Well-maintained cricket field for matches and practice sessions.",
      imgSrc: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldCUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
  "Other Facilities": [
    {
      name: "Canteen",
      description: "Multiple food outlets offering a variety of cuisines to cater to diverse tastes.",
      imgSrc: "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZSUyMGNhbnRlZW58ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "RMS Store",
      description: "On-campus store for stationery, daily essentials, and academic supplies.",
      imgSrc: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcmV8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Auditorium",
      description: "State-of-the-art venue for cultural programs, seminars, and events.",
      imgSrc: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ]
};

const categories = Object.keys(campusData);

const CampusPage = () => {
  return (
    <div className="space-y-8">
      <SectionHeader 
        title="Campus Facilities" 
        subtitle="Explore the state-of-the-art facilities at SVNIT"
      />

      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="flex flex-wrap h-auto mb-8">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="px-4 py-2"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campusData[category as keyof typeof campusData].map((facility, index) => (
                <CampusCard
                  key={index}
                  title={facility.name}
                  description={facility.description}
                  imgSrc={facility.imgSrc}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="p-6 bg-card rounded-xl border border-border/50">
        <h3 className="text-xl font-semibold mb-3">Campus Infrastructure Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Wi-Fi enabled campus
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Smart classrooms
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              High-tech laboratories
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Medical center
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Bank and ATM facilities
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Post office
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Green campus initiative
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Solar power generation
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Rain water harvesting
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <Button variant="outline">
          Request Campus Tour
        </Button>
      </div>
    </div>
  );
};

export default CampusPage;
