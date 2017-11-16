
const dummyData = [{name:'User 1',age:'21'},{name:'User 2',age:'22'},{name:'User 3',age:'23'}]

export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(dummyData)
        }, 3000)
    })
}