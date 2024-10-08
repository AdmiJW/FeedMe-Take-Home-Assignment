import { type Dict } from './en';

export const zh: Dict = {
    common: {
        dashboard: '仪表板',
        orders: '订单',
        order: '$t(common.orders)',
        currentOrder: '当前$t(common.order)',
        bots: '机器人',
        bot: '$t(common.bots)',
        about: '关于',
        colorScheme: 'UI 模式',
        light: '明亮',
        dark: '黑暗',
        system: '系统',
        add: '添加',
        remove: '删除',
        idle: '空闲',
        completed: '已完成',
        pending: '待处理',
        created: '创建',
        progress: '进度',
        processing: '处理中',
        regular: '普通',
        status: '状态',
        vip: 'VIP',
        technology: '技术',
        type: '类型',
        framework: '框架',
        language: '语言',
        stateManagement: '状态管理',
        uiLibrary: 'UI库',
        styling: '样式',
        animations: '动画',
        routing: '路由',
        linting: '代码静态检查',
        formatting: '格式化',
        internationalization: '国际化',
        total: '总计',
        time: '时间',
        history: '历史',
    },
    orders: {
        vipOrder: '$t(common.vip)$t(common.order)',
        regularOrder: '$t(common.regular)$t(common.order)',
        vipOrderAdded: 'VIP $t(common.order) 已添加',
        regularOrderAdded: '普通 $t(common.order) 已添加',
        vipOrderAddedDesc: '普通 $t(common.order) #{{id}} 已成功添加',
        regularOrderAddedDesc: 'VIP $t(common.order) #{{id}} 已成功添加',
        ongoingOrder: '进行中的$t(common.order)',
        completedOrder: '$t(common.completed)的$t(common.order)',
        noOrdersYet: '尚无订单。',
        orderHistory: '$t(common.order)历史',
        orderCreated: '$t(common.order)已创建',
        orderCreatedDesc: '$t(common.order)已创建。',
        orderAssigned: '$t(common.order)已分配',
        orderAssignedDesc: '$t(common.order)已分配给{{bot}}。',
        orderInteruppted: '$t(common.order)已中断',
        orderInterupptedDesc: '$t(common.order)已中断（{{bot}}）。',
        orderCompleted: '$t(common.order)已完成',
        orderCompletedDesc: '$t(common.order)已由{{bot}}完成。',
    },
    dashboard: {
        orderPerformance: '$t(common.order)性能',
        botPerformance: '$t(common.bot)性能',
        totalOrders: '$t(common.total)$t(common.orders)',
        completedOrders: '$t(common.completed)$t(common.orders)',
        totalBots: '$t(common.total)$t(common.bots)',
        idleBots: '$t(common.idle)$t(common.bots)',
        processingBots: '$t(common.processing)$t(common.bots)',
    },
    bots: {
        noBotsYet: '尚无机器人。',
        noBotsToRemove: '没有可删除的机器人。',
        addOne: '添加一个。',
        botAdded: '机器人已添加',
        botRemoved: '机器人已删除',
        botAddedDesc: '成功添加 {{name}}',
        botRemovedDesc: '成功删除 {{name}}',
    },
    about: {
        c1: '此 FeedMe 面试评估应用程序是作为我的业余项目、挑战和学习新技术并提高技能的机会而创建的。',
        c2: '在开发此应用程序时使用的技术：',
    },
    footer: {
        c1: '来自用',
        c2: '制作的',
    },
};
