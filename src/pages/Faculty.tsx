
import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { FacultyCard } from "@/components/ui/faculty-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock faculty data
const facultyData = {
  "Computer Engineering": [
    {
      name: "Dr. Anand Kumar",
      position: "Professor & Head of Department",
      department: "Computer Engineering",
      imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      email: "anand@svnit.ac.in"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Associate Professor",
      department: "Computer Engineering",
      imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc29yfGVufDB8fDB8fHww",
      email: "priya@svnit.ac.in"
    },
    {
      name: "Dr. Rajesh Patel",
      position: "Assistant Professor",
      department: "Computer Engineering",
      imgSrc: "https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      email: "rajesh@svnit.ac.in"
    }
  ],
  "Electrical Engineering": [
    {
      name: "Dr. Sunil Mehta",
      position: "Professor & Head of Department",
      department: "Electrical Engineering",
      imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      email: "sunil@svnit.ac.in"
    },
    {
      name: "Dr. Kavita Singh",
      position: "Associate Professor",
      department: "Electrical Engineering",
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc29yfGVufDB8fDB8fHww",
      email: "kavita@svnit.ac.in"
    }
  ],
  "Mechanical Engineering": [
    {
      name: "Dr. Mohan Desai",
      position: "Professor & Head of Department",
      department: "Mechanical Engineering",
      imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      email: "mohan@svnit.ac.in"
    },
    {
      name: "Dr. Anjali Joshi",
      position: "Associate Professor",
      department: "Mechanical Engineering",
      imgSrc: "https://images.unsplash.com/photo-1580894732930-0babd100d356?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc29yfGVufDB8fDB8fHww",
      email: "anjali@svnit.ac.in"
    },
    {
      name: "Dr. Vikram Agarwal",
      position: "Assistant Professor",
      department: "Mechanical Engineering",
      imgSrc: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      email: "vikram@svnit.ac.in"
    }
  ],
  "Civil Engineering": [
    {
      name: "Dr. Ashish Verma",
      position: "Professor & Head of Department",
      department: "Civil Engineering",
      imgSrc: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      email: "ashish@svnit.ac.in"
    },
    {
      name: "Dr. Neha Reddy",
      position: "Associate Professor",
      department: "Civil Engineering",
      imgSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc29yfGVufDB8fDB8fHww",
      email: "neha@svnit.ac.in"
    }
  ]
};

const departments = Object.keys(facultyData);

const FacultyPage = () => {
  const [activeTab, setActiveTab] = useState(departments[0]);

  return (
    <div className="space-y-8">
      <SectionHeader 
        title="Faculty" 
        subtitle="Meet our distinguished faculty members from various departments"
      />

      <Tabs defaultValue={departments[0]} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex flex-wrap h-auto mb-8">
          {departments.map((dept) => (
            <TabsTrigger 
              key={dept} 
              value={dept}
              className="px-4 py-2 data-[state=active]:bg-primary/10"
            >
              {dept}
            </TabsTrigger>
          ))}
        </TabsList>

        {departments.map((dept) => (
          <TabsContent key={dept} value={dept} className="mt-0">
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gradient">{dept} Department</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facultyData[dept as keyof typeof facultyData].map((faculty, index) => (
                  <FacultyCard
                    key={index}
                    name={faculty.name}
                    department={faculty.department}
                    position={faculty.position}
                    imgSrc={faculty.imgSrc}
                    email={faculty.email}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center pt-4">
        <Button variant="outline">
          View Faculty Publications
        </Button>
      </div>
    </div>
  );
};

export default FacultyPage;
