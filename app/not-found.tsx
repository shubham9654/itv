import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <Link href="/">Return Home</Link>
    </div>
  )
}