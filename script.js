document.addEventListener('keydown',ev )
      	function ev(event) {
   						document.getElementById(event.keyCode).click();
					}
      	function add(butt){
      		document.getElementById('Screen').innerHTML+=butt;
      	}
      	function del(){
      		var a = document.getElementById('Screen').innerHTML;
      		document.getElementById('Screen').innerHTML = a.slice(0,-1);
      	}
      	//khass ay operation dghet thssb dakchy li daz o t7tou 3ad nkml deuxieme champs dyal num
      	//donc khass had la fct t3ref ach mn operation mktouba ( atkoun gha 1operation) o thssb dakchi o tktbou ! o aytdar appel l had la fct f kola operation jdida ola f =
      	function doublecheck(){
      		l=document.getElementById('Screen').innerHTML.slice(-1);
      		if (l.includes("x")||l.includes("/")) {del();}
      		else check();
      	}
      	function check(){
       		if(document.getElementById('Screen').innerHTML.includes("!")){clr();}
      		else if(document.getElementById('Screen').innerHTML.includes("+")){plus();}
      		else if(document.getElementById('Screen').innerHTML.includes("x")){fois();}
      		else if(document.getElementById('Screen').innerHTML.includes("/")){div();}
      		else if(document.getElementById('Screen').innerHTML.includes("-")){moins();}

      	}
      	function plus(){
      		var i = document.getElementById('Screen').innerHTML.indexOf("+");
      		var a = document.getElementById('Screen').innerHTML.slice(0, i);
      		var b = document.getElementById('Screen').innerHTML.slice(i+1);
			document.getElementById('Screen').innerHTML = Number(a)+Number(b);
      	}
      	function moins(){
      		var i = document.getElementById('Screen').innerHTML.indexOf("-",1);
      		var a = document.getElementById('Screen').innerHTML.slice(0, i);
      		var b = document.getElementById('Screen').innerHTML.slice(i+1);
			document.getElementById('Screen').innerHTML = Number(a)-Number(b);
      	}
      	function fois(){
      		var i = document.getElementById('Screen').innerHTML.indexOf("x");
      		var a = document.getElementById('Screen').innerHTML.slice(0, i);
      		var b = document.getElementById('Screen').innerHTML.slice(i+1);
      		document.getElementById('Screen').innerHTML = Number(a)*Number(b);
      	}
      	function div(){
      		var i = document.getElementById('Screen').innerHTML.indexOf("/");
      		var a = document.getElementById('Screen').innerHTML.slice(0, i);
      		var b = document.getElementById('Screen').innerHTML.slice(i+1);
      		if(b!=null){
      		if (b!=0) {	document.getElementById('Screen').innerHTML = Number(a)/Number(b);}
      		else document.getElementById('Screen').innerHTML = "DIVISION PAR 0 ! ";
      	}
      	}
      	function clr(){
      		document.getElementById('Screen').innerHTML=null;
      	}