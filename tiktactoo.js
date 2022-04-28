 // function aclick(clicked_id ){
        //     let a = document.getElementById(clicked_id);
        //     alert(clicked_id);
        //     a.innerHTML = "string";
        // }
        function startgame() {
            document.styleSheets['0'].cssRules['3'].style.pointerEvents = '';
            // let style = document.createElement("style");
            // style.textContent = "display: grid; justify-content: center; grid-template-columns: auto auto auto;";
            // document.head.appendChild(style);
            var x = document.getElementsByClassName("box1");
            for (let i = 0; i < 9; i++) {
                x[i].innerHTML = " ";
            }
            let y = "X";
            console.log(Math.random());
            if (Math.random() > 0.5) {
                y = "O";
            }
            document.getElementById("turn").innerHTML = y;
            document.getElementById("start").innerHTML = "Player's " + y + " Turn";
        }
        function aclick(clicked_id) {
            document.styleSheets['0'].cssRules['3'].style.pointerEvents = 'none' ;
            game();
            let y;
            y = document.getElementById("turn").innerHTML;
            var eleidd = document.getElementById(clicked_id);
            if (clicked_id == "boxx1" && (eleidd.innerHTML=="X" || eleidd.innerHTML=="O")) {
                document.getElementById("note").innerHTML ="This is box is already in use";
                return;
            }
            if (clicked_id == "boxx2" && (eleidd.innerHTML=="X" || eleidd.innerHTML=="O")) {
                document.getElementById("note").innerHTML ="This is box is already in use";
                return;
            } 
            if (clicked_id == "boxx3" && (eleidd.innerHTML=="X" || eleidd.innerHTML=="O")) {
                document.getElementById("note").innerHTML ="This is box is already in use";
                return;
            }
            if (clicked_id == "boxx4" && (eleidd.innerHTML=="X" || eleidd.innerHTML=="O")) {
                document.getElementById("note").innerHTML ="This is box is already in use";
                return;
            }
            if (clicked_id == "boxx5" && (eleidd.innerHTML=="X" || eleidd.innerHTML=="O")) {
                document.getElementById("note").innerHTML ="This is box is already in use";
                return;
            }
            if (clicked_id == "boxx6" && (eleidd.innerHTML=="X" || eleidd.innerHTML=="O")) {
                document.getElementById("note").innerHTML ="This is box is already in use";
                return;
            }
            if (clicked_id == "boxx7" && (eleidd.innerHTML=="X" || eleidd.innerHTML=="O")) {
                document.getElementById("note").innerHTML ="This is box is already in use";
                return;
            }
            if (clicked_id == "boxx8" && (eleidd.innerHTML=="X" || eleidd.innerHTML=="O")) {
                document.getElementById("note").innerHTML ="This is box is already in use";
                return;
            }
            if (clicked_id == "boxx9" && (eleidd.innerHTML=="X" || eleidd.innerHTML=="O")) {
                document.getElementById("note").innerHTML ="This is box is already in use";
                return;
            }

             // NEXT CONDITION
             
            var eleid = document.getElementById(clicked_id);
            if (clicked_id == "boxx1" && eleid.innerHTML!="X" && eleid.innerHTML!="O") {
                eleid.innerHTML = y;
                 document.getElementById("note").innerHTML ="";
            }
            if (clicked_id == "boxx2" && eleid.innerHTML!="X" && eleid.innerHTML!="O") {
                eleid.innerHTML = y;
                 document.getElementById("note").innerHTML ="";
            } 
            if (clicked_id == "boxx3" && eleid.innerHTML!="X" && eleid.innerHTML!="O") {
                eleid.innerHTML = y;
                 document.getElementById("note").innerHTML ="";
            }
            if (clicked_id == "boxx4" && eleid.innerHTML!="X" && eleid.innerHTML!="O") {
                eleid.innerHTML = y;
                 document.getElementById("note").innerHTML ="";
            }
            if (clicked_id == "boxx5" && eleid.innerHTML!="X" && eleid.innerHTML!="O") {
                eleid.innerHTML = y;
                 document.getElementById("note").innerHTML ="";
            }
            if (clicked_id == "boxx6" && eleid.innerHTML!="X" && eleid.innerHTML!="O") {
                eleid.innerHTML = y;
                 document.getElementById("note").innerHTML ="";
            }
            if (clicked_id == "boxx7" && eleid.innerHTML!="X" && eleid.innerHTML!="O") {
                eleid.innerHTML = y;
                 document.getElementById("note").innerHTML ="";
            }
            if (clicked_id == "boxx8" && eleid.innerHTML!="X" && eleid.innerHTML!="O") {
                eleid.innerHTML = y;
                 document.getElementById("note").innerHTML ="";
            }
            if (clicked_id == "boxx9" && eleid.innerHTML!="X" && eleid.innerHTML!="O") {
                eleid.innerHTML = y;
                 document.getElementById("note").innerHTML ="";
            }

            let z = setturn();
            setmassage(z);
            winner();
        }
        function reset() {
            document.getElementById("start").innerHTML = "Start the game";
            startgame();
        }
        function setturn() {
            let z = document.getElementById("turn").innerHTML;
            if (z == "X") {
                z = "O";
            }
            else {
                z = "X";
            }
            return z;
        }
        function setmassage(stringg) {
            document.getElementById("turn").innerHTML = stringg;
            document.getElementById("start").innerHTML = "Player's " + stringg + " Turn";
        }
        function winner() {
            let box1 = document.getElementById("boxx1").innerHTML;
            let box2 = document.getElementById("boxx2").innerHTML;
            let box3 = document.getElementById("boxx3").innerHTML;
            let box4 = document.getElementById("boxx4").innerHTML;
            let box5 = document.getElementById("boxx5").innerHTML;
            let box6 = document.getElementById("boxx6").innerHTML;
            let box7 = document.getElementById("boxx7").innerHTML;
            let box8 = document.getElementById("boxx8").innerHTML;
            let box9 = document.getElementById("boxx9").innerHTML;
            if (box1!=" " && (box1 == box2 && box2 == box3)) {
                let win = document.getElementById("boxx1").innerHTML;
                document.getElementById("start").innerHTML = "Player " + win + " Wins the Game";
                document.styleSheets['0'].cssRules['3'].style.pointerEvents = 'none';
            }
            if (box4!=" " &&(box4 == box5 && box5 == box6) ){
                let win = document.getElementById("boxx5").innerHTML;
                document.getElementById("start").innerHTML = "Player " + win + " Wins the Game";
                document.styleSheets['0'].cssRules['3'].style.pointerEvents = 'none';
            }
            if(box7!=" " && (box7 == box8 && box8 == box9) ){
                let win = document.getElementById("boxx7").innerHTML;
                document.getElementById("start").innerHTML = "Player " + win + " Wins the Game";
                document.styleSheets['0'].cssRules['3'].style.pointerEvents = 'none'
            }
            if(box1!=" " && (box1 == box5 && box5 == box9) ){
                let win = document.getElementById("boxx1").innerHTML;
                document.getElementById("start").innerHTML = "Player " + win + " Wins the Game";
                document.styleSheets['0'].cssRules['3'].style.pointerEvents = 'none'
            }
            if (box3!=" " &&(box3 == box5 && box5 == box7)) {
                let win = document.getElementById("boxx3").innerHTML;
                document.getElementById("start").innerHTML = "Player " + win + " Wins the Game";
               document.styleSheets['0'].cssRules['3'].style.pointerEvents = 'none' 
            }
            if (box1!=" " &&(box1 == box4 && box4 == box7)) {
                let win = document.getElementById("boxx1").innerHTML;
                document.getElementById("start").innerHTML = "Player " + win + " Wins the Game";
               document.styleSheets['0'].cssRules['3'].style.pointerEvents = 'none' 
            }
            if (box2!=" " &&(box2 == box5 && box5 == box8)) {
                let win = document.getElementById("boxx2").innerHTML;
                document.getElementById("start").innerHTML = "Player " + win + " Wins the Game";
               document.styleSheets['0'].cssRules['3'].style.pointerEvents = 'none' 
            }
            if (box3!=" " &&(box3 == box6 && box6 == box9)) {
                let win = document.getElementById("boxx3").innerHTML;
                document.getElementById("start").innerHTML = "Player " + win + " Wins the Game";
               document.styleSheets['0'].cssRules['3'].style.pointerEvents = 'none' 
            }
        }
        function game(){
            document.styleSheets['0'].cssRules['3'].style.pointerEvents = '' ;
        }