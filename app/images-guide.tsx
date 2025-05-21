import { Button } from "@/components/ui/button"

export default function ImagesGuide() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Adding Images to Your Portfolio</h1>

      <div className="space-y-8">
        {/* Method 1: Using the public folder */}
        <div className="p-6 border rounded-lg">
          <h2 className="mb-4 text-xl font-semibold">Method 1: Using the public folder</h2>
          <p className="mb-4">
            The simplest way to add images is to place them in the public folder. These images will be accessible at the
            root path.
          </p>

          <div className="p-4 mb-4 bg-gray-100 rounded-md">
            <p className="font-mono text-sm">
              1. Create a folder structure like: <strong>public/images/profile.jpg</strong>
              <br />
              2. Reference the image with: <strong>/images/profile.jpg</strong>
            </p>
          </div>

          <div className="p-4 mb-4 bg-gray-100 rounded-md">
            <pre className="font-mono text-sm">
              {`<img
  src="https://drive.google.com/file/d/1_RG6_PwTTd_0seyG_V4Y2Qv8N9oMzo9C/view?usp=sharing"
  alt="Mokshda Sharma"
  className="object-cover w-full h-full"
/>`}
            </pre>
          </div>
        </div>

        {/* Method 2: Using Next.js Image component */}
        <div className="p-6 border rounded-lg">
          <h2 className="mb-4 text-xl font-semibold">Method 2: Using Next.js Image component (Recommended)</h2>
          <p className="mb-4">
            For better performance, use the Next.js Image component which provides automatic optimization.
          </p>

          <div className="p-4 mb-4 bg-gray-100 rounded-md">
            <p className="font-mono text-sm">
              1. Import the Image component: <strong>import Image from "next/image"</strong>
              <br />
              2. Use it in your JSX:
            </p>
          </div>

          <div className="p-4 mb-4 bg-gray-100 rounded-md">
            <pre className="font-mono text-sm">
              {`<div className="relative w-[350px] h-[350px] rounded-full overflow-hidden">
  <Image
    src="/images/profile.jpg"
    alt="Mokshda Sharma"
    fill
    className="object-cover"
    priority
  />
</div>`}
            </pre>
          </div>

          <p className="text-sm text-gray-600">
            Note: The parent div must have position relative and explicit dimensions when using fill.
          </p>
        </div>

        {/* Method 3: Using external images */}
        <div className="p-6 border rounded-lg">
          <h2 className="mb-4 text-xl font-semibold">Method 3: Using external images</h2>
          <p className="mb-4">You can also use images hosted elsewhere by providing the full URL.</p>

          <div className="p-4 mb-4 bg-gray-100 rounded-md">
            <pre className="font-mono text-sm">
              {`<img
  src="https://example.com/your-image.jpg"
  alt="Mokshda Sharma"
  className="object-cover w-full h-full"
/>`}
            </pre>
          </div>

          <p className="text-sm text-gray-600">
            For Next.js Image component with external images, you need to configure domains in next.config.js.
          </p>
        </div>

        {/* Adding project images */}
        <div className="p-6 border rounded-lg">
          <h2 className="mb-4 text-xl font-semibold">Adding Project Images</h2>
          <p className="mb-4">
            To add images for your projects, follow the same approach but update the project card sections.
          </p>

          <div className="p-4 mb-4 bg-gray-100 rounded-md">
            <pre className="font-mono text-sm">
              {`<div className="h-48 bg-gray-100">
  <img
    src="/images/projects/corpus-key-rag.jpg"
    alt="Corpus Key RAG Project"
    className="object-cover w-full h-full"
  />
</div>`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Steps to Add Your Images</h2>
        <ol className="pl-5 space-y-2 list-decimal">
          <li>Create an "images" folder inside the "public" directory</li>
          <li>Add your profile photo and project images to this folder</li>
          <li>Update the image paths in your template files</li>
          <li>For better organization, you can create subfolders like "public/images/projects/"</li>
        </ol>

        <div className="p-4 mt-6 bg-gray-100 rounded-md">
          <h3 className="mb-2 font-semibold">Folder Structure Example:</h3>
          <pre className="font-mono text-sm">
            {`public/
  ├── images/
  │   ├── profile.jpg
  │   ├── background.jpg
  │   └── projects/
  │       ├── corpus-key-rag.jpg
  │       └── /Users/mokshdasharma/Documents/Purdue University/MOD3/ETB/Doc2Deck Logo.webp`}
          </pre>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button>Get Started with Images</Button>
      </div>
    </div>
  )
}
