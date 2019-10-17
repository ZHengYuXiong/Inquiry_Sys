/*
* 包含 n 个接口请求函数的模块
* 函数的返回值：promise 对象
**/
import ajax from './ajax'

// 获取首页护理常识列表
export const reqHomeNursingKnowledge = () => ajax()

// 获取成绩列表
export const reqGradeList = () => ajax()

// 获取护理小常识列表
export const reqNursingKnowledgeList = () => ajax()

// 获取疾病列表
export const reqDiseaseList = () => ajax()

// 辅助常识列表
export const reqAssistingCommonSenseList = () => ajax()

// 学号密码登录

// 获取成绩详情

// 用户登出
