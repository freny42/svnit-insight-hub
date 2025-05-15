
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

// Mock clubs data
const clubs = [
  {
    id: 1,
    name: "GDSC - Google Developer Student Club",
    description: "Learning community focused on Google developer technologies for students to grow their knowledge.",
    imgSrc: "https://images.unsplash.com/photo-1573495627361-d9b87960b28d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    activities: ["Workshops", "Hackathons", "Tech Talks", "Study Jams"]
  },
  {
    id: 2,
    name: "ACM Student Chapter",
    description: "Association for Computing Machinery student chapter that promotes computing as a science and profession.",
    imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVhbXxlbnwwfHwwfHx8MA%3D%3D",
    activities: ["Research Projects", "Coding Contests", "Peer Learning"]
  },
  {
    id: 3,
    name: "Nexus Club",
    description: "Technology and innovation club focused on fostering creativity and technical skills.",
    imgSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWlzdHJ5JTIwbGFifGVufDB8fDB8fHww",
    activities: ["Project Development", "Technical Competitions", "Workshops"]
  },
  {
    id: 4,
    name: "Phoenix Club",
    description: "Literary and cultural club that promotes creativity in writing, speaking, and performing arts.",
    imgSrc: "https://images.unsplash.com/photo-1512149074996-e923ac45be6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWRpbmclMjBjbHVifGVufDB8fDB8fHww",
    activities: ["Poetry Slams", "Debates", "Literary Competitions", "Cultural Events"]
  },
  {
    id: 5,
    name: "Drishti Club",
    description: "Photography and visual arts club dedicated to capturing and creating visual content.",
    imgSrc: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    activities: ["Photography Contests", "Exhibitions", "Workshops", "Field Trips"]
  },
  {
    id: 6,
    name: "CHRD - Center for Human Resource Development",
    description: "A club focused on developing leadership and management skills in students.",
    imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lZXRpbmd8ZW58MHx8MHx8fDA%3D",
    activities: ["Leadership Workshops", "Personality Development", "Management Events"]
  },
  {
    id: 7,
    name: "RIAC - Robotics and Innovation Activity Center",
    description: "Club focused on robotics research, development, and innovation.",
    imgSrc: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    activities: ["Robot Building", "Competitions", "Research Projects", "Workshops"]
  },
  {
    id: 8,
    name: "Think India",
    description: "A forum for students to engage with social and national issues through discussion and action.",
    imgSrc: "https://images.unsplash.com/photo-1594003538519-a6938e83e4f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWElMjBmbGFnfGVufDB8fDB8fHww",
    activities: ["Social Initiatives", "Policy Discussions", "Public Speaking", "Community Service"]
  }
];

const ClubsPage = () => {
  return (
    <div className="space-y-8">
      <SectionHeader 
        title="Student Clubs" 
        subtitle="Explore our vibrant student communities and activities"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <Card key={club.id} className="hover-card">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={club.imgSrc}
                alt={club.name}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{club.name}</CardTitle>
              <CardDescription>{club.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {club.activities.map((activity, index) => (
                  <span 
                    key={index} 
                    className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
        <h3 className="text-xl font-semibold flex items-center">
          <Users className="h-5 w-5 mr-2 text-primary" />
          Join a Club
        </h3>
        <p className="text-muted-foreground">
          Getting involved in student clubs is a great way to develop new skills, make friends, and enhance your college experience. 
          SVNIT encourages all students to participate in extracurricular activities through these diverse clubs.
        </p>
        <div className="flex flex-col space-y-3 pt-2">
          <div className="flex items-start">
            <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">1</span>
            <p>Find a club that matches your interests and passions</p>
          </div>
          <div className="flex items-start">
            <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">2</span>
            <p>Contact the club coordinator or attend an introductory session</p>
          </div>
          <div className="flex items-start">
            <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">3</span>
            <p>Register as a member and start participating in club activities</p>
          </div>
        </div>
        <div className="pt-2">
          <Button>View Club Registration Guidelines</Button>
        </div>
      </div>
    </div>
  );
};

export default ClubsPage;
