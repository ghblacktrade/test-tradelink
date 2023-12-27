// const fib = () => {
//
//     let a = 0
//     let b = 1
//     let sum
//
//     for (let i = 0; i < b; i++) {
//         sum = a + b
//         a = b
//         b = sum
//     }
//     return sum
// }
// console.log(fib())
//      while (printedCount < count) {
//         a = b
//         b = c
//         let d = a + b
//
//         for (let x = c + 1; x < d; x++) {
//             console.log(x)
//             numberCount++
//
//             if (numberCount >= count) {
//                 break
//             }
//         }
//
//         c = d
//
//         if (numberCount >= count) {
//             break
//         }
//     }
//

export async function userInput(n: string) {

    return new Promise(resolve => {

        process.stdout.write(n)
        process.stdin.once('data', data => { resolve(data)})

    })
}

export async function nonFib() {

    const count = parseInt(<string>await userInput('Enter number: '));

    let a = 0
    let b = 1
    let c = a + b

    let numberCount = 0

    while (numberCount < count) {
        a = b
        b = c
        let d = a + b

        for (let i = c + 1; i < d; i++) {
            console.log(i)
            numberCount++

            if (numberCount >= count) {
                break
            }
        }

        c = d

        if (numberCount >= count) {
            break
        }
    }

    process.stdin.pause()
}

nonFib()
//  O(n * m) where m - non fibonacci sequence