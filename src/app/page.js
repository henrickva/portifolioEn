import Profile from "@/components/Profile"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <section className="flex justify-center items-center py-4 ">
      <div className="m-2 container flex flex-col md:grid md:grid-flow-col gap-10">
          <Profile/>
          <Hero/>
      </div>
    </section>
  )
}
