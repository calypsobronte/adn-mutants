# Test
test rapido donde no se detecte un error potencialmente que  impide la salida de los testeos que realicemos
```bash
➜  backend git:(master) ✗ yarn test
    yarn run v1.22.15
    $ NODE_ENV=test NODE_OPTIONS=--experimental-modules jest --verbose --silent
    GET /api/index 200 4.122 ms - 56
    GET /api/magneto/all 200 1527.341 ms - 974
    PASS  tests/datos.spec.js (5.369 s)
    GET /api/index
        ✓ Responde en json el inicio de la aplicacion si esta corriendo correctamente (85 ms)
    GET /api/magneto/all
        ✓ Responde en json con la lista de adn almacenadas en la base de datos (1535 ms)

    Test Suites: 1 passed, 1 total
    Tests:       2 passed, 2 total
    Snapshots:   0 total
    Time:        5.513 s, estimated 6 s
    Jest did not exit one second after the test run has completed.

    This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
    Done in 16.96s.
```
ir a la documetacion principal [aqui](../../README.md)