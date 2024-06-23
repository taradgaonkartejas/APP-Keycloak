import { User } from "@prisma/client";
import { prisma } from "../utils/db.server";

//find many 
const findAllUsers = async ():Promise<User[]> =>{
return await prisma.user.findMany({});
}

export {
    findAllUsers
}