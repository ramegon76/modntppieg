/********************************************************
    @Publish Web Attributes
********************************************************/

PublishWebAttributes = {
    useTheme: true,                         // Personalize your export styles use theme builder for bizagi and copy the css file in /libs/css/theme.css
    preserveHTML: true,                     // Preserve your properties / description and attributes html format
    showPublishDate: false,                 // Show your publish date
    subNavigation: false,                   // Show a subnavigation bar for properties
    showPerformersList: false,              // Show a performers link
    maxLenghtTableViewDescription: 125,     // Number of characters in description
    maxLenghtDescription: 800,              // Number of characters in description dialog
    ie8:{
        draggable: false,
        diagramsSupported: 38
    }
};


/********************************************************
    @Theme Definition Colors (works with less)

    (http://lesscss.org/usage/#browser-support)
    Just for modern browsers
    IE9+,  Firefox and Chrome Last Versions
    Version: 2.0.0
********************************************************/

//  If you want add a css file to create aditional CSS rules. 
//  Create a new CSS file with the name "theme-client.css" on root folder.

ThemeColors = {
	                                                //  Included in newest version - 11-30-2016//
    "@font-family":"'None'",                        //  Font Family - *None for default Font (Helvetica) or add the name between 'Font Name'.  Use just safe fonts. For help (http://www.cssfontstack.com/)
    "@icon-color":"#030303",                        //  Font Icons color
    "@alert-box-message":"#a98011",                 //  Background of alert messages
    "@hover-dashboard-panel": "rgb(255, 165, 0)",   //  Border of dashboard panel
    //Include your Own css

    //Older versions//
    "@header": "#003057",
    "@header-border": "rgb(0, 48, 87)",
    "@header-link": "#ECE9E8",
    "@navigation": "rgb(255, 255, 255)",
    "@navigation-border": "rgb(243, 246, 244)",
    "@navigation-link": "#003057",
    "@content": "rgb(243, 246, 244)",
    "@content-border": "rgb(238, 238, 238)",
    "@content-text": "rgb(0, 0, 0)"
};