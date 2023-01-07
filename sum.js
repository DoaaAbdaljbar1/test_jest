const thesum = (num1,num2,num3)=>{
    return num1+(num2||null)+(num3||null) ;
}
function thesum(...numbers) {
    return numbers.reduce((pv,cv)=>pv+cv,0) ;
    } 
   
    module.exports=thesum;
    