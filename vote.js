function solve()
{
   var age = document.getElementById("age").value;
   if(age>18)
   {
      var checkage = "you are eligble for vote";
   }   
   else
   var checkage = "you are not eligble for vote";
   document.getElementById("vote").innerHTML = checkage;
}