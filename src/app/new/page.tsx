import EditorComponent from "@/components/EditorComponent"

const EditorPage = () => {
  return (
    <section className="bg-slate-500">
        <p className="text-center py-3 text-3xl lora text-white/70 underline">Welcome to the Editor</p>
        <div className="mx-10">
            
            <EditorComponent />
        </div>
    </section>
  )
}

export default EditorPage