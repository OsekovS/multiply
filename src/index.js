
module.exports  = function multiply(a, b){
      a=a.split('').reverse(),
   b=b.split('').reverse()
   let c = [];
   
   for (var i = 0; i < b.length; i++) {
      for (var j = 0; j < a.length; j++) {
         // console.log(a[j]*b[i])
         let d=b[i]*a[j];
         //  console.log(c[i]!==undefined)
         if(!c[i]){
            c[i]=[];
         }
         c[i][j+i]=(c[i][j+i]) ? c[i][j+i] + d :(d);

         if(c[i][j+i]>9){
            c[i][j+i+1]=parseInt(c[i][j+i]/10)
            c[i][j+i]=c[i][j+i]%10
            // c[i][j]=c[i][j]%10
         }

      }
   }
   // console.log(c)
   // console.log(c[1][0])
   let result = [];
   let count = 0;
   let end = 0;
   for (var i = 0; i < c.length; i++) {
      
      for (var j = end; j < c[i].length; j++) {
         count=i;
         if(c[count][j]===undefined) continue
         // if(count===1) debugger
         result[j]=(result[j])?
         result[j]+c[count][j]:c[count][j]
         while(true){
            count++
            if(c[count]&&c[count][j]!==undefined)
            result[j]+=c[count][j]
            else{
               if(result[j]>9){
                  result[j+1]=parseInt(result[j]/10)
                  result[j]=result[j]%10
                  
               }
               
                break
               }
         }
      }
      end=c[i].length;
   }
   return result.reverse().join('')
   // console.log(result.reverse().join(''))
}
