Identification Numbers
======================

Provides utility methods to validate and generate various identification numbers such as VAT, IBAN, PESEL, etc.

## Installation

```shell
npm install identification-numbers --save
```

## Usage

```js
var idNumbers = require('identification-numbers');

console.log('random NIP', idNumbers.randomNip());
console.log('random REGON', idNumbers.randomRegon());
console.log('random PESEL', idNumbers.pesel().random());

console.log(idNumbers.pesel().isValid('83071603434')); // -> true
```

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
        System.out.println(engine.eval("pesel.isValid('83021111')"));
    }

    private Reader nodeModuleAsReader(final String moduleName) throws IOException {
        File nodeModuleFile = new ClassPathResource(moduleName).getFile();
        return Files.newReader(nodeModuleFile, Charset.forName("UTF-8"));
    }
}
```

## Release History

* 0.0.2 Validate/Generate random PESEL
* 0.0.1 Initial release