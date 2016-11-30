var myList = [];
var allList;

function addItem()
{
  var input;
  input = document.getElementById("newItem").value;
  var index = myList.indexOf(input);
  if(index == -1)
  {
     myList.push(input);
  }

     console.log(myList);

     var list;
     list = document.getElementById("listDisplay");
     var item;
     item = document.createElement("li");

     var btnClose;
     btnClose = document.createElement("BUTTON");
     btnClose.classList.add("btn");
     btnClose.classList.add("btn-danger");
     btnClose.classList.add("btn-xs");
     var iconClose;
     iconClose = document.createElement("SPAN");
     iconClose.classList.add("glyphicon");
     iconClose.classList.add("glyphicon-remove");
     btnClose.appendChild(iconClose);

     btnClose.addEventListener("click", removeParentListItem);

     var itemName;
     itemName = document.createTextNode(input);
     item.appendChild(itemName);
     item.appendChild(btnClose);
     list.appendChild(item);
     document.getElementById("newItem").value = "";
}

function removeParentListItem()
{
  var mom = this.parentNode;
  var itemRemove = mom.firstChild.textContect;
  var itemIndex = myList.itemRemove;
    myList.splice(itemIndex,1);
  var grandma = mom.parentNode;
  grandma.removeChild(mom);

  console.log(myList);
}

function saveList()
{
  allList = myList.toString();
  setCookie("item", allList, 10);
  console.log(allList);
}

function clearList()
{
  document.getElementById("listDisplay").innerHTML = "";
  myList = [];
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
