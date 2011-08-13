// hesperian_mobile.js

// Override swipe verticalDistanceThreshold (75) and friends to be less sensitive.
$.event.special.swipe.verticalDistanceThreshold = 125; // Swipe vertical displacement must be less than this.
$.event.special.swipe.scrollSupressionThreshold= 20; // More than this horizontal displacement, and we will suppress scrolling.
$.event.special.swipe.durationThreshold= 1000; // More time than this, and it isn't a swipe.
$.event.special.swipe.horizontalDistanceThreshold= 60;  // Swipe horizontal displacement must be more than this.

