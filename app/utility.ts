

function getValue(element: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(element);

    return inputElement.value

}

function logger(message: string): void {
    console.log(message);

}

export { getValue, logger }

