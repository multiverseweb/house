alert('Hello there! This is my first project that is entirely based on JavaScript. Enjoy scrolling! :D');
window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
        document.getElementById("a").style.width="80vw";
      }
      if (document.body.scrollTop < 20 ||
        document.documentElement.scrollTop < 20){
        document.getElementById("a").style.width="0vw";
        document.getElementById("int").style.opacity="0";
        document.getElementById("text").innerHTML="Scroll slowly for better experience...";
      }
      if (document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500) {
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
  }
