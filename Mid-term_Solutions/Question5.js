(function() {
    "use strict";
    
    //var yellow = false;

    window.onload = function() {
        document.getElementById("add").onclick = addItem;
        document.getElementById('remove').onclick = removeItem;
    };
    
    

    function addItem() {
        alert('here');
  /*      var item = document.createElement("li");
        item.innerHTML = document.getElementById("item").value;
        document.getElementById("list").appendChild(item);
        document.getElementById("item").value = "";

        if(yellow) {
            item.style.backgroundColor = "yellow";
        }
        yellow = !yellow;*/

    }

/*
    function removeItem() {
        var item = document.getElementById("item").value;
        var list = document.querySelectorAll("li");
        document.getElementById("item").value = "";
        var found = false;
        for(var i = 0; i < list.length; i++) {
            if(list[i].innerHTML.toLowerCase() == item.toLowerCase() && !found) {
                document.getElementById("list").removeChild(list[i]);
                found = true;
            }
            if(found) {
                if(i % 2 == 0) {
                list[i].style.backgroundColor = "yellow";
                } else {
                    list[i].style.backgroundColor = "white";
                }
                yellow = !yellow;
            }
        }
    }*/
})();