<html>
<head>
    <script language="JavaScript" src="http://www.geoplugin.net/javascript.gp" type="text/javascript"></script>
    <script>
        if (geoplugin_countryCode() == "US") {
            window.location.href = "http://google.com"    <!-- This directs to United States -->
        } else if (geoplugin_countryCode() == "GB") {
            window.location.href = "http://yahoo.com"    <!-- This directs to United Kingdom -->
        } else if (geoplugin_countryCode() == "RU") {
            window.location.href = "http://yandex.com"    <!-- This directs to Russia -->
        } else {
            window.location.href = "http://YourAffiliateLink.com"    <!-- This directs to Every Other country -->
        }
    
        <!-- You can use this Alert for testing purposes, it includes City, Country Name, and Country Code -->
        <!-- alert(geoplugin_city() + ", " + geoplugin_countryName() + ", " + geoplugin_countryCode()); -->
    </script>
 
</head>
<body>

</body>
</html>