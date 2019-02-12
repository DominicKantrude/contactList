import getContactInfoFromDom from "./contactForm"
import {API, renderContactCollection} from "./contactCollection"
renderContactCollection()

document.querySelector("#submit").addEventListener("click", function(){
    getContactInfoFromDom(event);
})


