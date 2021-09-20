/*1.  const group = [0, 1, 2, 3, 4];
    console.log(group);
    const group1 = ['A', 'B', 'C', 'D', 'E'];
    console.log(group1);
    const group2 = ['String', false, true, 100, 10];
    console.log(group2);

2.  const group = [false, true, 100];
    console.log(group[1]);
    console.log(group[2]);
    console.log(group[0]);

3.  let a = ['<div> a </div>', '<div> b </div>', '<div> c </div>', '<div> d </div>', '<div> d </div>', '<div> e </div>', '<div> f </div>', '<div> g </div>', '<div> h </div>', '<div> i </div>'];
    let b = ['<div> 1 a </div>', '<div> 2 b </div>', '<div> 3 c </div>', '<div> 4 d </div>', '<div> 5 d </div>', '<div> 6 e </div>', '<div> 7 f </div>', '<div> 8 g </div>', '<div> 9 h </div>', '<div> 0 i </div>'];
    for (let i = 0; i < 10; i++) {
    document.write(a[i])
    }
    for(let i = 0; i < 10; i++) {
    document.write(b[i])
    }

4.  let arr1 = [ '<h1> a </h1>', '<h1> b </h1>','<h1> c </h1>','<h1> d </h1>','<h1> e </h1>','<h1> f </h1>','<h1> z </h1>','<h1> y </h1>','<h1> q </h1>','<h1> w </h1>','<h1> r </h1>','<h1> l </h1>','<h1> p </h1>','<h1> o </h1>','<h1> u </h1>','<h1> t </h1>','<h1> v </h1>','<h1> s </h1>','<h1> x </h1>','<h1> n </h1>'];
    let arr2 = [ '<h1> 1 a </h1>', '<h1> 2 b </h1>','<h1> 3 c </h1>','<h1> 4 d </h1>','<h1> 5 e </h1>','<h1> 6 f </h1>','<h1> 7 z </h1>','<h1> 8 y </h1>','<h1> 9 q </h1>','<h1> 10 w </h1>','<h1> 11 r </h1>','<h1> 12 l </h1>','<h1> 13 p </h1>','<h1> 14 o </h1>','<h1> 15 u </h1>','<h1> 16 t </h1>','<h1> 17 v </h1>','<h1> 18 s </h1>','<h1> 19 x </h1>','<h1> 20 n </h1>'];
    let i = 0;
    while (i < 20){
    document.write(arr1[i])
    i++
    }

    let a = 0;
        while (a < 20){
        document.write(arr2[a])
        i++
        }

5. */ /*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for( value of arr){
    console.log(value);
    }
    */
    /*let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        for( value of arr){
        console.log(value);
        }*/
/*
            let arr = ['one', true, 'three', false, 'five', 11, 'seven', 23, 'nine', 'ten'];
                    for( value of arr){
                    console.log(value);
                    }*/

                         /*let arr = ['one', true, 'three', false, 'five', 11, 'seven', 23, 'nine', 'ten'];
                             for(let i = 0; i < arr.length; i++){
                             if (typeof arr[i] == "boolean") {
                             console.log(arr[i])
                             }
                             }*/
                                   /*let arr = ['one', true, 'three', false, 'five', 11, 'seven', 23, 'nine', 'ten'];
                                   for(let i = 0; i < arr.length; i++) {
                                   if (typeof arr[i] == 'number') {
                                   console.log(arr[i])
                                   }
                                   }*/

                                      /*  let arr = ['one', true, 'three', false, 'five', 11, 'seven', 23, 'nine', 'ten'];
                                        for (let i = 0; i < arr.length; i++) {
                                        if (typeof arr[i] == 'string') {
                                        console.log(arr[i])
                                        }
                                        }*/

/*6.arr = [];
    arr[0] = 'string';
    arr[1] = 10;
    arr[2] = false;
    arr[3] = true;
    arr[4] = 'srsr';
    arr[5] = 22;
    arr[6] = 21;
    arr[7] = 'sese';
    arr[8] = 222;
    arr[9] = 9;

    for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
    }*/

            /*for (let i = 0; i < 10; i++){
                console.log(i);
                document.write(i);
            };

                    for (let i = 0; i < 100; i++){
                        console.log(i);
                        document.write(i);
                    };
*/
                                /*for(let i = 0; i < 100; i = i+2) {
                                console.log(i);
                                document.write(i);
                                }*/

                                        /*for(i = 0; i < 100; i = i+2) {
                                        console.log(i);
                                        document.write(i);
                                        }*/
                                              /*  for(i = 1; i < 100; i = i+2) {
                                                console.log(i);
                                                document.write(i);
                                                }*/
/*
7. let arr = ['a', 'b', 'c'];
    let str = '';
    for( let i = 0 ; i < arr.length; i++) {
    str = str + arr[i];
    }
    console.log(str);   */

           /* let arr = ['a', 'b', 'c'];
            let str = '';
            for(let i = 0; i < arr.length; i++) {
            while (i < arr.length) {
            str = str + arr[i];
            i++;
            }
            }
            console.log(str);*/


                      /*arr = [ 'a', 'b', 'c'];
                      str = "";
                      for (const string of arr){
                          str = str + string;
                      }
                      console.log(str);*/

                                   /* mas = [ 'a', 'b', 'c'];
                                    str = "";
                                    for (const string in mas){
                                        str = str + mas[string];
                                    }
                                    console.log(str);*/

