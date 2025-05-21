"use client"

import Link from "next/link"
import { CalendarIcon, Check, Clock, MapPin, Sun, User, Wallet, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample data for job offers
const jobOffers = [
  {
    id: 1,
    title: "Rice Harvesting",
    farmer: "Ramesh Patel",
    teamLeader: "Rajesh Kumar",
    date: "2023-06-15",
    duration: "3 days",
    location: "North Field, Rajasthan",
    weather: "Sunny, 32°C",
    payment: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2,
    title: "Wheat Planting",
    farmer: "Suresh Sharma",
    teamLeader: "Sunil Verma",
    date: "2023-07-01",
    duration: "2 days",
    location: "South Field, Rajasthan",
    weather: "Partly Cloudy, 30°C",
    payment: "Online",
    status: "Pending",
  },
]

// Sample data for active jobs
const activeJobs = [
  {
    id: 3,
    title: "Irrigation Setup",
    farmer: "Mahesh Gupta",
    teamLeader: "Amit Singh",
    date: "2023-05-20",
    duration: "1 day",
    location: "East Field, Rajasthan",
    weather: "Sunny, 34°C",
    payment: "Cash on Delivery",
    status: "In Progress",
  },
]

export default function LaborerDashboard() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Laborer Dashboard"
        text="View job offers and manage your agricultural work assignments"
      />
      <Tabs defaultValue="offers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="offers">Job Offers</TabsTrigger>
          <TabsTrigger value="active">Active Jobs</TabsTrigger>
          <TabsTrigger value="completed">Job History</TabsTrigger>
          <TabsTrigger value="profile">My Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="offers" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobOffers.map((job) => (
              <Card key={job.id}>
                <CardHeader className="pb-2">
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center">
                      <span>Team Leader: {job.teamLeader}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Farmer: {job.farmer}</span>
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
                      <Sun className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.weather}</span>
                    </div>
                    <div className="flex items-center">
                      <Wallet className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.payment}</span>
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
                  <Button size="sm" className="w-[48%] bg-green-600 hover:bg-green-700">
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
                      <User className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Farmer: {job.farmer}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Team Leader: {job.teamLeader}</span>
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
                      <Wallet className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{job.payment}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/jobs/${job.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">No completed jobs yet</h3>
              <p className="text-sm text-gray-500">Your completed jobs will appear here</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
              <CardDescription>Your personal and professional information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-xl font-medium">Rakesh Kumar</h3>
                  <p className="text-sm text-gray-500">Agricultural Laborer</p>
                  <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
                    <Badge variant="outline">Harvesting</Badge>
                    <Badge variant="outline">Planting</Badge>
                    <Badge variant="outline">Irrigation</Badge>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t">
                <h4 className="font-medium">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <p>+91 9876543210</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                    <p>+91 9876543210</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Address</p>
                    <p>123 Village Road, District, Rajasthan</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t">
                <h4 className="font-medium">Work Experience</h4>
                <p>5 years of experience in agricultural labor</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/profile/edit">Edit Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
