"use strict";
describe("pow", function () {
	it("Возводит 5 в степень 1", function() {
  		assert.equal(pow(5, 1), 5);	
  	});
	
  it("Возводит 5 в степень 2", function () {
  	assert.equal(pow(5, 2), 25);
  });

  it("Возводит 5 в степень 3", function () {
  	assert.equal(pow(5, 3), 125);
  }); 
});