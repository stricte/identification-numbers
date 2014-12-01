Identification Numbers
======================
[![Build Status](https://travis-ci.org/danielpacak/identification-numbers.svg?branch=master)](https://travis-ci.org/danielpacak/identification-numbers)
[![npm version](https://badge.fury.io/js/identification-numbers.svg)](http://badge.fury.io/js/identification-numbers)

Provides utility methods to validate and generate various identification numbers such as VAT, VIN, IBAN, PESEL, etc.

## Installation

```shell
npm install identification-numbers
```

## Usage

### In Node.js

```js
var idNumbers = require('identification-numbers');

var nip = idNumbers.nip();
var regon = idNumbers.regon();

console.log('random NIP', nip.random());
console.log('random REGON', regon.random());

console.log(nip.isValid('2372636037')); // -> true
console.log(nip.isValid('1234567890')); // -> false
```

### In the Browser

```html
<!doctype html>
<html lang="en">
<head>
    <script src="../../lib/identification-numbers/index.js"></script>
</head>
<body>
<pre>
<script>
    // The API is now accessible through the window.identification_numbers global object.
    var pesel = identification_numbers.pesel();
    var regon = identification_numbers.regon();

    document.writeln('Is PESEL `83071503434` valid? ' + pesel.isValid('83071503434'));
    document.writeln('Is REGON `975124224` valid? ' + regon.isValid('975124224'));
</script>
</pre>
</body>
</html>
```

### In Java

> Beware of performance penalties.

```java
import com.google.common.io.Files;
import org.springframework.core.io.ClassPathResource;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.nio.charset.Charset;

public class TestDrive {

    public void go() throws Exception {
        ScriptEngineManager engineManager = new ScriptEngineManager();
        ScriptEngine engine = engineManager.getEngineByName("js");
        engine.eval("module = { exports: {} }");

        engine.eval(nodeModuleAsReader("identification-numbers.js"));
        engine.eval("pesel = module.exports.pesel()");

        System.out.println(engine.eval("pesel.random()"));
        System.out.println(engine.eval("pesel.isValid('83071503434')")); // -> true
    }

    private Reader nodeModuleAsReader(final String moduleName) throws IOException {
        File nodeModuleFile = new ClassPathResource(moduleName).getFile();
        return Files.newReader(nodeModuleFile, Charset.forName("UTF-8"));
    }
}
```

## Release History
* 0.0.4
  * Validate PESEL
* 0.0.3
  * Added random NIP generator
  * Added NIP validator
  * Added random REGON generator
  * Added REGON validator
* 0.0.2
* 0.0.1
  * Initial release