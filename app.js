let age = prompt("What Is Your Age");
let status = prompt("What Is Your Status");

if(age > 17 && status == 'citizen'){
    alert("your are able to vote"  );
}

else if (age < 17 && status !== 'citizen'){
    alert("Wait Until You Can Vote" );
}
