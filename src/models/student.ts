export class student
{
    constructor(public Id:number,
        public Name:string,
        public Address:string,
        public Phone:string,
        public AvgMark:number,
        public DepartureDate?:Date,
        public isActive:boolean=true,
        public isPay:boolean=false
    ){}
}
