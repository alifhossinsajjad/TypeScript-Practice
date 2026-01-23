{
    //type guard using typeof and in (oop)

    //typeof operator ------> type guard




    type AlphaNumeric = string | number;

    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }


    const result1 = add(20, 45);
    console.log(result1);




    //in guard -------> type guard


    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: "admin";
    }



    const getUser = (user: NormalUser | AdminUser): string => {
        if ("role" in user) {
            return `I am an ${user.role}`;
        } else {
            return `I am a normal user`;
        }
    }

    const normalUser1: NormalUser = { name: "abul" };
    const adminUser1: AdminUser = 
    { name: "kabul", role: "admin" };

    console.log(getUser(normalUser1));
    console.log(getUser(adminUser1));



    //
}