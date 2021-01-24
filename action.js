var bamAction = (function () {
    var cliArgs = require('@bamapps/bam-cli-args'),
        _ = require('underscore'),
        actionsCore = require('@actions/core');

    var dependencies = {
        cliArgs: cliArgs,
        actionsCore: actionsCore
    }

    return {
        bamArgs: cliArgs.args,
        scriptInfo: cliArgs.scriptInfo,        
        run: function (scriptArgs) {
            console.log(cliArgs.scriptInfo());
        },
        inject: function (obj) {
            dependencies = _.extend({}, dependencies, obj);
        }
    }
})()

if (typeof require !== 'undefined' && require.main === module) {
    bamAction.run(process.argv.slice(2));
}

module.exports = bamInputs;