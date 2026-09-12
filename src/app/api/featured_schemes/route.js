import db from "@/lib/mongodb"
import Scheme from "@/models/schemes_";


export async function GET(){

    try {

        await db();

        const featuredSchemes = await Scheme.find({$and:[

            {state:{$regex:"Central", $options:"i"}},
            {name:{$regex:"pradhan mantri", $options:"i"}}
        ]})

        if(featuredSchemes.length === 0){
            return Response.json({"success":false,"message":"Not findable"})
        }

        return Response.json({"success":true,"message":featuredSchemes.slice(0,10)})

    } catch (error) {

        return Response.json({"success":false,"message":error.message})
    }
}