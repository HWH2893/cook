
const QuickStartPoints = [
  { id: '1', title: '拍照识别，菜谱推荐' },
  { id: '2', title: 'AR辅助，虚拟指导' },
  { id: '3', title: '菜谱大全，精准搜索' },
];

function highlightText(content) {
  return `<span> \`${content}\` </span>`;
}

const QuickStartSteps = [
  {
    id: '1',
    title: '注册/登录，获取更多菜谱推荐',
    contents: [
      {
        type: 'text',
        content: `通过简单便捷的注册/登录流程，您就能开启个性化美食之旅。登录后，小程序会基于您的浏览偏好、收藏记录等，为您精准推送更多符合口味的菜谱。从此告别选择困难，轻松发现新美味。`,
      },
     
    ],
  },
  {
    id: '2',
    title: '拍照识别食材，生成菜谱清单',
    contents: [
      {
        type: 'text',
        content: `拿起手机，对准您手头的食材拍照，小程序强大的图像识别技术瞬间启动。它能快速准确识别食材，并依据您拥有的食材，生成丰富多样的菜谱清单。让闲置食材秒变美味佳肴，为您的每一餐带来新创意。`,
      },
      
     
    ],
  },
  {
    id: '3',
    title: 'AR辅助教学，虚拟指导烹饪',
    contents: [
      {
        type: 'text',
        content: `借助先进的增强现实（AR）技术，为您提供沉浸式烹饪教学体验。开启AR辅助教学功能，虚拟厨师将现身指导，从刀工技巧到火候把控，每个烹饪步骤都有细致示范，仿佛专业大厨在旁手把手教学，助您轻松掌握烹饪要领。`,
      },
      
    ],
  },
  {
    id: '4',
    title: '食谱大全，精准搜索',
    contents: [
      {
        type: 'text',
        content: '小程序汇聚海量食谱，中式美食、西式佳肴应有尽有。您只需输入菜品名称、食材关键词或烹饪方式等，即可通过精准搜索功能，快速找到心仪菜谱。无论是家常菜、特色小吃，还是节日大餐，都能在这里找到详细做法。',
      },
    
      
    ],
  },
  {
    id: '5',
    title: '个人中心',
    contents: [
      {
        type: 'text',
        content: '在个人中心，您可以管理自己的账户信息、查看收藏的菜谱、回顾浏览历史。还能对自己尝试过的菜谱进行评分和评论，与其他美食爱好者交流心得，打造专属于您的美食空间。',
      },
      
    ],
  },
];

module.exports = {
  QuickStartPoints,
  QuickStartSteps,
}