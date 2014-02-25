This is a jQuery plugin to obtain the browser language setting 

Note, the browser language can not (generally) be obtained via navigator.language (which is silly but there you go)

The browser language is available in "Accept-language" HTTP header, but this is not directly accessible via javascript.

The plugin utilises a service at http://ajaxhttpheaders.appspot.com which echoes back the HTTP request headers in JSONP.

I made that as well, and intend to leave it running there in perpetuity (or as long as Google continue to host App Engine for free)

 **Note**: this is a hack only to be used if you do not have a back end available that can do this for you. In general you should not be making calls to third party hosted javascript files in your pages unless you have a very high level of trust in the host.

The Accept-Language header as defined by http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.10 uses an ISO 639-1 language code. The plugin converts this to an English Language description of the Language (e.g. 'Norwegian'), but also returns the complete value of the header if you need to do further processing.

Example usage:

``
<script>
    $.browserLanguage(function( language , acceptHeader ){
      alert("You have your browser language set to " + language + " and the complete value of the 'Accept-Language' header is " + acceptHeader);
    });
</script>
``
