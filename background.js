chrome.browserAction.onClicked.addListener(function() {
    chrome.bookmarks.getChildren("2", function(results) {
        if (results.length > 0) {
            var first_bookmark = results[0];
            chrome.tabs.create({'url': first_bookmark.url}, function() {
                chrome.bookmarks.remove(first_bookmark.id)
            })
        } else {
            alert("No bookmarks left in queue! Good job!");
        }
    });
})