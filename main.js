    useablechars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    charamount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    tempcharamount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    wordin=""
    var finish="false"
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    function setchars(word) {
      charamount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      i = 1
      while (6 > i) {
        charamount[useablechars.indexOf(word.charAt(i-1))] += 1
        i ++
      }
      return charamount
    }
    word=trwords[getRndInteger(0, trwords.length-1)]
    setchars(word)
    var collum = 1
    row = 1
    function checkgreenspace(inword, actword) {
      if (finish == "true") {
        return
      }
      tempcharamount = setchars(actword)
      i = 1
      while (6 > i) {
        id1 = collum.toString()+"0"+i.toString()
        wordinc = inword.charAt(i-1)
        document.getElementById(id1).className="buttongra"
        document.getElementById(id1).innerText=wordinc.toLocaleUpperCase()
        if (document.getElementById("key_"+wordinc).className == "buttonno charbutton blankcharbutton") {
          document.getElementById("key_"+wordinc).className = 'buttongra charbutton'
        }
        i++
      }
      i = 1
      while (6 > i) {
        changechar = tempcharamount[useablechars.indexOf(actword.charAt(i-1))]
        charequal = inword.charAt(i-1) === actword.charAt(i-1)
        if(charequal) {
          id1 = collum.toString()+"0"+i.toString()
          wordinc = inword.charAt(i-1)
          document.getElementById(id1).className="buttongre"
          document.getElementById(id1).innerText=wordinc.toLocaleUpperCase()
          document.getElementById("key_"+wordinc).className = 'buttongre charbutton'
          tempcharamount[useablechars.indexOf(actword.charAt(i-1))] = changechar-1
        }
        i++
      }
      i = 1
      while (6 > i) {
        changechar = tempcharamount[useablechars.indexOf(inword.charAt(i-1))]
        charequal = inword.charAt(i-1) === actword.charAt(i-1)
        if (actword.includes(inword.charAt(i-1)) && (charequal == false) && changechar > 0) {
          id1 = collum.toString()+"0"+i.toString()
          wordinc = inword.charAt(i-1)
          document.getElementById(id1).className="buttonyel"
          document.getElementById(id1).innerText=wordinc.toLocaleUpperCase()
          if (document.getElementById("key_"+wordinc).className != "buttongre charbutton") {
            document.getElementById("key_"+wordinc).className = 'buttonyel charbutton'
          }
          tempcharamount[useablechars.indexOf(inword.charAt(i-1))] = changechar-1
        }
        i++
      }
      document.getElementById("input1").innerHTML=""
      if (inword == word) {
        document.getElementById("h4").innerHTML = "Well Done! :) <br><br> <button onclick='window.location.reload()' class='buttonretry'>Try Again?</button>"
        finish="true"
        document.getElementById("input1").disabled = true;
      }
      collum = collum+1
      if (collum == 7) {
        finished()
      }
    }
    function addword() {
      if (finish == "true") {
        return
      }
      document.getElementById("h4").innerHTML = '&#8192'
      var wordin = document.getElementById("input1").innerHTML;
      wordin = wordin.toLowerCase()
      if (!guwords.includes(wordin)) {
        document.getElementById("h4").innerHTML = "Not A Word In List."
        return
      }
      if (wordin.length != 5) {
        document.getElementById("h4").innerHTML = "Incorrect Lenght Of Word."
        return
      }
      var length = wordin.length
      if (length == 5) {
        checkgreenspace(wordin, word)
      }
      drawpreword()
    }
    function finished() {
      finish="true"
      document.getElementById("h4").innerHTML = "The Word Was "+word+"!"
    }
    function addletter(letter) {
      if (finish == "true") {
        return
      }
      document.getElementById('input1').innerHTML += letter
      drawpreword()
    }
    document.addEventListener("keydown",function(e){
      if(useablechars.includes((e.key).toLocaleLowerCase())){
        if ((document.getElementById('input1').innerHTML).length > 4) {
        }
        else {
          addletter((e.key).toLocaleLowerCase())
        }
      }
      if (e.key == "Backspace") {
        backspace()
        drawpreword()
      }
      if (e.key == "Enter") {
        addword();
      }
    })
    function backspace() {
      if (finish == "true") {
        return
      }
      document.getElementById('input1').innerHTML = document.getElementById('input1').innerHTML.slice(0,-1)
      drawpreword()
    }
    function drawpreword() {
      i = 1
      while (i < 6) {
        document.getElementById(collum+'0'+i).innerHTML = '&#8192'
        i ++
      }
      i = 1
      while (i < (document.getElementById('input1').innerHTML.length)+1) {
        e = document.getElementById('input1').innerHTML
        document.getElementById(collum+'0'+i).innerHTML = (e[i-1]).toLocaleUpperCase()
        i ++
      }
    }
