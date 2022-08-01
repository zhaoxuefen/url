// 让原生 uni.request 支持 promise 写法

let myrequest = function(url){
	return new Promise((resolve,reject) => {
		uni.request({
			url,
			success(res){
				resolve(res)
			},
			fail(error){
				reject(error)
			}
		})
	})
}

export default myrequest