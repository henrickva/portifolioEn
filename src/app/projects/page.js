import Projects from "@/components/ApiProject";

export default function ProjPage(){
    return(
        <section className="flex justify-center items-center py-4 ">
        <div className="m-2 container flex flex-col md:grid md:grid-flow-col gap-10">
            <Projects />
        </div>
    </section>
    )
}