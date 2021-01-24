describe("this test", function(){
    it('should pass', function(){})
})
describe("artifact", function(){
    const artifact = require("@actions/artifact");
    const artifactClient = artifact.create();
    const shell = require("shelljs");    

    beforeEach(function(){
        // reminder that this can be done
    })

    it("should upload a file", async function(){
        const result = await artifactClient.uploadArtifact("test-artifact-name", ["/opt/bam/test.txt"], "/opt/bam");
        console.log(JSON.stringify(result));
    })
})