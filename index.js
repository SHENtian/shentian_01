//查版本号
// git --version

//git config --global user.name 'st'
//git config --global user.email '1324329809@qq.com'

//查看所有的全局配置项
// git config --list --global 

//查看单个配置项
//git config user.email
//git config user.name

//获取帮助信息
// git config -h(help)

//获取git仓库的两种方式
//1.需要将本地文件转化为仓库: git init  npm init -> package.json
    //在工程的跟目录  自动生成 .git 隐藏文件夹

//2.克隆(clone) git clone "xxx" 可以本身存在云端的仓库拉到本地

//U: 表示这个文件未被追踪 untracked
//A: 表示这个文件已经添加到追踪文件
//M:表示这个文件已经被更改了(modified)

//git status 用来查看当前文件状态
//精简的方式 git status -s(short) //查看当前文件状态

// 跟踪文件
//git add xxx.js(文件名称) / git add .  git add -A所有文件添加到追踪文件

//提交更新
// git commit -m 'XXXXx'

//撤销对文件的修改
//git checkout -- 文件名称

//取消暂存 git reset HEAD (文件名称)

//跳过添加暂存区
//git commit -a -m '描述信息'

//移除文件:
//本地仓库和本地工作区:git rm -f 文件名称 (危险)
//本地工作区 git rm --cached 文件名称

/**
 * 忽略文件:
 * 创建文件夹名称:.gitignore ---- /node_modules(表示忽略node_modules文件夹)
 */
