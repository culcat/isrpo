function findOdd(A) {
    let count=0
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A.length;j++){
            if (A[i]==A[j]) {
                count++
            }
        }
        if (count % 2 !=0) {
            return A[i]
        }
    }

}

  console.log(findOdd([1,1,2]));


//   function findOdd(numbers) {
//     var count = 0;
//     for(var i = 0; i<numbers.length; i++){
//       for(var j = 0; j<numbers.length; j++){
//         if(numbers[i] == numbers[j]){
//           count++;
//         }
//       }
//       if(count % 2 != 0 ){
//         return numbers[i];
//       }
//     }
//   };
  
//   console.log(findOdd([1,1,2])); //5
//   console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); //10