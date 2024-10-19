import { resolve } from "path"

export default async function Job(){
    await new Promise(resolve => setTimeout(() => {
        setTimeout(resolve , 5000);

    }))

    return(
        <div className="bg-slate-700 h-100 text-white font-semibold text-lg p-6">
            This is Job page</div>
    )
}