 ////////////////////////////////////// COLLECTION OF DATA 
////////////////////////////////////// FROM THE HTML 


//////// INIT DEFAULT VALUES 

				var Events = 2;
        var Organisers = 2;
        var Sponsors = 0;
        var Exhibitors = 0;
        var TicketPrice = 10;
       	var AttendeesPerEvent = 100;
        var EventLength = 1;
        var EventLengthLabels = ["30mins","1 Hour", 
																	"2 Hours", "3 Hours", "1 Day"]
        var TotalAttendees = 0;
        var Speakers = 2;
        var Period = "Monthly";
       	var GraphArray = [ ['Platform','Advertised Price','P2'],
														['Tevent',5,0] ];
        
///////SLIDERS 



        var AttendeeSlider 		= document.getElementById("AttendeeSlider");
        var AttendeeNumber 		= document.getElementById("AttendeeNumber");
				
        var EventLengthSlider = document.getElementById("EventLengthSlider");
        var EventLengthNumber = document.getElementById("EventLength");
        
//// NUMERICAL INPUTS 
        var EventsInput 			= document.getElementById("Events");
        var PeriodInput 			= document.getElementById("Period");
        var OrganisersInput 	= document.getElementById("Organisers");
        var SponsorsInput 		= document.getElementById("Sponsors");
        var ExhibitorsInput 	= document.getElementById("Exhibitors");
        var TicketPriceInput 	= document.getElementById("TicketPrice");     
        var SpeakersInput   	= document.getElementById("Speakers");     

//// CHECKBOX INPUTS 
				var RoomsInput 				= document.getElementById("Rooms");
        var MeetingsInput 		= document.getElementById("Meetings");
        var ReplayInput 			= document.getElementById("Replay");
        var HDRecordInput 		= document.getElementById("HDRecord");
        var ContactsInput 		= document.getElementById("Contacts");
        var MultitrackInput 	= document.getElementById("Multitrack");        
        
                //Default Slider Labels 
        AttendeeNumber.innerHTML 		= AttendeeSlider.value; 
        EventLengthNumber.innerHTML = EventLengthLabels[EventLengthSlider.value];

				// Note: Not initialising checkbox values, as they are read directly. 
								
// UPDATE WHEN INPUTS CHANGE 

								//SLIDERS 
               AttendeeSlider.oninput = function() {AttendeeNumber.innerHTML = this.value; 
																										AttendeesPerEvent = this.value; 								drawBasic();}
                                                    
               EventLengthSlider.oninput = function() {	
               										EventLengthNumber.innerHTML = EventLengthLabels[EventLengthSlider.value];
																	EventLength = EventLengthSlider.value == 0 ? 0.5 : this.value;    drawBasic();}
                  
	
                //NUMERICAL
                EventsInput.oninput = function() 			{Events = this.value; 				drawBasic();}
                SpeakersInput.oninput = function() 		{Speakers = this.value; 			drawBasic();}
                OrganisersInput.oninput = function() 	{Organisers = this.value;			drawBasic();}
                SponsorsInput.oninput = function() 		{Sponsors = this.value;				drawBasic();}
                ExhibitorsInput.oninput = function() 	{Exhibitors = this.value;			drawBasic();}
                TicketPriceInput.oninput = function() {TicketPrice = this.value; 		drawBasic();}
               
                PeriodInput.oninput = function() 			
                {Period = this.value; Events = 1; EventsInput.value = 1;
                /// Hide the number of events if one-off is clicked. 
                if (this.value == "OneOff") {EventsInput.type = "hidden";}
                else 												{EventsInput.type = "number";}         	drawBasic();}		
																											

                
                //CHECKBOXES
                RoomsInput.oninput = function() 			{drawBasic();}
                MeetingsInput.oninput = function() 	  {drawBasic();}
                ReplayInput.oninput = function() 			{drawBasic();}
                HDRecordInput.oninput = function() 		{drawBasic();}
                ContactsInput.oninput = function() 		{drawBasic();}
                MultitrackInput.oninput = function()  {drawBasic();}
                
                        
////////////////////////////////////// SET PACKAGE OBJECT LITERALS IN JSON
////////////////////////////////////// OBVIOUSLY I MADE THIS IN EXCEL
////////////////////////////////////// AND THEN CONVERTED TO JSON 

var Packages = [

 {
   "Name": "Hopin",
   "Plan": "Free",
   "Period": "Monthly",
   "MaxEventSize": 100,
   "MaxMonthlyAttendees": 100,
   "MaxOrganisers": 1,
   "MaxEventLength": 2,
   "MaxSponsors": 5,
   "BaseFee": 0,
   "ExtraEventFee": 0,
   "TicketFee": 15,
   "IncludedAttendees": 100,
   "ExtraAttendeeFee": 0.5,
   "IncludedOrganisers": 1,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 1,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1,
   "Contacts": 1,
   "Meetings": 1
 },
 {
   "Name": "Hopin",
   "Plan": "Starter",
   "Period": "Monthly",
   "MaxEventLength": 72,
   "MaxSponsors": 20,
   "BaseFee": 99,
   "ExtraEventFee": 0,
   "TicketFee": 7,
   "IncludedAttendees": 100,
   "ExtraAttendeeFee": 0.5,
   "IncludedOrganisers": 1,
   "ExtraOrganiserFee": 99,
   "OrganisersRegister": 1,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1,
   "Contacts": 1,
   "Meetings": 1
 },
 {
   "Name": "Hopin",
   "Plan": "Starter",
   "Period": "Annual",
   "MaxEventLength": 72,
   "MaxSponsors": 20,
   "BaseFee": 999,
   "ExtraEventFee": 0,
   "TicketFee": 7,
   "IncludedAttendees": 1200,
   "ExtraAttendeeFee": 0.5,
   "IncludedOrganisers": 1,
   "ExtraOrganiserFee": 999,
   "OrganisersRegister": 1,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1,
   "Contacts": 1,
   "Meetings": 1
 },
 {
   "Name": "Hopin",
   "Plan": "Growth",
   "Period": "Monthly",
   "MaxEventLength": 72,
   "MaxSponsors": 20,
   "BaseFee": 799,
   "ExtraEventFee": 0,
   "TicketFee": 4,
   "IncludedAttendees": 100,
   "ExtraAttendeeFee": 2,
   "IncludedOrganisers": 5,
   "ExtraOrganiserFee": 99,
   "OrganisersRegister": 1,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1,
   "Contacts": 1,
   "Meetings": 1
 },
 {
   "Name": "Hopin",
   "Plan": "Growth",
   "Period": "Annual",
   "MaxEventLength": 72,
   "MaxSponsors": 20,
   "BaseFee": 8004,
   "ExtraEventFee": 0,
   "TicketFee": 4,
   "IncludedAttendees": 1200,
   "ExtraAttendeeFee": 2,
   "IncludedOrganisers": 5,
   "ExtraOrganiserFee": 999,
   "OrganisersRegister": 1,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1,
   "Contacts": 1,
   "Meetings": 1
 },
 {
   "Name": "SwapCard",
   "Plan": "Free",
   "Period": "Monthly",
   "MaxEventSize": 50,
   "MaxMonthlyAttendees": 50,
   "MaxOrganisers": 1,
   "MaxEventLength": 48,
   "MaxSponsors": 20,
   "BaseFee": 0,
   "ExtraEventFee": 0,
   "TicketFee": 0,
   "IncludedAttendees": 50,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 1,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 0,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1,
   "Multitrack": 1,
   "Contacts": 1,
   "Meetings": 1
 },
 {
   "Name": "SwapCard",
   "Plan": "Meetup",
   "Period": "Monthly",
   "MaxOrganisers": 5,
   "MaxEventLength": 120,
   "MaxSponsors": 20,
   "BaseFee": 120,
   "ExtraEventFee": 0,
   "TicketFee": 0,
   "IncludedAttendees": 100,
   "ExtraAttendeeFee": 7,
   "IncludedOrganisers": 5,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 0,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1,
   "Multitrack": 1,
   "Contacts": 1,
   "Meetings": 1
 },
 {
   "Name": "SwapCard",
   "Plan": "Meetup",
   "Period": "Annual",
   "MaxOrganisers": 5,
   "MaxEventLength": 120,
   "MaxSponsors": 20,
   "BaseFee": 1224,
   "ExtraEventFee": 0,
   "TicketFee": 0,
   "IncludedAttendees": 1200,
   "ExtraAttendeeFee": 7,
   "IncludedOrganisers": 5,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 0,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1,
   "Multitrack": 1,
   "Contacts": 1,
   "Meetings": 1
 },
 {
   "Name": "RuntheWorld",
   "Plan": "Free",
   "Period": "Monthly",
   "MaxEventSize": 50,
   "MaxMonthlyAttendees": 50,
   "MaxSponsors": 0,
   "MaxExhibitors": 0,
   "NoMaxPaidAttendees": 1,
   "MaxSessions": 1,
   "BaseFee": 0,
   "ExtraEventFee": 0,
   "TicketFee": 15,
   "IncludedAttendees": 50,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 1,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "HDRecord": 1
 },
 {
   "Name": "RuntheWorld",
   "Plan": "Pro",
   "Period": "Monthly",
   "MaxMonthlyAttendees": 500,
   "MaxSponsors": 0,
   "MaxExhibitors": 0,
   "NoMaxPaidAttendees": 1,
   "MaxSessions": 3,
   "BaseFee": 99,
   "ExtraEventFee": 0,
   "TicketFee": 15,
   "IncludedAttendees": 500,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 1,
   "ExtraOrganiserFee": 99,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "HDRecord": 1
 },
 {
   "Name": "RuntheWorld",
   "Plan": "Pro",
   "Period": "Annual",
   "MaxMonthlyAttendees": 500,
   "MaxSponsors": 0,
   "MaxExhibitors": 0,
   "NoMaxPaidAttendees": 1,
   "MaxSessions": 3,
   "BaseFee": 948,
   "ExtraEventFee": 0,
   "TicketFee": 15,
   "IncludedAttendees": 500,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 1,
   "ExtraOrganiserFee": 948,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "HDRecord": 1
 },
 {
   "Name": "Airmeet",
   "Plan": "Free Social Webinar",
   "Period": "Monthly",
   "MaxEventSize": 100,
   "MaxMonthlyAttendees": 100,
   "MaxOrganisers": 1,
   "MaxEventLength": 1.5,
   "MaxSponsors": 0,
   "MaxExhibitors": 0,
   "BaseFee": 0,
   "ExtraEventFee": 0,
   "TicketFee": 8,
   "IncludedAttendees": 100,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 10,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1
 },
 {
   "Name": "Airmeet",
   "Plan": "Social Webinar",
   "Period": "Monthly",
   "MaxEventSize": 100,
   "MaxOrganisers": 10,
   "MaxSponsors": 20,
   "MaxExhibitors": 0,
   "BaseFee": 99,
   "ExtraEventFee": 0,
   "TicketFee": 5,
   "IncludedAttendees": 100,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 10,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1
 },
 {
   "Name": "Airmeet",
   "Plan": "Social Webinar",
   "Period": "Monthly",
   "MaxEventSize": 300,
   "MaxOrganisers": 10,
   "MaxSponsors": 20,
   "MaxExhibitors": 0,
   "BaseFee": 249,
   "ExtraEventFee": 0,
   "TicketFee": 5,
   "IncludedAttendees": 300,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 10,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1
 },
 {
   "Name": "Airmeet",
   "Plan": "Social Webinar",
   "Period": "Monthly",
   "MaxEventSize": 500,
   "MaxOrganisers": 10,
   "MaxSponsors": 20,
   "MaxExhibitors": 0,
   "BaseFee": 349,
   "ExtraEventFee": 0,
   "TicketFee": 5,
   "IncludedAttendees": 500,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 10,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1
 },
 {
   "Name": "Airmeet",
   "Plan": "Social Webinar",
   "Period": "Monthly",
   "MaxEventSize": 1000,
   "MaxOrganisers": 10,
   "MaxSponsors": 20,
   "MaxExhibitors": 0,
   "BaseFee": 599,
   "ExtraEventFee": 0,
   "TicketFee": 5,
   "IncludedAttendees": 1000,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 10,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1
 },
 {
   "Name": "Airmeet",
   "Plan": "Social Webinar",
   "Period": "Annual",
   "MaxEventSize": 100,
   "MaxOrganisers": 10,
   "MaxSponsors": 20,
   "MaxExhibitors": 0,
   "BaseFee": 1068,
   "ExtraEventFee": 0,
   "TicketFee": 5,
   "IncludedAttendees": 100,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 10,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1
 },
 {
   "Name": "Airmeet",
   "Plan": "Social Webinar",
   "Period": "Annual",
   "MaxEventSize": 300,
   "MaxOrganisers": 10,
   "MaxSponsors": 20,
   "MaxExhibitors": 0,
   "BaseFee": 2688,
   "ExtraEventFee": 0,
   "TicketFee": 5,
   "IncludedAttendees": 300,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 10,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1
 },
 {
   "Name": "Airmeet",
   "Plan": "Social Webinar",
   "Period": "Annual",
   "MaxEventSize": 500,
   "MaxOrganisers": 10,
   "MaxSponsors": 20,
   "MaxExhibitors": 0,
   "BaseFee": 3768,
   "ExtraEventFee": 0,
   "TicketFee": 5,
   "IncludedAttendees": 500,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 10,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1
 },
 {
   "Name": "Airmeet",
   "Plan": "Social Webinar",
   "Period": "Annual",
   "MaxEventSize": 1000,
   "MaxOrganisers": 10,
   "MaxSponsors": 20,
   "MaxExhibitors": 0,
   "BaseFee": 6348,
   "ExtraEventFee": 0,
   "TicketFee": 5,
   "IncludedAttendees": 1000,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 10,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1,
   "Replay": 1
 },
 {
   "Name": "Remo",
   "Plan": "Free",
   "Period": "Monthly",
   "MaxEventSize": 50,
   "MaxMonthlyAttendees": 50,
   "MaxOrganisers": 1,
   "MaxEventLength": 0.75,
   "MaxSponsors": 1,
   "MaxExhibitors": 0,
   "BaseFee": 0,
   "ExtraEventFee": 0,
   "TicketFee": 0,
   "IncludedAttendees": 50,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 1,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1
 },
 {
   "Name": "Remo",
   "Plan": "Essentials ",
   "Period": "Annual",
   "MaxEventSize": 1800,
   "MaxMonthlyAttendees": 1800,
   "MaxOrganisers": 2,
   "MaxEventLength": 24,
   "MaxSponsors": 6,
   "MaxExhibitors": 0,
   "BaseFee": 3240,
   "ExtraEventFee": 0,
   "TicketFee": 0,
   "IncludedAttendees": 1800,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 2,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1
 },
 {
   "Name": "Remo",
   "Plan": "Ultimate",
   "Period": "Annual",
   "MaxEventSize": 4800,
   "MaxMonthlyAttendees": 4800,
   "MaxSponsors": 10,
   "MaxExhibitors": 0,
   "BaseFee": 10560,
   "ExtraEventFee": 0,
   "TicketFee": 0,
   "IncludedAttendees": 4800,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 5,
   "ExtraOrganiserFee": 1200,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1
 },
 {
   "Name": "Remo",
   "Plan": "Keynote",
   "Period": "OneOff",
   "MaxEventSize": 160,
   "MaxMonthlyAttendees": 160,
   "MaxOrganisers": 2,
   "MaxEventLength": 48,
   "MaxSponsors": 10,
   "MaxExhibitors": 0,
   "BaseFee": 400,
   "ExtraEventFee": 1,
   "TicketFee": 0,
   "IncludedAttendees": 160,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 2,
   "ExtraOrganiserFee": 0,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1
 },
 {
   "Name": "Remo",
   "Plan": "Summit",
   "Period": "OneOff",
   "MaxEventSize": 500,
   "MaxMonthlyAttendees": 500,
   "MaxExhibitors": 0,
   "BaseFee": 2000,
   "ExtraEventFee": 1,
   "TicketFee": 0,
   "IncludedAttendees": 160,
   "ExtraAttendeeFee": 0,
   "IncludedOrganisers": 5,
   "ExtraOrganiserFee": 200,
   "OrganisersRegister": 0,
   "SpeakersRegister": 1,
   "Rooms": 1,
   "HDRecord": 1
 }


];



////////////////////////////////////// FUNCTION 1: 
////////////////////////////////////// DOES THE PACKAGE 
////////////////////////////////////// MEET THE VALIDITY CRITERIA?


function calculateValidPackages() {

	ValidPackages = new Array(0);
  InvalidPackages = new Array(0);
  
  //Filter by having the correct period (Monthly, Annual, )
  PeriodPackages = Packages.filter(p => p.Period == Period || p.Period == "Monthly" && Period == "OneOff");  
  for (let index = 0; index < PeriodPackages.length; ++index) 
  {
    const package = PeriodPackages[index];
    /// Check against all parameters 
 		/// Could use Array.Filter here but this is actually more effective lol 
    
		var RegistrationsPerEvent = Number(AttendeesPerEvent);
		if (package.OrganisersRegister == 1) {RegistrationsPerEvent += Number(Organisers)-1;}    
    if (package.SpeakersRegister == 1)  {RegistrationsPerEvent += Number(Speakers);}  
    
    var TotalRegistrations = RegistrationsPerEvent * Events;
    //console.log("reg per event " + package.Name + " " + RegistrationsPerEvent)
    //console.log("total reg for " + package.Name + " " + TotalRegistrations)
    //console.log(TicketPrice)
    if (		
    		// CHECK NUMERICAL CONDITIONS - NULL MEANS NO MAX (automatic pass). Special Logic for RuntheWorld at end. 
    				(package.MaxOrganisers >= Organisers 			  				    || typeof package.MaxOrganisers 	===  "undefined")
         && (package.MaxSponsors   >= Sponsors 									    || typeof package.MaxSponsors			===    "undefined")
         && (package.MaxEventLength >= EventLength  					   	  || typeof package.MaxEventLength  === "undefined")
         && (package.MaxExhibitors >= Exhibitors  					     	  || typeof package.MaxExhibitors  === "undefined")
         && (package.MaxEventSize  >= RegistrationsPerEvent         || typeof package.MaxEventSize    ===   "undefined") 
         && (package.MaxMonthlyAttendees >=TotalRegistrations       || typeof package.MaxMonthlyAttendees === "undefined" 							
         																			 || TicketPrice > 1.5 && typeof package.NoMaxPaidAttendees !== "undefined") 							
                 
         // CHECK FEATURES (BOOL) CONDITIONS - NuLL MEANS NO FEATURE (automatic fail)
         && (document.querySelector('#Rooms:checked') == null  			|| typeof package.Rooms !== "undefined")
         && (document.querySelector('#Meetings:checked') == null  	|| typeof package.Meetings !== "undefined")
         && (document.querySelector('#HDRecord:checked') == null  	|| typeof package.HDRecord !== "undefined")
         && (document.querySelector('#Contacts:checked') == null  	|| typeof package.Contacts !== "undefined")
         && (document.querySelector('#Multitrack:checked') == null  || typeof package.Multitrack !== "undefined")
         && (document.querySelector('#Replay:checked') == null  		|| typeof package.Replay !== "undefined")
        )
        
    	{ValidPackages.push(package);}
      else {InvalidPackages.push(package);}
 	}
}




////////////////////////////////////// FUNCTION 2: 
////////////////////////////////////// CALCULATE PACKAGE PRICES  
////////////////////////////////////// ADDS A PRICE PROPERTY TO EACH ELEMENT IN VALIDPACKAGES ARRAY 

function calculatePackagePrices() {
	
  var TotalAttendees = Period == "One-Off" ? AttendeesPerEvent : AttendeesPerEvent * Events;
  
	/////// LOOP OVER PREVIOUSLY CALCULATED 'VALID PACKAGES'
	for (let index = 0; index < ValidPackages.length; ++index) 
  {
    const package = ValidPackages[index];
    
    // Calculate the Registrations 
    var RegistrationsPerEvent = Number(AttendeesPerEvent);
		if (package.OrganisersRegister == 1) {RegistrationsPerEvent += Number(Organisers)-1;}    
    if (package.SpeakersRegister == 1)  {RegistrationsPerEvent += Number(Speakers);}   
        
    var TotalRegistrations = RegistrationsPerEvent * Events;
    
    // Calculate the price     
    ///////////////////////
    // I've declared a lot of variables here, may seem unnecessary but if i ever want a breakdown it will be very useful. 
    
    					// Figure out number of surcharged attendees & organisers. Special logic for Hopin. 
              var IncludedAttendees = package.IncludedAttendees
              
              if (package.Name == "Hopin") {
                    var IncludedAttendees = Period == "Annual" ? 1200 + (Number(Organisers) -1) : 100 + (Number(Organisers) -1); }
                  
              var ExtraOrganisers = Math.max(Organisers - package.IncludedOrganisers,0);
              var ExtraAttendees = Math.max(TotalRegistrations - IncludedAttendees,0);
              		
                  
              // Start with Base Fee
                 var PackagePrice = package.BaseFee;
                 package.AdvertisedPrice = PackagePrice;
                 
    // + Extra Organiser Cost 		
                  if (Organisers > package.IncludedOrganisers)
                  {  
                    var OrganiserFee = ExtraOrganisers * package.ExtraOrganiserFee;
                    PackagePrice += OrganiserFee;
                  }
                  
     // + Extra Attendee Cost   
                  if (TotalRegistrations > IncludedAttendees)
                  {
                      var ExtraAttendees = TotalRegistrations - IncludedAttendees;
                      PackagePrice += ExtraAttendees * package.ExtraAttendeeFee;
                  }

    ///// + Ticket Commission 
              			// Special Exception for RuntheWorld, with Minimum Ticket Fee above $1.50
                  if (TicketPrice>1.5 && typeof package.MinimumTicketFee !== "undefined")
                  {
                      PackagePrice += TicketPrice * TotalAttendees 
                                     * Math.max(package.TicketFee/100,package.MinimumTicketFee);
                  }
                  else //otherwise, just calculate ticket fee normally. 
                  {
                  PackagePrice += TicketPrice * TotalAttendees * package.TicketFee/100;
                  }
                  

    ///SAVE TO ORIGiNAL ARRAY AS 'PRICE' PROPERTY
		package.Price = PackagePrice;
    package.ExtraFees = PackagePrice - package.AdvertisedPrice
	}
}





////////////////////////////////////// FUNCTION 3: 
////////////////////////////////////// Remove Plans from the same Provider
////////////////////////////////////// If a lower tier is sufficient.
function removeDuplicates()
{
	// Sort by Price 
  ValidPackages.sort(function(a, b){ return a.Price-b.Price});

	// Take the First Unique Element
  const seen = new Set();
  FilteredPackages = ValidPackages.filter(P => 
{ const duplicate = seen.has(P.Name); seen.add(P.Name); return !duplicate; });
  
  //FilteredPackages is now sorted by price & has duplicates of a higher price removed. 
}

////////////////////////////////////// FUNCTION: 
////////////////////////////////////// DRAW THE CHART 
////////////////////////////////////// 

google.charts.load('current', {'packages': ['corechart', 'bar']});
google.charts.setOnLoadCallback(chartinit);

function chartinit () {
var array = calculatePrice();
      var data = google.visualization.arrayToDataTable(array);
			var formatter = new google.visualization.NumberFormat({prefix: "$"});


			// Reformat our data.
			formatter.format(data, 1);
			formatter.format(data, 3);
      formatter.format(data, 4);

      window.options = 
      {
        //title: 'Event Package Pricing',
        chartArea: {width: '70%'},
        isStacked: true,
        animation:{ duration: 200,startup: true,easing: 'inAndout'},
        legend: {position:'none'},
        annotations: {alwaysOutside: true},
        hAxis: 
        	{
          title: 'Price ($ USD)',
          minValue: 0,
          gridlines: {color: 'ffffff'},
          format: 'short'
        	}
     	};
      

      window.chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }


function drawBasic() {

			var array = calculatePrice();
      var data = google.visualization.arrayToDataTable(array);
			var formatter = new google.visualization.NumberFormat({prefix: "$"});


			// Reformat our data.
			formatter.format(data, 1);
			formatter.format(data, 3);
			formatter.format(data, 4);

      //var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
      
  
    
}




////////////////////////////////////// FUNCTION 4: 
////////////////////////////////////// CALCULATE PRICES WHEN INPUTS PROVIDED
////////////////////////////////////// 

function calculatePrice()
{
	Attendees = AttendeesPerEvent * Events;					//Total Monthly Tickets
  
  var teventPricePerAttendeeHour = 
						0.35 																			 //Base 
            * Math.max(0.75 - Attendees/4000,  0.6)     // Discount for Attendee Volume
            * Math.max(1    - EventLength/10, 0.65);	 // Discount for longer Events
            
	var teventPrice = Math.ceil((Attendees 
                              * EventLength 
                              * teventPricePerAttendeeHour
                              * (Period == "Annual" ? 10 : 1) 
															)/5)*5 -0.01; //Rounds to nearest 5, minus a cent. 
                              
  //if (Period == "Annual") {teventPrice = Math.max(teventPrice,239.99);}
  //Run the calculation steps - Filter by Conditions, Find Price, Remove Duplicates. 
  calculateValidPackages();
	calculatePackagePrices();
  removeDuplicates();
 
  // Output the list of prices and VALID Packages
	
  var array2 = [  ['Platform','Advertised Base Price',{role: 'style'},'Extra Fees',{ role: 'annotation' }, {role: 'style'}],
								  ['Tevent',teventPrice,'purple',0,teventPrice,'purple'] ];
  
  for (let index = 0; index < FilteredPackages.length; ++index) 
  {
  	let price = FilteredPackages[index].Price;
  	let percentChange = Math.round((price / teventPrice - 1) * 100);
    
    //Add an Entry to the Visualisation Array. 
    {
        array2.push([
                      FilteredPackages[index].Name + " " + FilteredPackages[index].Plan, //Label
                      FilteredPackages[index].AdvertisedPrice, 													//first section
                      'black',																	 															//style (colour)
                      FilteredPackages[index].ExtraFees,			 													//2nd section 
                      FilteredPackages[index].Price,					 													//annotation
                      'grey'																																  //style (colour)
                      ] 
                      );
    }
    }
    
    /////////////////// Find the INVALID Packages 
    /////////////////////////////////////////////
    
    // Filter out Duplicates 
    FilteredInvalidPackages = new Array(0);
    
    for (const p of InvalidPackages)
    {
        if (FilteredPackages.filter(vp => vp.Name == p.Name).length == 0) //Check no package from that platform has passed. 
        {
          const i = FilteredInvalidPackages.findIndex(q => q.Name === p.Name);
          if (i > -1) {FilteredInvalidPackages[i] = p; console.log("overwrote " + FilteredInvalidPackages[i].Plan);} // (2)
          else {FilteredInvalidPackages.push(p); console.log("added " + p.Name +" " + p.Plan);}
        }
   	}
    
    // Add to a HTML string (DIRTY) 
  failstring = '<p style="color:#FF0000">No sufficient packages from: </p><ul>';
  FilteredInvalidPackages.forEach(p => failstring += "<li>" + p.Name + "</li>");
	failstring += "</ul>";
  document.getElementById("2").innerHTML = failstring;
  
  
  return array2;
}


//////// Old code to display price as string 
  
      /*
    // Add a string for each platform, to the output.
  	PriceOutput += 
    FilteredPackages[index].Name + " " 
    + FilteredPackages[index].Plan + " : $" 
    + "<b>" + FilteredPackages[index].Price + "</b>"
    + ` (+${percentChange}%)` ;
    
		//Special Exception for Remo
    if (FilteredPackages[index].Plan == "Essentials") {PriceOutput += " annual only";}
    
    // Add Break 
    PriceOutput += "<br>";
    */
	//document.getElementById('1').innerHTML = "Tevent's Price:  $<b>" + teventPrice + "</b>";
  //document.getElementById('price').innerHTML = PriceOutput;


////////////// FURTHER IMPROVEMENTS TO MAKE 
