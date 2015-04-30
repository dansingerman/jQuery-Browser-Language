 **Note**: this is a hack only to be used if you do not have a back end available that can do this for you. In general you should not be making calls to third party hosted javascript files in your pages unless you have a very high level of trust in the host. Third party script calls could in theory run any arbitrary javascript on your site.

This is a jQuery plugin to obtain the browser language setting 

The browser language can not (generally) be obtained via navigator.language (which is silly but there you go).

The browser language is available in "Accept-language" HTTP header, but this is not directly accessible via javascript.

The plugin utilises a service at http://ajaxhttpheaders.appspot.com which echoes back the HTTP request headers in JSONP.

I made that as well, and intend to leave it running there in perpetuity (or as long as Google continue to host App Engine for free)

The Accept-Language header as defined by http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.10 uses an ISO 639-1 language code. The plugin converts this to an English Language description of the Language (e.g. 'Norwegian'), but also returns the complete value of the header if you need to do further processing.

Example usage:

```
<script>
    $.browserLanguage(function( language , acceptHeader ){
      alert("You have your browser language set to " + language + " and the complete value of the 'Accept-Language' header is " + acceptHeader);
    });
</script>
```

##Update 30th April 2015

If you want to run your own version of the App Engine app, you can find it here: https://github.com/dansingerman/app-engine-headers
