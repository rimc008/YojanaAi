import db from "@/lib/mongodb"
import Scheme from "@/models/schemes_"

export async function POST(request){
    try {

        await db();

        const formData = await request.formData(); // await is must 

        const age_ =  Number(formData.get("age")) // it gives string so converting it to Number is must so that it can be compared
        const gender_ = formData.get("gender")
        // const income_ =  Number(formData.get("income")) //it gives string so converting it to Number is must so that it can be compared
        const needs_ = formData.getAll("needs")
        const state_ = formData.get("state")

        console.log(age_);
        console.log(gender_);
        console.log(needs_);
        console.log(state_);

        // const a = await Scheme.find();

        // a.forEach((b) => {
        //     const obj = b.toObject();

        //     console.log(
        //         obj.eligibility_age_max,
        //         Object.hasOwn(obj, "eligibility_age_max")
        //     );
        // });
            
        
        const needsegex = needs_.join("|")

        const schemes = await Scheme.find({state:state_,$and:[{$or:[

            {eligibility_gender:{$eq:"all"}},
            {eligibility_gender:{$eq:gender_}}

        ]},{$or:[

            {name:{$regex : needsegex,$options:"i"}},
            {description:{$regex : needsegex,$options:"i"}}

        ]},{$and:[
            
            {$or:[
            {eligibility_age_max:{$exists:false}},
            {eligibility_age_max:{$gte:age_}}]},

            {$or:[
            {eligibility_age_min:{$exists:false}},
            {eligibility_age_min:{$lte:age_}}]}

    ]}
]})

    if(schemes.length===0){
        return Response.json({"success":false,"message":"Not findable"})
    }

    return Response.json({"success":true,"message":schemes})


    } catch (error) {
        return Response.json({"success":false,"message":error.message})
    }
}

