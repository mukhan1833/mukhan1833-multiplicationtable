
        function even()
        {
            let a;
            let num = document.getElementById("num1").value;
            let b;
            b=((num%2==0) ? evenNumber(num):oddNumber());
            console.log(b);
     
        }
        function oddNumber()
        {
            document.getElementById("demo").innerHTML="ODD!! ONLY ENTER EVEN NUMBER!!"
        }
        function evenNumber(num)
        {
             let text = "";
             for(let i=0;i<=10;i++)
        {
            a=num*i;
            text += ""+num+" * " + i + "= "+a+"<br>";
        
      
         }
            document.getElementById("demo").innerHTML=text;
        }