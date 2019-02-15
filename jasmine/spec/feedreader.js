/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {
		//ensures that the `allFeeds` variable has been defined and is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
		//ensures each feed has an `URL` and is not empty
		it('every feed has URL', function(){
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
		});
		//ensures each feed has a `name` and is not empty
		it('every feed has Name', function(){
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
    });



	describe('The menu', function() {
		//ensures the `menu` element is hidden by default
		it('the menu is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toEqual(true);
		});
		//validates the functionallity of clicking on the menu button
		it('the menu changes visibility on click', function() {
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toEqual(false);
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toEqual(true);
		});
	});

 
	describe('Initial Entries', function () {
  		
		beforeEach(function(done) {
			loadFeed(0, done);
		});
		//ensures that there is at least one entry in `feed`
		it('there is at least a single entry', function () {
			expect($('.feed .entry').length).toBeGreaterThan(0);
		});
	});
    

	describe('New Feed Selection', function() {
		let entryStart;
		let entryFinish;
		
		// when a new feed is loaded by the loadFeed function that the content actually changes
		beforeEach(function(done) {
			$('.feed').empty();
			loadFeed(0, function() {
				entryStart = $('.feed').text();
				loadFeed(1, function() {
					entryFinish = $('.feed').text();
					done();
				});
			});

			
		});
		//ensures that new content is loaded by `loadFeed()`
		it('a new feed loads new content', function() {
			expect(entryStart).not.toBe(entryFinish);
		});

	});
        
}());
