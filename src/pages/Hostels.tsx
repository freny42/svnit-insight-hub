
import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { HostelCard } from "@/components/ui/hostel-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Mock hostel data
const hostels = [
  {
    id: 1,
    name: "Mother Teresa Bhavan",
    description: "All-year residence for female students with modern amenities and necessary facilities.",
    imgSrc: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsfGVufDB8fDB8fHww",
    category: "Girls",
    type: "All Years"
  },
  {
    id: 2,
    name: "Gajjar Bhavan",
    description: "Dedicated residence for first-year male students with supportive environment for newcomers.",
    imgSrc: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsfGVufDB8fDB8fHww",
    category: "Boys",
    type: "1st Year"
  },
  {
    id: 3,
    name: "Swami Vivekanand Bhavan",
    description: "Residence for second-year male students with spaces for academic and recreational activities.",
    imgSrc: "https://images.unsplash.com/photo-1596276020587-8044fe049813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zdGVsfGVufDB8fDB8fHww",
    category: "Boys",
    type: "2nd Year"
  },
  {
    id: 4,
    name: "Bhabha Bhavan",
    description: "Designed for third-year male students with enhanced facilities for academic pursuits.",
    imgSrc: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zdGVsfGVufDB8fDB8fHww",
    category: "Boys",
    type: "3rd Year"
  },
  {
    id: 5,
    name: "Nehru Bhavan",
    description: "Modern accommodation for senior male students with advanced amenities and independent spaces.",
    imgSrc: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9zdGVsfGVufDB8fDB8fHww",
    category: "Boys",
    type: "Senior Year"
  },
  {
    id: 6,
    name: "Raman Bhavan",
    description: "Residence hall for senior students with dedicated spaces for project work and research.",
    imgSrc: "https://images.unsplash.com/photo-1629794226066-349748040fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Boys",
    type: "Senior Year"
  }
];

// Mock mess menu data
const messMenuData = {
  "Monday": {
    breakfast: "Poha, Bread & Butter, Tea/Coffee",
    lunch: "Chapati, Rice, Dal Fry, Mixed Vegetable, Salad",
    dinner: "Chapati, Rice, Paneer Butter Masala, Dal Tadka, Fruit"
  },
  "Tuesday": {
    breakfast: "Upma, Boiled Eggs, Tea/Coffee",
    lunch: "Chapati, Rice, Yellow Dal, Aloo Gobi, Salad",
    dinner: "Chapati, Rice, Rajma, Jeera Aloo, Ice Cream"
  },
  "Wednesday": {
    breakfast: "Aloo Paratha, Curd, Tea/Coffee",
    lunch: "Chapati, Rice, Dal Makhani, Bhindi Fry, Salad",
    dinner: "Chapati, Rice, Chole, Mix Veg Curry, Fruit"
  },
  "Thursday": {
    breakfast: "Idli Sambar, Chutney, Tea/Coffee",
    lunch: "Chapati, Rice, Moong Dal, Matar Paneer, Salad",
    dinner: "Chapati, Rice, Dal Tadka, Aloo Matar, Sweet"
  },
  "Friday": {
    breakfast: "Vegetable Sandwich, Tea/Coffee",
    lunch: "Chapati, Rice, Toor Dal, Egg Curry/Aloo Curry, Salad",
    dinner: "Chapati, Fried Rice, Dal Fry, Seasonal Vegetable, Fruit"
  },
  "Saturday": {
    breakfast: "Puri Bhaji, Tea/Coffee",
    lunch: "Chapati, Rice, Sambar, Veg Korma, Salad",
    dinner: "Chapati, Rice, Kadhi, Aloo Beans, Kheer"
  },
  "Sunday": {
    breakfast: "Chole Bhature, Tea/Coffee",
    lunch: "Chapati, Pulao, Dal Tadka, Paneer Curry, Salad, Sweet",
    dinner: "Chapati, Rice, Dal Fry, Mix Veg, Fruit"
  }
};

const days = Object.keys(messMenuData);

const HostelsPage = () => {
  const [selectedHostel, setSelectedHostel] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const handleViewMenu = (hostelName: string) => {
    setSelectedHostel(hostelName);
    setShowDialog(true);
  };

  return (
    <div className="space-y-8">
      <SectionHeader 
        title="Hostels" 
        subtitle="Accommodation facilities for SVNIT students"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hostels.map((hostel) => (
          <HostelCard
            key={hostel.id}
            name={hostel.name}
            description={hostel.description}
            imgSrc={hostel.imgSrc}
            category={hostel.category + " • " + hostel.type}
            onViewMenu={() => handleViewMenu(hostel.name)}
          />
        ))}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedHostel} - Mess Menu</DialogTitle>
            <DialogDescription>
              Weekly mess menu schedule for all hostels
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue={days[0]} className="w-full">
            <TabsList className="flex flex-wrap h-auto mb-4">
              {days.map((day) => (
                <TabsTrigger key={day} value={day}>
                  {day}
                </TabsTrigger>
              ))}
            </TabsList>
            {days.map((day) => (
              <TabsContent key={day} value={day} className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Meal</TableHead>
                      <TableHead>Menu</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Breakfast</TableCell>
                      <TableCell>{messMenuData[day as keyof typeof messMenuData].breakfast}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Lunch</TableCell>
                      <TableCell>{messMenuData[day as keyof typeof messMenuData].lunch}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Dinner</TableCell>
                      <TableCell>{messMenuData[day as keyof typeof messMenuData].dinner}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="p-6 bg-card rounded-xl border border-border/50">
        <h3 className="text-lg font-semibold mb-3">Hostel Facilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Wi-Fi connectivity throughout
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              24/7 hot and cold water
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Indoor games facilities
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Well-equipped gym
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Reading rooms
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Laundry services
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              24/7 security
            </p>
            <p className="flex items-center">
              <span className="bg-primary/20 text-primary p-1 rounded mr-2">✓</span>
              Medical facilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelsPage;
