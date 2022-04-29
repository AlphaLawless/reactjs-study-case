# [useRef](https://reactjs.org/docs/hooks-reference.html#useref)

```js
const refContainer = useRef(value);
```
`useRef` retorna um objeto `ref` mutável, no qual a propriedade `.current` é inicializada para o argumento passado (`value`). O objeto retornado persistirá durante todo o ciclo de vida do componente.

Um caso comum de uso é o acesso imperativamente a um componente filho:
```js
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` aponta para o evento de `focus` gerado pelo campo de texto
        inputEl.current.focus();
    };

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus no input</button>
        </>
    );
}
```
Essencialmente, `useRef` é como uma "caixa" que pode conter um valor mutável em sua propriedade `.current`.

Você pode estar familizarizado com os refs principalmente como uma forma de [acessar o DOM](https://pt-br.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables). Se você passar um objeto ref para React com `<div ref = {myRef} />`, React definirá sua propriedade `.current` para o nó DOM correspondente sempre que esse nó for alterado.

No entanto, `useRef()` é útil para mais do que o atribuido `ref`. É [útil para mantar qualquer valor mutável ao redor](https://pt-br.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables), semelhante a como você usuaria campos de instância em classes.

Isso funciona porque `useRef()` cria um objeto JavaScript simples. A única diferença entre `useRef()` e a criação de um objeto `(current:...)` é que `useRef()` lhe dará o mesmo objeto ref em cada render.

Tenha em mente que o `useRef()` não avisa quando o conteúdo é alterado. Mover a propriedade `.current` não causa uma nova renderização. Se você quiser executar algum código quando o React anexar ou desanexar um ref a um nó DOM, convém usar um [callback ref](https://pt-br.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node).
