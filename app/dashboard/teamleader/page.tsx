"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, Check, Clock, MapPin, Sun, UserPlus, Wallet, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Sample data for job requests
const jobRequests = [
  {
    id: 1,
    title: "Rice Harvesting",
    farmer: "Ramesh Patel",
    date: "2023-06-15",
    duration: "3 days",
    location: "North Field, Rajasthan",
    weather: "Sunny, 32°C",
    payment: "Cash on Delivery",
    laborersNeeded: 8,
    status: "Pending",
  },
  {
    id: 2,
    title: "Wheat Planting",
    farmer: "Suresh Sharma",
    date: "2023-07-01",
    duration: "2 days",
    location: "South Field, Rajasthan",
    weather: "Partly Cloudy, 30°C",
    payment: "Online",
    laborersNeeded: 5,
    status: "Pending",
  },
]

// Sample data for active jobs
const activeJobs = [
  {
    id: 3,
    title: "Irrigation Setup",
    farmer: "Mahesh Gupta",
    date: "2023-05-20",
    duration: "1 day",
    location: "East Field, Rajasthan",
    weather: "Sunny, 34°C",
    payment: "Cash on Delivery",
    laborersNeeded: 3,
    laborersAssigned: 3,
    status: "In Progress",
  },
]

// Sample data for laborers
const laborers = [
  {
    id: 1,
    name: "Rakesh Kumar",
    skills: ["Harvesting", "Planting"],
    experience: "5 years",
    rating: 4.8,
    availability: "Available",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Sunita Devi",
    skills: ["Harvesting", "Weeding"],
    experience: "3 years",
    rating: 4.5,
    availability: "Available",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Mohan Singh",
    skills: ["Irrigation", "Planting"],
    experience: "7 years",
    rating: 4.9,
    availability: "Available",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Geeta Kumari",
    skills: ["Harvesting", "Weeding"],
    experience: "2 years",
    rating: 4.2,
    availability: "Available",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Raju Verma",
    skills: ["Planting", "Irrigation"],
    experience: "4 years",
    rating: 4.6,
    availability: "Available",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TeamLeaderDashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [selectedLaborers, setSelectedLaborers] = useState<number[]>([])

  const handleAcceptJob = (job: any) => {
    setSelectedJob(job)
    setIsDialogOpen(true)
  }

  const handleLaborerSelection = (laborerId: number) => {
    setSelectedLaborers((prev) => {
      if (prev.includes(laborerId)) {
        return prev.filter((id) => id !== laborerId)
      } else {
        return [...prev, laborerId]
      }
    })
  }

  const handleAssignLaborers = () => {
    // In a real app, we would handle the assignment logic here
    setIsDialogOpen(false)
    setSelectedLaborers([])
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Team Leader Dashboard"
        text="Manage job requests and assign laborers to agricultural tasks"
      />
      <Tabs defaultValue="requests" className="space-y-4">
        <TabsList>
          <TabsTrigger value="requests">Job Requests</TabsTrigger>
          <TabsTrigger value="active">Active Jobs</TabsTrigger>
          <TabsTrigger value="laborers">Laborers</TabsTrigger>
        </TabsList>
        <TabsContent value="requests" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobRequests.map((job) => (
              <Card key={job.id}>
                <CardHeader className="pb-2">
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center">
                      <span>Requested by: {job.farmer}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Sun className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.weather}</span>
                    </div>
                    <div className="flex items-center">
                      <Wallet className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.payment}</span>
                    </div>
                    <div className="flex items-center">
                      <UserPlus className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Laborers needed: {job.laborersNeeded}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-[48%] text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                  >
                    <X className="mr-2 h-4 w-4" /> Decline
                  </Button>
                  <Button
                    size="sm"
                    className="w-[48%] bg-green-600 hover:bg-green-700"
                    onClick={() => handleAcceptJob(job)}
                  >
                    <Check className="mr-2 h-4 w-4" /> Accept
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activeJobs.map((job) => (
              <Card key={job.id}>
                <CardHeader className="pb-2">
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center text-green-600">
                      <div className="mr-1 h-2 w-2 rounded-full bg-green-600"></div>
                      In Progress
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center">
                      <span className="font-medium">Farmer:</span>
                      <span className="ml-2">{job.farmer}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <UserPlus className="mr-2 h-4 w-4 text-gray-500" />
                      <span>
                        Laborers: {job.laborersAssigned}/{job.laborersNeeded}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/jobs/${job.id}`}>Manage Job</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="laborers" className="space-y-4">
          <div className="rounded-md border">
            <div className="p-4">
              <h3 className="text-lg font-medium">Available Laborers</h3>
              <p className="text-sm text-gray-500">Manage your team of agricultural laborers</p>
            </div>
            <div className="border-t">
              {laborers.map((laborer) => (
                <div key={laborer.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={laborer.avatar || "/placeholder.svg"} alt={laborer.name} />
                      <AvatarFallback>{laborer.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{laborer.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {laborer.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right mr-4">
                      <p className="text-sm text-gray-500">{laborer.experience}</p>
                      <p className="text-sm">Rating: {laborer.rating}/5</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/laborers/${laborer.id}`}>View Profile</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Dialog for assigning laborers */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Assign Laborers</DialogTitle>
            <DialogDescription>
              Select laborers to assign to this job. {selectedJob?.laborersNeeded} laborers needed.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[300px] overflow-y-auto">
            {laborers.map((laborer) => (
              <div key={laborer.id} className="flex items-center space-x-4 py-2 border-b last:border-b-0">
                <Checkbox
                  id={`laborer-${laborer.id}`}
                  checked={selectedLaborers.includes(laborer.id)}
                  onCheckedChange={() => handleLaborerSelection(laborer.id)}
                />
                <Label htmlFor={`laborer-${laborer.id}`} className="flex-1 flex items-center space-x-3 cursor-pointer">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={laborer.avatar || "/placeholder.svg"} alt={laborer.name} />
                    <AvatarFallback>{laborer.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{laborer.name}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {laborer.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Label>
              </div>
            ))}
          </div>
          <DialogFooter className="mt-4">
            <div className="w-full flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Selected: {selectedLaborers.length}/{selectedJob?.laborersNeeded}
              </p>
              <div>
                <Button variant="outline" className="mr-2" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleAssignLaborers}
                  disabled={selectedLaborers.length === 0}
                >
                  Assign Laborers
                </Button>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  )
}
