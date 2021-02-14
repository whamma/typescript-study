{
    // Type Assertions 💩
    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    // 100% 확실할때만..
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2); // 😱
    // 너무 장담하면 프로그램이 죽을 수 있다

    const button = document.querySelector('class');
    if(button) {
        button.nodeValue;
    }
}