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

export default function LoginPage() {
  const router = useRouter()
  const [userRole, setUserRole] = useState<string>("farmer")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would handle login logic here
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
          <h1 className="text-2xl font-semibold tracking-tight text-green-800">Login to your account</h1>
          <p className="text-sm text-gray-500">Enter your credentials below to login</p>
        </div>
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Choose your role and enter your credentials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Select your role</Label>
                <RadioGroup defaultValue={userRole} onValueChange={setUserRole} className="grid grid-cols-3 gap-2">
                  <div>
                    <RadioGroupItem value="farmer" id="login-farmer" className="peer sr-only" />
                    <Label
                      htmlFor="login-farmer"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                    >
                      <span className="text-xs">Farmer</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="teamleader" id="login-teamleader" className="peer sr-only" />
                    <Label
                      htmlFor="login-teamleader"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                    >
                      <span className="text-xs">Team Leader</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="laborer" id="login-laborer" className="peer sr-only" />
                    <Label
                      htmlFor="login-laborer"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                    >
                      <span className="text-xs">Laborer</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Login
              </Button>
              <div className="text-center text-sm">
                <Link href="#" className="text-green-600 hover:text-green-700">
                  Forgot password?
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
        <p className="px-8 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline text-green-600 hover:text-green-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
