const calculadora = () => {
    let count = 0

    const sumar = (valor) => {
        count += valor
    }

    const restar = (valor) => {
        count -= valor
    }

    const multiplicar = (valor) => {
        count *= valor
    }

    const dividir = (valor) => {
        if (valor === 0) {
            return ('No se puede dividir por cero');
        } else {
            count /= valor
        }
    }

    const total = () => {
        return count
    }

    return {
        sumar,
        restar,
        multiplicar,
        dividir,
        total,
    }
}
export const defaultValue = 12
export const test = 'message'

// 1 esport default
// 2 export

export default calculadora; // este archivo puede utilizarse desde otro script

