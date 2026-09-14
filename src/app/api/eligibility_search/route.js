import db from "@/lib/mongodb"
import Scheme from "@/models/schemes_"

export async function GET(request){
    try {

        await db();

        const formData = request.formData();

        const age_ = formData.get("age")
        const gender_ = formData.get("gender")
        const income_ = formData.get("income")
        const needs_ = formData.get("needs")
        const state_ = formData.get("state")


    } catch (error) {
        
    }
}

