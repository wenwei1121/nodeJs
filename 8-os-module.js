const os = require('os') // 操作系統 > build-in module

// info about current user
const user = os.userInfo()

console.log(user) // 在 Windows 上 uid & gid 是 -1 而 shell 是 null

// method returns the system uptime in seconds
console.log(`The Sysytem Uptime is ${os.uptime()} seconds`) // 以秒為單位返回系統正常運行時間

const currentOS = {
    name: os.type(), // 返回操作系統名稱 Windows 上返回 'Windows_NT'
    release: os.release(), // 以字符串形式返回操作系統
    totalMem: os.totalmem(), // 以整數形式返回系統內存總量(已字節為單位)
    freeMem: os.freemem(), // 以整數形式返回剩餘的系統內存量(已字節為單位)
}

console.log(currentOS)