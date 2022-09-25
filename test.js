const fse = require('fs-extra');
fse.mkdirsSync('./testFirst');
fse.createFile('./testFirst/file.txt');
fse.mkdirsSync('testSecond');
fse.move('./testFirst/file.txt', './testSecond/file.txt');
fse.mkdirsSync('testThird');
fse.copySync('./testSecond/file.txt', './testThird/file.txt');
fse.removeSync('./testSecond/file.txt');
fse.removeSync('./testThird/file.txt');
fse.removeSync('./testFirst');
fse.removeSync('./testSecond');
fse.removeSync('./testThird');

























