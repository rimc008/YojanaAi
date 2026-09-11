import db from "@/lib/mongodb"
import Scheme from "@/models/schemes_";

export async function GET() {

    try {

        await db();

        // const allSchemes = await Scheme.find({})
        // const uniqueScheme = new Set() 
        // allSchemes.forEach((item) => uniqueScheme.add(`${item.category}|${item.department}`)) // {"..|..","..|..","..|.."}

        // const nextUniqueScheme = [...uniqueScheme].map((item) => item.split("|")) // [[..,..],[..,..],[..,..]]

        const allSchemes = await Scheme.aggregate([
            {
                $group: {
                    _id: {
                        category: "$category",
                        department: "$department"
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    category: "$_id.category",
                    department: "$_id.department"
                }
            },
            
        ]);

        const nextUniqueScheme = allSchemes.map((item)=>[item.category,item.department])

        return Response.json({"success":true,"message":nextUniqueScheme.slice(1),"size":nextUniqueScheme.length})

        
    } catch (e) {
        
        return Response.json({"success":false,"message":e.message})
    }
}