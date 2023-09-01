export class job{
    id :String | undefined;
    title:string | undefined;
    description:string | undefined;
    salary:string | undefined;
    location:string | undefined;
    type:string | undefined;
    workplace:string | undefined;
    saved:boolean | undefined;
    applied:boolean | undefined;
}


export class response
{
    currentPage :number | undefined;
    data:job[]=[] ;
    totalItems:number | undefined;
     totalPages: number | undefined;
}