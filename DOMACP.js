<html>
    <head>
        <title>DOM</title>
    </head>
    <body>
        <h1 id="text"></h1>
        <h1 id="text1"></h1>
        <h1 id="text2"></h1>
        <h1 id="text3"></h1>
        <h1 id="text4"></h1>
        <h1 id="text5"></h1>
        <h1 id="text6"></h1>

        <div id="js"></div>


        <script>

        document.getElementById("text").textContent = 
        "Hi Im Bihan Its Nice To Meet You";
        document.getElementById("text2").textContent = 
        "How are you doing these day";
        document.getElementById("text3").textContent = 
        "I hope your doing well and your parents are doing fine";
        document.getElementById("text4").textContent = 
        "I hope we can become really good friends in the future";
        document.getElementById("text5").textContent = 
        "I'm Starting to like you alot";
        document.getElementById("text6").textContent = 
        "Well I hope you do well and achieve your goals.";

        var mytag = document.createElement("H1")
        mytag.textContent = "This Conversation is simulated by javascript"
        document.getElementById("JS").appendChild(mytag)
  
     document.getElementById("text").style.color = "red";
     document.getElementById("text2").style.backgroundColor = "blue";
     document.getElementById("text3").style.color = "green";
     document.getElementById("text4").style.color = "purple";
     document.getElementById("text5").style.color = "pink"
     document.getElementById("text6").style.color = "orange"



        </script>


    </body>
</html>

