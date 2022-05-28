const fse = require('fs-extra');
const path = require('path');

const docs_dist_index_path = path.join(__dirname, '../docs-dist/apis');

// 确保目录存在
fse.ensureDir(docs_dist_index_path);

// 生成的 API 文档地址
const docs_api_dir = path.join(__dirname, '../dist/apis');

// 拷贝文件
fse.copySync(docs_api_dir, docs_dist_index_path, {});
