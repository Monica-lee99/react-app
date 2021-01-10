
function request () {
  return new Promise((resolve, reject) => {

    resolve(1)

  })
}
const a = async () => {
  let b = await request()
  console.log(b)
}
a()
