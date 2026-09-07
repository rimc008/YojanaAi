import db from "@/lib/mongodb"
import Scheme from "@/models/schemes_";

export async function GET() {

    try {

        await db();

        const allSchemes = await Scheme.find({})
        const uniqueScheme = new Set() 
        allSchemes.forEach((item) => uniqueScheme.add(`${item.category}|${item.department}`)) // {"..|..","..|..","..|.."}

        const nextUniqueScheme = [...uniqueScheme].map((item) => item.split("|")) // [[..,..],[..,..],[..,..]]

        return Response.json({"success":true,"message":nextUniqueScheme,"size":nextUniqueScheme.length})

        
    } catch (e) {
        
        return Response.json({"success":false,"message":e.message})
    }
}