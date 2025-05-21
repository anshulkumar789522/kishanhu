"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, Clock, MapPin, Plus, Sun, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

// Sample data for jobs
const jobs = [
  {
    id: 1,
    title: "Rice Harvesting",
    date: "2023-06-15",
    duration: "3 days",
    location: "North Field, Rajasthan",
    weather: "Sunny, 32°C",
    payment: "Cash on Delivery",
    status: "In Progress",
    laborers: 8,
    teamLeader: "Rajesh Kumar",
  },
  {
    id: 2,
    title: "Wheat Planting",
    date: "2023-07-01",
    duration: "2 days",
    location: "South Field, Rajasthan",
    weather: "Partly Cloudy, 30°C",
    payment: "Online",
    status: "Scheduled",
    laborers: 5,
    teamLeader: "Sunil Verma",
  },
  {
    id: 3,
    title: "Irrigation Setup",
    date: "2023-05-20",
    duration: "1 day",
    location: "East Field, Rajasthan",
    weather: "Sunny, 34°C",
    payment: "Cash on Delivery",
    status: "Completed",
    laborers: 3,
    teamLeader: "Amit Singh",
  },
]

export default function FarmerDashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <DashboardShell>
      <DashboardHeader heading="Farmer Dashboard" text="Post work requests and manage your agricultural labor needs">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" /> Post Work Request
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Post a New Work Request</DialogTitle>
              <DialogDescription>Fill in the details of the work you need done on your farm.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" placeholder="e.g., Rice Harvesting" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Start Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1day">1 Day</SelectItem>
                      <SelectItem value="2days">2 Days</SelectItem>
                      <SelectItem value="3days">3 Days</SelectItem>
                      <SelectItem value="1week">1 Week</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Field location" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="laborers">Number of Laborers Needed</Label>
                <Input id="laborers" type="number" min="1" placeholder="e.g., 5" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea id="description" placeholder="Describe the work that needs to be done" />
              </div>
              <div className="grid gap-2">
                <Label>Payment Method</Label>
                <RadioGroup defaultValue="cash">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Cash on Delivery</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online">Online Payment</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  // In a real app, we would handle form submission here
                  setIsDialogOpen(false)
                }}
              >
                Post Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DashboardHeader>
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Jobs</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((job) => job.status === "In Progress")
              .map((job) => (
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
                      <div className="mt-2 border-t pt-2">
                        <p className="font-medium">Team Leader: {job.teamLeader}</p>
                        <p>Laborers: {job.laborers} assigned</p>
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
        <TabsContent value="scheduled" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((job) => job.status === "Scheduled")
              .map((job) => (
                <Card key={job.id}>
                  <CardHeader className="pb-2">
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-blue-600">
                        <div className="mr-1 h-2 w-2 rounded-full bg-blue-600"></div>
                        Scheduled
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
                      <div className="mt-2 border-t pt-2">
                        <p className="font-medium">Team Leader: {job.teamLeader}</p>
                        <p>Laborers: {job.laborers} assigned</p>
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((job) => job.status === "Completed")
              .map((job) => (
                <Card key={job.id}>
                  <CardHeader className="pb-2">
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-gray-600">
                        <div className="mr-1 h-2 w-2 rounded-full bg-gray-600"></div>
                        Completed
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
                      <div className="mt-2 border-t pt-2">
                        <p className="font-medium">Team Leader: {job.teamLeader}</p>
                        <p>Laborers: {job.laborers} assigned</p>
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
      </Tabs>
    </DashboardShell>
  )
}
