var str, textarea_text, str_list, str_inverse, i, output_text, get_btn;
// define the variables :
textarea_text = document.getElementsByTagName("textarea")[0];
get_btn = document.getElementsByTagName("button")[0];
// add events :
textarea_text.addEventListener("keyup", reverse_str);
get_btn.addEventListener("click", reverse_str);
// function for reverse the string :
function reverse_str() {
  str = textarea_text.value;
  str_list = str.split("");

  // console.log(str_list.length);
  // console.log(str_list.reverse());

  str_inverse = " ";

  // you can do that for inverse the string :

  // for (i = 1; i <= str_list.length; i++) {
  //   str_inverse.push(str_list[str_list.length - i]);
  // }

  // or :
  for (i = str_list.length - 1; i >= 0; i--) {
    str_inverse += str_list[i];
  }
  // and you can do that :

  // str_inverse = str_list.reverse();

  output_text = document.getElementById("output_text").innerHTML = str_inverse;
}

// now we learn 3 methods for create a script for reverse a string
