"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SignupPage() {
  const router = useRouter()
  const [userRole, setUserRole] = useState<string>("farmer")
  const [formStep, setFormStep] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would handle signup logic here
    router.push(`/dashboard/${userRole}`)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center text-sm font-medium text-green-600"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-green-800">Create an account</h1>
          <p className="text-sm text-gray-500">Enter your details below to create your account</p>
        </div>
        <Card>
          <form onSubmit={handleSubmit}>
            {formStep === 0 ? (
              <>
                <CardHeader>
                  <CardTitle>Select your role</CardTitle>
                  <CardDescription>Choose the role that best describes you</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue={userRole} onValueChange={setUserRole} className="grid grid-cols-1 gap-4">
                    <div>
                      <RadioGroupItem value="farmer" id="farmer" className="peer sr-only" />
                      <Label
                        htmlFor="farmer"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mb-3 h-6 w-6"
                        >
                          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" />
                          <path d="M12 11.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                          <path d="M12 11.5V19" />
                          <path d="M9 19h6" />
                        </svg>
                        Farmer (Kishan)
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="teamleader" id="teamleader" className="peer sr-only" />
                      <Label
                        htmlFor="teamleader"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mb-3 h-6 w-6"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        Team Leader
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="laborer" id="laborer" className="peer sr-only" />
                      <Label
                        htmlFor="laborer"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mb-3 h-6 w-6"
                        >
                          <path d="M12 12a6 6 0 0 0 6-6H6a6 6 0 0 0 6 6Z" />
                          <path d="M16 6V5a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v1" />
                          <path d="M12 12v10" />
                          <path d="M16 16v.8a2 2 0 0 1-1 1.73l-1.95.89a.48.48 0 0 1-.42 0l-2.9-1.33a2 2 0 0 1-1.15-1.66v-3.68a2 2 0 0 1 .59-1.43l3.5-3.5a.48.48 0 0 0 0-.68L12 6" />
                        </svg>
                        Laborer
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => setFormStep(1)}>
                    Continue
                  </Button>
                </CardFooter>
              </>
            ) : (
              <>
                <CardHeader>
                  <CardTitle>Your information</CardTitle>
                  <CardDescription>Please provide your details to create your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password" required />
                  </div>
                  {userRole === "farmer" && (
                    <div className="space-y-2">
                      <Label htmlFor="address">Farm Address</Label>
                      <Input id="address" placeholder="Enter your farm address" required />
                    </div>
                  )}
                  {userRole === "laborer" && (
                    <div className="space-y-2">
                      <Label htmlFor="skills">Skills</Label>
                      <Input id="skills" placeholder="Enter your skills (e.g., harvesting, planting)" required />
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Create Account
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setFormStep(0)}>
                    Back
                  </Button>
                </CardFooter>
              </>
            )}
          </form>
        </Card>
        <p className="px-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="underline text-green-600 hover:text-green-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
