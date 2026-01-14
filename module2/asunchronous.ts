{
    // promise

    type Todo = {
        id: number,
        userId: number,
        title: string,
        complete: boolean
    }

    const getToDO = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')


        const data = await res.json()
        return data
        // console.log(data);
    }

    getToDO()









    const promise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "All Products"
            if (data) {
                resolve(data)
            } else {
                reject('do not loaded any data')
            }
        })
    }




    //calling create promise function 

    const showData = async (): Promise<string> => {
        const data: string = await promise()
        // console.log(data);
        return data
    }


    showData()






    //
}