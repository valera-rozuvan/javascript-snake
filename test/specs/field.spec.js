define(['field'], function (Field) {
  describe("Field tests", function () {
    var mockSettings = {},
        sut;

    beforeEach(function () {
        mockSettings.boardHeight = 42;
        mockSettings.boardWidth = 42;
        mockSettings.dotSize = 42;

        // "sut" means Subject Under Test; standard name in unit tests.
        sut = new Field(mockSettings);
    });

    it("true should equal true", function () {
        expect(true).toEqual(true);
    });

    it("field height setting is copied", function () {
        expect(sut.height).toEqual(mockSettings.boardHeight);
    });

    it("field width setting is copied", function () {
        expect(sut.width).toEqual(mockSettings.boardWidth);
    });
  });
});
