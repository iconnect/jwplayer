/**
 * HTML5-only utilities for the JW Player.
 * 
 * @author pablo
 * @version 6.0
 */
(function(utils) {
	var DOCUMENT = document, WINDOW = window;
	

	/**
	 * Cleans up a css dimension (e.g. '420px') and returns an integer.
	 */
	utils.parseDimension = function(dimension) {
		if (typeof dimension == "string") {
			if (dimension === "") {
				return 0;
			} else if (dimension.lastIndexOf("%") > -1) {
				return dimension;
			} else {
				return parseInt(dimension.replace("px", ""), 10);
			}
		}
		return dimension;
	}

	/** Format the elapsed / remaining text. **/
	utils.timeFormat = function(sec) {
		if (sec > 0) {
			var hrs = Math.floor(sec / 3600),
				mins = Math.floor((sec - hrs*3600) / 60),
				secs = Math.floor(sec % 60);
				
			return (hrs ? hrs + ":" : "") 
					+ (mins < 10 ? "0" : "") + mins + ":"
					+ (secs < 10 ? "0" : "") + secs;
		} else {
			return "00:00";
		}
	}
	
	utils.bounds = function(element) {
		try { 
			var rect = element.getBoundingClientRect(element),
				scrollOffsetY = window.pageYOffset,
				scrollOffsetX = window.pageXOffset;
			
			return {
				left: rect.left + scrollOffsetX,
				right: rect.right + scrollOffsetX,
				top: rect.top + scrollOffsetY,
				bottom: rect.bottom + scrollOffsetY,
				width: rect.right - rect.left,
				height: rect.bottom - rect.top
			}
		} catch (e) {
			return {
				left: 0,
				right: 0,
				width: 0,
				height: 0,
				top: 0,
				bottom: 0
			};
		}
	}
	
	
	utils.empty = function(element) {
		if (!element) return;
		while (element.childElementCount > 0) {
			element.removeChild(element.children[0]);
		}
	}

})(jwplayer.utils);