# WebClient
This is intended to be a universal front end for testing out the different blockchain platforms which will be interfaced by a generic API for each.

In order to run this client, do the following:

 - Install npm
 - Type npm install

There is currently a bug in the ng2-bootstrap npm package.  You need to modify the file in
  
>node-modules/ng2-bootstrap/components/datepicker/date-formatter.js
  
replace

```
  var moment = require('moment');
```

with 
```
  var moment = require('../../../moment/moment');
```

See 

 - https://github.com/mgechev/angular-seed/issues/442 
 - http://stackoverflow.com/questions/40735865/getting-an-error-typeerror-undefined-is-not-observable
 
for more details

//TODO: update system.config.js as per this recommendation https://github.com/valor-software/ng2-bootstrap/issues/1220 and see if the above bug is resolved
