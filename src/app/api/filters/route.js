import db from "@/lib/mongodb"
import Scheme from "@/models/schemes_";


export async function POST(request){

    try {

        await db();

        const {search_item} = await request.json();

        const filters = await Scheme.find({$or:[

            {name:{$regex:`${search_item}`, $options:"i"}},
            {description:{$regex:`${search_item}`, $options:"i"}},
            {department:{$regex:`${search_item}`, $options:"i"}},
            {state:{$regex:`${search_item}`, $options:"i"}},
            {category:{$regex:`${search_item}`, $options:"i"}},
            {benefits:{$regex:`${search_item}`, $options:"i"}},
            

        ]})

        if(filters.length === 0){
            return Response.json({"success":false,"message":"Not findable"})
        }

        return Response.json({"success":true,"message":filters})

    } catch (error) {

        return Response.json({"success":false,"message":error.message})
    }
}