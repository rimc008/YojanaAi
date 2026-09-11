import db from "@/lib/mongodb"
import Scheme from "@/models/schemes_";


export async function GET(request){

    try {

        await db();

        const {searchParams} = new URL(request.url)

        const category = searchParams.get("category");
        const department = searchParams.get("department");

        const schemas_by_category = await Scheme.find({category,department})


        return Response.json({"success":true,"message":schemas_by_category})

    } catch (error) {

        return Response.json({"success":false,"message":error.message})
    }
}