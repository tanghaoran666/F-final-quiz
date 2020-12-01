### 完成度：


__Details:__

- \- 实现功能达到2/3

### 测试：


__Details:__



### 知识点：


__Details:__

- \- 1: 具体的业务逻辑的样式不应该写在reboot文件里面， reboot文件是一个特殊的样式文件
- \- 2: 不同组件的样式也应该划分到各自的scss文件中去
- \- 添加讲师和添加学员的逻辑是一样的，这里应该提取公共组件
- \- 组件划分不合理，应该再划分出一个Group组件
- \- 分组之后要使得StudentList和TeacherList的数据更新，应该使用状态提升。而是通过reload页面
- \- 针对以下所有map(function (item, index){})的地方，建议使用箭头函数
- \- 应该使用id，而不是index作为key
- \- 应该考虑到公共组件，所以这里应该复用TeachersList组件
- \- 应该考虑到公共组件，所以这里应该复用StudentList组件

### 工程实践：


__Details:__

- \- 命名不统一，在GroupList.js里面使用了变量trainers。相同的概念应该保持命名的一致性。
- \- 针对以下所有的console: 不应该提交console
- \- 方法的命名不合理，没有体现业务逻辑
- \- 命名不统一，在GroupList.js里面使用了变量trainees。相同的概念应该保持命名的一致性。
- \- 针对以下所有的console: 不应该提交console

### 综合：


__Details:__



