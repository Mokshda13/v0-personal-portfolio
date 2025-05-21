"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Check } from "lucide-react"

export default function ImageUploadExample() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)

  // This is a mock function - in a real app, you would upload to your server or a service
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setUploading(true)

      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            setSelectedImage(event.target.result as string)
            setUploading(false)
            setUploaded(true)
          }
        }
        reader.readAsDataURL(file)
      }, 1500)
    }
  }

  return (
    <div className="container px-4 py-12 mx-auto max-w-2xl">
      <h1 className="mb-8 text-3xl font-bold text-center">Image Upload Demo</h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col items-center">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-xl font-semibold">Upload Your Profile Image</h2>
              <p className="text-gray-500">Select an image to see how it would look in your portfolio</p>
            </div>

            <div className="w-full mb-6">
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG or WEBP (MAX. 2MB)</p>
                </div>
                <input
                  id="image-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={uploading}
                />
              </label>
            </div>

            {uploading && (
              <div className="flex items-center justify-center w-full mb-6">
                <div className="w-6 h-6 border-2 border-t-2 rounded-full border-gray-300 border-t-primary animate-spin"></div>
                <span className="ml-2">Uploading...</span>
              </div>
            )}

            {uploaded && (
              <div className="flex items-center justify-center w-full mb-6 text-green-600">
                <Check className="w-5 h-5 mr-1" />
                <span>Image uploaded successfully!</span>
              </div>
            )}

            {selectedImage && (
              <div className="w-full mt-4">
                <h3 className="mb-3 text-lg font-medium">Preview:</h3>
                <div className="flex justify-center">
                  <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Profile Preview"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="p-6 border rounded-lg">
        <h2 className="mb-4 text-xl font-semibold">How to Add This Image to Your Portfolio</h2>
        <ol className="pl-5 space-y-2 list-decimal">
          <li>Download the image you just uploaded</li>
          <li>Rename it to something meaningful (e.g., "profile.jpg")</li>
          <li>Create an "images" folder inside the "public" directory of your project</li>
          <li>Add your image to this folder</li>
          <li>Update the image path in your template files to "/images/profile.jpg"</li>
        </ol>

        <div className="p-4 mt-4 bg-gray-100 rounded-md">
          <pre className="font-mono text-sm">
            {`// In your template file, find the profile image and update:
<img
  src="/images/profile.jpg"
  alt="Mokshda Sharma"
  className="object-cover w-full h-full"
/>`}
          </pre>
        </div>
      </div>
    </div>
  )
}
