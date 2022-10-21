export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log('----------------------');
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            console.log(`Retorno do método: ${JSON.stringify(retorno)}`);
            const t2 = performance.now();
            if (emSegundos) {
                console.log(`${propertyKey} demorou ${(t2 - t1) / 1000} segundos`);
            }
            else {
                console.log(`${propertyKey} demorou ${t2 - t1} milisegundos`);
            }
            return retorno;
        };
        return descriptor;
    };
}
