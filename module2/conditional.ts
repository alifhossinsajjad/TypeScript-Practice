{
    //conditional type 

    type a1 = number

    type b1 = string


    type x = a1 extends null ? true : false; //conditional
    
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any ;



type Prince ={
    bike : string;
    car : string;
    yeout : string;
    jet : string;
}


type CheckVhicle <T> = T extends keyof Prince ? true : false

type hasJet = CheckVhicle<"plane">






    //
}