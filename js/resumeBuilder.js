
// Bio object
var bio = {
  'name': 'Sai Nimmagadda', 
  'role': 'Web Developer',
  'contacts': {
    'mobile': '0211871826',
    'email': 'sairam.nimmagadda@gmail.com',
    'github': 'https://github.com/sairam1244',
    'location': 'Wellington,Nz'
  },
  'welcomeMessage': 'Welcome to my website! I am a highly-motivated, self-driven problem solver who loves technology and web development. I look forward to sharing my background, skills, experience, and projects with you.',
  'skills': [
    'Web Development', 'Javascript', 'jQuery', 'Angular JS', 'Responsive Design', 'C#','Selenium'
  ],
  'biopic': 'images/fry.jpg'
};
//displaying bio data 
bio.display = function() {
	//replacing substring data with ctual JSON data.
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  $('.header-top').prepend(formattedName + formattedRole); 

  var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  $('.middle-image').append(formattedBioPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $('.middle-text').append(formattedWelcomeMsg);

  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  //appending data to html divs
  $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

  if (bio.skills.length > 0) {
    $('#skills').append(HTMLskillsStart);

    for (var i=0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
      $('.skills').append(formattedSkill);
    }
  }
};

bio.display();

// Work experience
var work = {
  'jobs': [{
    'employer': 'Price Tech',
    'title': 'Web Developer(Part-Time)',
    'location': 'Wellington',
    'dates': '01/16 - 03/16',
    'description': ' I am developing code to extract information from web sites and debugging the existing web applications.'
  }, {
     'employer': 'Cloud Inc',
    'title': 'Web Developer(Part-Time)',
    'location': 'Wellington',
    'dates': '06/15 - 12/15',
    'description': 'I developed custom code for intranet applications, fixing bugs in existing applications and Providing training for clients. '
  }]
};

// Displaying work experience data
work.display = function() {
  $('.work-title').append('<hr class="work-hr">'); 

  work.jobs.forEach(function(job) {
	  //appending data to html div
    $('#workExperience').append(HTMLworkStart);
	//replacing substring data with ctual JSON data.
    var formattedEmployer = HTMLworkEmployer.replace('%data%',job.employer);
    var formattedTitle = HTMLworkTitle.replace('%data%',job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedLocation = HTMLworkLocation.replace('%data%',job.location);
    var formattedDates = HTMLworkDates.replace('%data%',job.dates);  
    var formattedDescription = HTMLworkDescription.replace('%data%',job.description);     
	//appending data	
    $('.work-entry:last').append(formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription);
  });
};

work.display();

// Projects Data 
var projects = {
  'projects': [{
    'title': 'Design Mockup Portfolio',
    'dates': '2016',
    'description': 'A responsive web portfolio from a mockup design',
    'images': ['images/Portfolionew.jpg']
  }, {
    'title': 'Weather Application',
    'dates': '2016',
    'description': 'Check weather in different cities',
    'images': ['images/WeatherApp.jpg']
  }]
};

//Displaying project data.
projects.display = function() {
  $('.projects-title').append('<hr class="projects-hr">');

  projects.projects.forEach(function(project) {
    $('#projects').append(HTMLprojectStart);
	//replacing substring data with ctual JSON data.
    var formattedTitle = HTMLprojectTitle.replace('%data%',project.title);
    var formattedDates = HTMLprojectDates.replace('%data%',project.dates);
    var formattedDescription = HTMLprojectDescription.replace('%data%',project.description);
    $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);

    for (var i=0; i < project.images.length; i++) {
      var formattedImage = HTMLprojectImage.replace('%data%',project.images[i]);      
      $('.project-entry:last').append(formattedImage);
    }
  });
};

projects.display();

// Education Object
var education = {
  'schools': [{
    'name': 'Wellington Institute Of Technology',
    'location': 'Wellington, Newzealand',
    'degree': 'Graduate Diploma in Information Techonology',
    'dates': '2015 - 2016',
    'url': 'https://www.weltec.ac.nz/',
    'majors': ['Information Techonology']
  }, {
    'name': 'Jawaharlal Nehru Technological University',
    'location': 'Kakinada, India',
    'degree': 'Bachelors Of Information Techonology',
    'dates': '2010- 2014',
    'url': 'http://jntuk.edu.in/',
    'majors': ['Information Technology']
  }]
};
//Displaying Education Data 
education.display = function() {
  $('.education-title').append('<hr class="education-hr">');

  education.schools.forEach(function(school) {
    $('#education').append(HTMLschoolStart);   
	//replacing substring data with ctual JSON data.
    var formattedName = HTMLschoolName.replace('%data%',school.name);
    var formattedDates = HTMLschoolDates.replace('%data%',school.dates);
    var formattedLocation = HTMLschoolLocation.replace('%data%',school.location);
    var formattedDegree = HTMLschoolDegree.replace('%data%',school.degree);
    $('.education-entry:last').append(formattedName + formattedDates + formattedLocation + formattedDegree);

    for (var i=0; i < school.majors.length; i++) {
      var formattedMajor = HTMLschoolMajor.replace('%data%',school.majors[i]);            
      $('.education-entry:last').append(formattedMajor);
    }
  });

 

  $('.map-title').append('<hr class="map-hr">');
};

education.display();

// Places I have lived
var living = {
  'places': [{
    'location': 'Vijayawada, India',
  }, {
    'location': 'Auckland, Newzealand',
  }, {
    'location': 'Wellington, Newzealand',
  }]
};

// Maps
$('#mapDiv').append(googleMap);
