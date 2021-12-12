// unit test 

let expect = chai.expect // expect method from chai 

describe("My Function", function(){
    describe("Player Class", function(){
        it("should return a name ", function(){
            let testPlayer = new Player("Tony");
            expect(testPlayer.name).to.equal("Tony")
        })
    })
})