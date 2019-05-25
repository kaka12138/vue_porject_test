// 引入Mock库
const Mock = require("mockjs")

// Random对象
const Random = Mock.Random;

const nameList = function() {
    let namelist = [];
    for (let i=0; i<10; i++) {
        let goods = { "id": i, "name":  Random.name()}
        namelist.push(goods)
    }

    return {
        namelist:namelist
    }
}


// 定义API
Mock.mock('/name/all', 'get', nameList)
