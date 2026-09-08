import db from "@/lib/mongodb"
import Scheme from "@/models/schemes_";

export async function GET(request) {
    
    const {Category,state,Age,Annual_income} = await request.json()
    
}