// calculate age from birthdate 

// 1: currentDate()
// 2:currentDate.year & birthdate.year ()
// 3:age= curYear - BirthYear => 34
// 4: month of each
// 5: 2024 =34 

const calculateAge = (birthDate) => {
    let todayDate = new Date(); // आजची तारीख
    birthDate = new Date(birthDate); // दिलेली जन्मतारीख Date स्वरूपात रूपांतरित केली

    // Step 2: आजच्या वर्षातून जन्माचे वर्ष वजा करून सुरुवातीचे वय काढले
    let age = todayDate.getFullYear() - birthDate.getFullYear();

    // Step 3: महिना तपासला की वाढदिवस झाला आहे की नाही
    let monthDiff = todayDate.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 || // जर अजून वाढदिवसाचा महिना आला नसेल
        (monthDiff === 0 && todayDate.getDate() < birthDate.getDate()) // किंवा महिना आला असला तरी तारीख अजून यायची आहे
    ) {
        age--; // तर वय एकाने कमी करा
    }

    return age; // शेवटी वय परत करा
};

console.log(calculateAge("1990-05-15")); 
// Output: सध्याच्या तारखेनुसार वय. उदा. जर आज 2025-07-23 असेल, तर वय: 35
// op- will vary depending on the current date 


