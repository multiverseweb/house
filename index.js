alert('Hello there! This is my first project that is entirely based on JavaScript. Enjoy scrolling! :D');
window.onscroll = function() {
    scrollFunction()
  };
  function scrollFunction() {
    if (document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10) {
        document.getElementById("a").style.width="80vw";
      }
      if (document.body.scrollTop < 10 ||
        document.documentElement.scrollTop < 10){
        document.getElementById("a").style.width="0vw";
        document.getElementById("int").style.opacity="0";
        document.getElementById("text").innerHTML="Scroll slowly for better experience...";
      }
      if (document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200) {
          document.getElementById("int").style.opacity="1";
      }

    if (document.body.scrollTop > 1200 ||
        document.documentElement.scrollTop > 1200) {
        document.getElementById("int").style.scale="0.6";
        document.getElementById("int").style.top="20vh";
        document.getElementById("int").style.marginLeft="23vw";
        document.getElementById("a").style.width="80vw";
        document.getElementById("a").style.left="10vw";
        document.getElementById("a").style.top="67.8vh";
        document.getElementById("b").style.height="39vh";
        document.getElementById("c").style.height="60vh";
        document.getElementById("b").style.top="40vh";
        document.getElementById("c").style.top="20vh";
        document.getElementById("w").style.top="24vh";
        document.getElementById("x").style.top="39vh";
        document.getElementById("y").style.top="24vh";
        document.getElementById("z").style.top="24vh";
        document.getElementById("a1").style.right="27vw";
        document.getElementById("b1").style.right="27vw";
        document.getElementById("c1").style.right="27vw";
        document.getElementById("d1").style.right="27vw";
        document.getElementById("c2").style.height="0vh";
        document.getElementById("d2").style.height="0vh";
        document.getElementById("e2").style.height="0vh";
        document.getElementById("f2").style.height="0vh";
        document.getElementById("c2").style.top="39vh";
        document.getElementById("d2").style.top="39vh";
        document.getElementById("e2").style.top="39vh";
        document.getElementById("f2").style.top="39vh";
        document.getElementById("a2").style.top="39vh";
        document.getElementById("a2").style.height="1px";
        document.getElementById("l1").style.left="48vw";
        document.getElementById("m1").style.left="48vw";
        document.getElementById("n1").style.left="48vw";
        document.getElementById("o1").style.left="86vw";
        document.getElementById("e1").style.left="14vw";
        document.getElementById("f1").style.left="14vw";
        document.getElementById("g1").style.left="14vw";
        document.getElementById("u").style.height="0vh";
        document.getElementById("v").style.height="0vh";
        document.getElementById("text").innerHTML="House With Garage";
      } 
    else {
        document.getElementById("int").style.scale="1";
        document.getElementById("int").style.top="0vh";
        document.getElementById("int").style.marginLeft="0vw";
        document.getElementById("a").style.width="80vw";
        document.getElementById("a").style.left="10vw";
        document.getElementById("a").style.top="80vh";
        document.getElementById("b").style.height="59vh";
        document.getElementById("c").style.height="40vh";
        document.getElementById("b").style.top="20vh";
        document.getElementById("c").style.top="40vh";
        document.getElementById("w").style.top="44vh";
        document.getElementById("x").style.top="59vh";
        document.getElementById("y").style.top="44vh";
        document.getElementById("z").style.top="44vh";
        document.getElementById("a1").style.right="50vw";
        document.getElementById("b1").style.right="50vw";
        document.getElementById("c1").style.right="50vw";
        document.getElementById("d1").style.right="50vw";
        document.getElementById("c2").style.height="15vh";
        document.getElementById("d2").style.height="15vh";
        document.getElementById("e2").style.height="15vh";
        document.getElementById("f2").style.height="15vh";
        document.getElementById("c2").style.top="24vh";
        document.getElementById("d2").style.top="24vh";
        document.getElementById("e2").style.top="24vh";
        document.getElementById("f2").style.top="24vh";
        document.getElementById("a2").style.top="24vh";
        document.getElementById("a2").style.height="4px";
        document.getElementById("l1").style.left="14vw";
        document.getElementById("m1").style.left="14vw";
        document.getElementById("n1").style.left="14vw";
        document.getElementById("o1").style.left="52vw";
        document.getElementById("e1").style.left="50vw";
        document.getElementById("f1").style.left="50vw";
        document.getElementById("g1").style.left="86vw";
        document.getElementById("u").style.height="15vh";
        document.getElementById("v").style.height="15vh";
        document.getElementById("text").innerHTML="House";
      } 

      if (document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400) {
        document.getElementById("p2").style.height="15vh";
        document.getElementById("p2").style.top="65vh";
        }
        else{
          document.getElementById("p2").style.height="0vh";
          document.getElementById("p2").style.top="80vh";
        }
      if (document.body.scrollTop > 650 ||
        document.documentElement.scrollTop > 650) {
        document.getElementById("r2").style.width="6vw";
        document.getElementById("r2").style.height="6vw";
        document.getElementById("r2").style.left="8vw";
        document.getElementById("r2").style.top="62vh";
  }
  else{
    document.getElementById("r2").style.width="0vw";
    document.getElementById("r2").style.height="0vw";
    document.getElementById("r2").style.left="11vw";
        document.getElementById("r2").style.top="65vh";
  }

  if (document.body.scrollTop > 1600 ||
    document.documentElement.scrollTop > 1600) {
    document.getElementById("s2").style.height="5vh";
    document.getElementById("t2").style.height="5vh";
    document.getElementById("u2").style.height="5vh";
    document.getElementById("v2").style.height="5vh";
    document.getElementById("w2").style.height="5vh";
    document.getElementById("x2").style.height="5vh";
    document.getElementById("y2").style.height="5vh";
    document.getElementById("z2").style.height="5vh";
    document.getElementById("a3").style.height="5vh";
    document.getElementById("b3").style.height="5vh";
    document.getElementById("c3").style.height="5vh";
    document.getElementById("d3").style.height="5vh";
    document.getElementById("e3").style.height="5vh";
      document.getElementById("s2").style.top="75vh";
      document.getElementById("t2").style.top="75vh";
      document.getElementById("u2").style.top="75vh";
      document.getElementById("v2").style.top="75vh";
      document.getElementById("w2").style.top="75vh";
      document.getElementById("x2").style.top="75vh";
      document.getElementById("y2").style.top="75vh";
      document.getElementById("z2").style.top="75vh";
      document.getElementById("a3").style.top="75vh";
      document.getElementById("b3").style.top="75vh";
      document.getElementById("c3").style.top="75vh";
      document.getElementById("d3").style.top="75vh";
      document.getElementById("e3").style.top="75vh";
      document.getElementById("f3").style.top="77vh";
      document.getElementById("f3").style.opacity="1";
      document.getElementById("a").style.left="0vw";
      document.getElementById("a").style.width="90vw";
      document.getElementById("g3").style.width="61vw";
      document.getElementById("g3").style.opacity="1";
      document.getElementById("g3").style.left="-45vw";
      document.getElementById("h3").style.height="21vh";
      document.getElementById("h3").style.opacity="1";
      document.getElementById("h3").style.top="59vh";
}
else{
  document.getElementById("s2").style.height="0vh";
    document.getElementById("t2").style.height="0vh";
    document.getElementById("u2").style.height="0vh";
    document.getElementById("v2").style.height="0vh";
    document.getElementById("w2").style.height="0vh";
    document.getElementById("x2").style.height="0vh";
    document.getElementById("y2").style.height="0vh";
    document.getElementById("z2").style.height="0vh";
    document.getElementById("a3").style.height="0vh";
    document.getElementById("b3").style.height="0vh";
    document.getElementById("c3").style.height="0vh";
    document.getElementById("d3").style.height="0vh";
    document.getElementById("e3").style.height="0vh";
    document.getElementById("s2").style.top="80vh";
      document.getElementById("t2").style.top="80vh";
      document.getElementById("u2").style.top="80vh";
      document.getElementById("v2").style.top="80vh";
      document.getElementById("w2").style.top="80vh";
      document.getElementById("x2").style.top="80vh";
      document.getElementById("y2").style.top="80vh";
      document.getElementById("z2").style.top="80vh";
      document.getElementById("a3").style.top="80vh";
      document.getElementById("b3").style.top="80vh";
      document.getElementById("c3").style.top="80vh";
      document.getElementById("d3").style.top="80vh";
      document.getElementById("e3").style.top="80vh";
      document.getElementById("f3").style.top="80vh";
      document.getElementById("f3").style.opacity="0";
      document.getElementById("g3").style.width="0vw";
      document.getElementById("g3").style.opacity="0";
      document.getElementById("g3").style.left="16vw";
      document.getElementById("h3").style.height="0vh";
      document.getElementById("h3").style.opacity="0";
      document.getElementById("h3").style.top="80vh";
}
if (document.body.scrollTop > 1800 ||
  document.documentElement.scrollTop > 1800) {
    document.getElementById("car").style.left="-40vw";
    document.getElementById("a").style.left="10vw";
    document.getElementById("a").style.width="80vw";
  }
  else{
    document.getElementById("car").style.left="-120vw";
  }
}


 /*       left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax )
*/
