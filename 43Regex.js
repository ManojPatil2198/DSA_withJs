// // introduction  to regular expressions

// // regular expressions are sequnces of characters that define a search pattern .
// // these patterns are widely used for string searching and manipulation.in
// //validation,regex helps ensure that strings such as email addresses and passwords
// //conform to expected formats.   

// //
// //रेग्युलर एक्सप्रेशन्स (Regular Expressions) म्हणजे अक्षरांचा एक ठराविक क्रम असतो,
// //  जो शोध घेण्यासाठी किंवा स्ट्रिंगमध्ये विशिष्ट पॅटर्न शोधण्यासाठी वापरला जातो.

// // हे पॅटर्न स्ट्रिंग शोधणे आणि त्यात बदल करणे यासाठी मोठ्या प्रमाणावर वापरले जातात.
// // व्हॅलिडेशनमध्ये, regex वापरून ईमेल पत्ता, पासवर्ड यांसारख्या स्ट्रिंग्स ठराविक फॉरमॅटमध्ये आहेत की नाही हे तपासता येते.


// // वापर      	regex
// ईमेल चेक	    - /^[\w.-]+@[a-zA-Z\d.-]+\.\w+$/
// मोबाईल नंबर    	- /^\d{10}$/
// पासवर्ड नियम     - /^(?=.*[A-Z])(?=.*\d).{8,}$/
// पिनकोड चेक	   - /^\d{6}$/
// सर्व स्पेस काढा    -/\s+/g



// Flag	     अर्थ
// g	   global – सर्व मॅच शोधतो
// i	   insensitive – case insensitive शोध (A = a)
// m	   multi-line – अनेक ओळींसाठी शोध
// s	   dotAll – . ने newline सुद्धा match करतो


// सामान्य Regex pattern:
// Pattern	     अर्थ
// .	       कुठलाही एक अक्षर
// ^	       स्ट्रिंगची सुरुवात
// $	       स्ट्रिंगचा शेवट
// *      	   0 किंवा जास्त वेळा
// +	       किमान 1 वेळा
// ?	       0 किंवा 1 वेळा
// \d	       अंक (0 ते 9)
// \w	       अक्षर किंवा अंक
// \s	       space/tab/newline
// [abc]	   a किंवा b किंवा c
// [^abc]	   a, b, c वगळता इत