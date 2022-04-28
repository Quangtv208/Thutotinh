var a = prompt("Bạn có yêu tui hông á???(1 là có , 2 là ko)");
function hienthi() {
    do{
        if(a > 3){
            a = prompt("con lol làm gì có số này");
        }else{
            break;
        }
    } while (true) {
        switch (a) {
            case "1":
                document.getElementById("luot1").innerHTML="đùa đó ai rảnh yêu mày";
                break;
        
            case "2":
                document.getElementById("luot2").innerHTML="ko thì kệ mày tao hỏi vui thôi";
                break;
            default:

                alert("Con ngu này biết đọc chữ hong ???");
                break;
        }
    }
}