{

    //mapped Types

    const arrOfNumber: number[] = [1, 3, 5];

    const arrOfString: string[] = arrOfNumber.map(number => number.toString())

    console.log(arrOfString);




    type AreaNumber = {
        height: number;
        weidth: number;
    }


    type AreaString = {
        [key in keyof AreaNumber]: string
    }





    //
}