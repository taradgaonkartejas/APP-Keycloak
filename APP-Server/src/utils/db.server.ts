import { PrismaClient } from "@prisma/client";

let prisma:PrismaClient;

// declare global variabe for Prisma client
declare global{
    var __db:PrismaClient | undefined;
}

// create new instance of Prisma client only if global veriable is not exsting in global scope 
// we created this for avoiding creating noew instances at every connection
if(!global.__db){
    global.__db = new PrismaClient();
}

prisma= global.__db;

export { prisma };