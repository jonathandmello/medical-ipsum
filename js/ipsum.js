

//document ready is a safety precaution that makes sure all of the HTML document has loaded before we try to add behavior.
$(document).ready(function(){

//Start event listener for click
$("#ipsum-form").submit(function() { 
  var paragraphs = '';

//Determine which of the check boxes is checked 
  var chosen_button = $("#ipsum-form input[name='choice']:checked").val();
  
//Grab the paragraph number the user enters
  var paragraph_number = $("#paragraph_count").val();

//Define var words as an empty array
  var words = 
    [
      "lab test results", 
      "current regimen", 
      "keep healthy", 
      "most cases",
      "are preventable", 
      "virus infection rates slowing", 
      "slight increase in your", 
      "blood sugar levels", 
      "this week", 
      "ventricular fluctuation", 
      "in the lower arbortarium",
      "seem to be",
      "a cause of disruption to the", 
      "right centricular vehicula", 
      "dosage of Seratonin", 
      "to the heart directly",
      "abscessed tooth swollen face", 
      "dentist prescribed amoxicillin", 
      "swelling decreased", 
      "increased pain", 
      "glucometer", 
      "pedometer", 
      "blood Test", 
      "patient",
      "abnormality",
      "health record",
      "universal",
      "ayurveda",
      "root canal",
      "in the event of",
      "different types",
    ];


//Vary the number of sentences in each paragraph randomly
var sentence_number = Math.floor( (Math.random()+1) * 2);
//var sentence_number = 3;

//Use a function that randomizes the contents of an array
  function fisherYates(words) {
    var i = words.length, j, tempi, tempj;
    if ( i == 0 ) return false;
    while ( --i ) {
       j = Math.floor( Math.random() * ( i + 1 ) );
       tempi = words[i];
       tempj = words[j];
       words[i] = tempj;
       words[j] = tempi;
       }
       return words;
    }

//Start the first FOR loop that builds sentences from words
for ( var z = 0; z < paragraph_number; z++ ) {
  var sentence_group = '';

  //Start the second FOR loop that builds sentence groups from sentences
  for ( var y = 0; y < sentence_number; y++ ) {

    //Start the third FOR loop that builds paragraphs from sentence groups
    for ( var x = 0; x < words.length; x++ ) {

      //Create a variable for the randomized array of words
      var words_random = fisherYates(words);
      // var words_selected = words_random.splice(0,6);

      //Convert array to string with no commas or quotes, add period to end
      var sentence = words_random.slice(0,7).toString().replace(/,/g, ' ') + '. ';

      //Capitalize first letter in string
      function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
      }
      var sentence_capped = capitalizeFirstLetter(sentence);
    //End the first FOR loop that builds sentences from words
    }
  sentence_group += sentence_capped;  
  //End the second FOR loop that builds sentence groups from sentences
  }
  paragraphs+='<p>' + sentence_group + '</p>';
//End the third FOR loop that builds and spaces paragraphs from sentence groups
}

$("#print-paragraphs").empty().html(paragraphs);

//Prevent form from actually submitting so page does not reload
return false; 

//End jQuery event listener
  });

//End document ready
});
 
