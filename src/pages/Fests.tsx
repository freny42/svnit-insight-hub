
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Music, Share2, Star, Trophy } from "lucide-react";

const FestsPage = () => {
  return (
    <div className="space-y-8">
      <SectionHeader 
        title="College Festivals" 
        subtitle="Experience the vibrant cultural and technical festivals of SVNIT"
      />
      
      <Tabs defaultValue="mindbend" className="w-full">
        <TabsList className="flex flex-wrap h-auto mb-8">
          <TabsTrigger value="mindbend" className="px-4 py-2">
            MindBend - Techno Managerial Fest
          </TabsTrigger>
          <TabsTrigger value="sparsh" className="px-4 py-2">
            Sparsh - Cultural Fest
          </TabsTrigger>
        </TabsList>
        
        {/* MindBend Festival */}
        <TabsContent value="mindbend" className="mt-0">
          <div className="space-y-8">
            <div className="relative rounded-xl overflow-hidden h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGZlc3R8ZW58MHx8MHx8fDA%3D" 
                alt="MindBend Fest" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex items-end">
                <div className="p-6">
                  <h2 className="text-2xl font-bold">MindBend 2025</h2>
                  <div className="flex items-center mt-2">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-muted-foreground">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">About MindBend</h3>
                <p className="text-muted-foreground mb-4">
                  MindBend is SVNIT's annual techno-managerial festival that brings together 
                  talented engineering students from across the country. The event features various 
                  technical and managerial competitions, workshops, and guest lectures from 
                  industry experts and academic pioneers.
                </p>
                <p className="text-muted-foreground">
                  MindBend aims to foster innovation, technical acumen, and problem-solving 
                  skills among participants, providing a platform to showcase their talents and 
                  learn from peers and professionals.
                </p>
              </div>
              
              <div className="bg-card border border-border/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-primary" />
                  Featured Events
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Robowars</h4>
                      <p className="text-sm text-muted-foreground">Robot fighting competition where participants build combat robots</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Bridge Fiesta</h4>
                      <p className="text-sm text-muted-foreground">Civil engineering competition to design and build model bridges</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Chem-E-Car</h4>
                      <p className="text-sm text-muted-foreground">Chemical engineering competition for designing chemically powered model cars</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Guest Lectures</h4>
                      <p className="text-sm text-muted-foreground">Talks by eminent personalities from academia and industry</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D" 
                  alt="Robowars" 
                  className="h-full w-full object-cover aspect-video"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563fa8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZGdlJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D" 
                  alt="Bridge Fiesta" 
                  className="h-full w-full object-cover aspect-video"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWlzdHJ5JTIwbGFifGVufDB8fDB8fHww" 
                  alt="Chem-E-Car" 
                  className="h-full w-full object-cover aspect-video"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button>
                <Star className="mr-2 h-4 w-4" /> Register Interest
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" /> Share Event
              </Button>
            </div>
          </div>
        </TabsContent>
        
        {/* Sparsh Festival */}
        <TabsContent value="sparsh" className="mt-0">
          <div className="space-y-8">
            <div className="relative rounded-xl overflow-hidden h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VsdHVyYWwlMjBmZXN0fGVufDB8fDB8fHww" 
                alt="Sparsh Fest" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex items-end">
                <div className="p-6">
                  <h2 className="text-2xl font-bold">Sparsh 2025</h2>
                  <div className="flex items-center mt-2">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-muted-foreground">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">About Sparsh</h3>
                <p className="text-muted-foreground mb-4">
                  Sparsh is SVNIT's annual cultural festival that celebrates the diverse 
                  artistic and cultural talents of students. The event features music, 
                  dance, drama, literary competitions, and celebrity performances, creating 
                  a vibrant atmosphere of creativity and entertainment.
                </p>
                <p className="text-muted-foreground">
                  Sparsh provides a platform for students to showcase their artistic abilities, 
                  fostering a rich cultural exchange and building a sense of community among 
                  participants from various colleges across the country.
                </p>
              </div>
              
              <div className="bg-card border border-border/50 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Music className="h-5 w-5 mr-2 text-primary" />
                  Featured Events
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Singing Night</h4>
                      <p className="text-sm text-muted-foreground">Musical performances by talented student artists</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Dancing Night</h4>
                      <p className="text-sm text-muted-foreground">Dance competitions and performances showcasing various styles</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Celebrity Night</h4>
                      <p className="text-sm text-muted-foreground">Performances by renowned artists and celebrities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Fashion Show</h4>
                      <p className="text-sm text-muted-foreground">Student fashion showcase with creative themes</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Musical Night" 
                  className="h-full w-full object-cover aspect-video"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFuY2UlMjBwZXJmb3JtYW5jZXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Dance Performance" 
                  className="h-full w-full object-cover aspect-video"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNob3d8ZW58MHx8MHx8fDA%3D" 
                  alt="Fashion Show" 
                  className="h-full w-full object-cover aspect-video"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button>
                <Star className="mr-2 h-4 w-4" /> Register Interest
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" /> Share Event
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FestsPage;
