# [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)

```js
const memoizedCallback = usecallback(
() => {
    doSomething(a, b);
},[a, b])
```
Retorna um callback [memoization](https://en.wikipedia.org/wiki/Memoization)

Recebe como argumentos, um callback e um array. `useCallback` retornará uma versão memoizada do `callback` que só muda se uma das entradas tiverem sido alteradas. Isto é útil quando utilizamos callbacks a fim de otimizar components filhos, que dependem da igualdade de referência para evitar renderizações desnecessárias (como por exemplo `shouldComponentUpdate`).

`useCallback(fn, inputs)` é equivalente a `useMemo(() => fn, inputs)`

#### Nota
O array não é usado como argumento para o callback. Conceitualmente, porém, é isso que eles representam: todos os valores referenciados dentro da função também devem aparecer no array passado como argumento. No futuro, um compilador suficientemente avançado poderia criar este array automaticamente.

Recomendamos usar as regras do `exhaustive-deps` como parte do nosso pacote `eslint-plugin-react-hooks`. Ele avisa quando as dependências são especificadas incorretamente e sugere uma correção.
