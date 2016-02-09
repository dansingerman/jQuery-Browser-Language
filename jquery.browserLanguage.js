/*!
 * jQuery-Browser-Language jQuery plugin v0.0.1
 *
 * Copyright 2010 by Dan Singerman <dansingerman@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the Free Software Foundation, Inc., 51
 * Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 */

(function($){

   $.browserLanguage = function(callback){
     var language;
     $.ajax({
         url: "//ajaxhttpheaders.appspot.com",
         dataType: 'jsonp',
         success: function(headers) {
             language = headers['Accept-Language'].substring(0,2);
             callback(languageLookup[language], headers['Accept-Language']);
         }
     });
   }

   /*
    Language list from http://en.wikipedia.org/wiki/ISO_639-1_language_matrix
   */

   var languageLookup = {
     "ab": "Abkhazian",
     "af": "Afrikaans",
     "an": "Aragonese",
     "ar": "Arabic",
     "as": "Assamese",
     "az": "Azerbaijani",
     "be": "Belarusian",
     "bg": "Bulgarian",
     "bn": "Bengali",
     "bo": "Tibetan",
     "br": "Breton",
     "bs": "Bosnian",
     "ca": "Catalan / Valencian",
     "ce": "Chechen",
     "co": "Corsican",
     "cs": "Czech",
     "cu": "Church Slavic",
     "cy": "Welsh",
     "da": "Danish",
     "de": "German",
     "el": "Greek",
     "en": "English",
     "eo": "Esperanto",
     "es": "Spanish / Castilian",
     "et": "Estonian",
     "eu": "Basque",
     "fa": "Persian",
     "fi": "Finnish",
     "fj": "Fijian",
     "fo": "Faroese",
     "fr": "French",
     "fy": "Western Frisian",
     "ga": "Irish",
     "gd": "Gaelic / Scottish Gaelic",
     "gl": "Galician",
     "gv": "Manx",
     "he": "Hebrew",
     "hi": "Hindi",
     "hr": "Croatian",
     "ht": "Haitian; Haitian Creole",
     "hu": "Hungarian",
     "hy": "Armenian",
     "id": "Indonesian",
     "is": "Icelandic",
     "it": "Italian",
     "ja": "Japanese",
     "jv": "Javanese",
     "ka": "Georgian",
     "kg": "Kongo",
     "ko": "Korean",
     "ku": "Kurdish",
     "kw": "Cornish",
     "ky": "Kirghiz",
     "la": "Latin",
     "lb": "Luxembourgish Letzeburgesch",
     "li": "Limburgan Limburger Limburgish",
     "ln": "Lingala",
     "lt": "Lithuanian",
     "lv": "Latvian",
     "mg": "Malagasy",
     "mk": "Macedonian",
     "mn": "Mongolian",
     "mo": "Moldavian",
     "ms": "Malay",
     "mt": "Maltese",
     "my": "Burmese",
     "nb": "Norwegian (Bokmål)",
     "ne": "Nepali",
     "nl": "Dutch",
     "nn": "Norwegian (Nynorsk)",
     "no": "Norwegian",
     "oc": "Occitan (post 1500); Provençal",
     "pl": "Polish",
     "pt": "Portuguese",
     "rm": "Raeto-Romance",
     "ro": "Romanian",
     "ru": "Russian",
     "sc": "Sardinian",
     "se": "Northern Sami",
     "sk": "Slovak",
     "sl": "Slovenian",
     "so": "Somali",
     "sq": "Albanian",
     "sr": "Serbian",
     "sv": "Swedish",
     "sw": "Swahili",
     "tk": "Turkmen",
     "tr": "Turkish",
     "ty": "Tahitian",
     "uk": "Ukrainian",
     "ur": "Urdu",
     "uz": "Uzbek",
     "vi": "Vietnamese",
     "vo": "Volapuk",
     "yi": "Yiddish",
     "zh": "Chinese"
   }

})(jQuery);
