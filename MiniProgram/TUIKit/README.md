## TUIKit 项目

基于 TIM 实现场景化接入方案
## Change Log

#### 2022/08/12

**新增**
- 对方正在输入功能

**修复**
- 导航栏无法固定在顶部
- 图片或视频受到安全打击没有发送失败提示

**变更**
- 更新 CallKit 版本

#### 2022/07/12

**新增**
- 消息发送失败提示原因

**修复**
- 消息撤回逻辑。
- 消息ID拼接规则改变，导致消息无法跳转到底部。

**变更**
- 修改自定义消息字段。

#### 2022/03/18

**新增**
- 消息免打扰。

**修复**
- 长发送体积超过20MB的图片，提示“图片过大，无法发送”。
- 添加群成员，数量刚好大于4的时候，"更多"按钮没有实时更新。
- 播放语音时，切换别的语音，上条不会停止播放。

#### 2022/02/15

**新增**
- 支持分包技术。

**变更**
- 复制消息无确认复制弹窗。
- 消息列表内未读消息数若大于99条，不再显示具体的条数，显示99+。

#### 2021/12/13

**新增**
- 支持图片/视频保存。
- 支持撤回消息重新编辑。
- 支持群主解散群聊。
- 展示消息时间。
- 点击会话头像查看个人资料。
- 支持复制文本消息，并有对应提示。

**变更**
- 拉群群成员支持分批拉取，一次拉取30个。
- 增加消息发送失败提示。
- 删除消息，有对应提示。

**修复**
- 长文本消息无换行
- 群系统消息处理之后状态未变更
- 系统消息下拉刷新会重复渲染


#### 2021/11/19

**Feat Add**

- 支持会话置顶
- 支持消息删除和撤回
- 支持查看群成员资料
- 支持一键跳转到最新消息和最近未读
- 支持视频通话切换到语音通话



