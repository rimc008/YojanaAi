import db from "@/lib/mongodb"
import Scheme from "@/models/schemes_";

export async function GET(request,{params}){

    try {

        await db();

        const {slug} = await params

        const schemedetails = await Scheme.find({slug})


        return Response.json({"success":true,"message":schemedetails})

    } catch (error) {

        return Response.json({"success":false,"message":error.message})
    }
}