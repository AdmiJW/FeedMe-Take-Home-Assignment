export type Dict = typeof en;
export const en = {
    common: {
        dashboard: 'Dashboard',
        orders: 'Orders',
        order: 'Order',
        currentOrder: 'Current $t(common.order)',
        bots: 'Bots',
        bot: 'Bot',
        about: 'About',
        colorScheme: 'Color Scheme',
        light: 'Light',
        dark: 'Dark',
        system: 'System',
        add: 'Add',
        remove: 'Remove',
        idle: 'Idle',
        processing: 'Processing',
        completed: 'Completed',
        pending: 'Pending',
        status: 'Status',
        created: 'Created',
        progress: 'Progress',
        regular: 'Regular',
        vip: 'VIP',
        technology: 'Technology',
        type: 'Type',
        framework: 'Framework',
        language: 'Language',
        stateManagement: 'State Management',
        uiLibrary: 'UI Library',
        styling: 'Styling',
        animations: 'Animations',
        routing: 'Routing',
        linting: 'Linting',
        formatting: 'Formatting',
        internationalization: 'Internationalization',
        total: 'Total',
        time: 'Time',
        history: 'History',
    },
    orders: {
        vipOrder: '$t(common.vip) $t(common.order)',
        regularOrder: '$t(common.regular) $t(common.order)',
        vipOrderAdded: 'VIP $t(common.order) Added',
        regularOrderAdded: 'Regular $t(common.order) Added',
        vipOrderAddedDesc: 'Regular $t(common.order) #{{id}} was successfully added',
        regularOrderAddedDesc: 'VIP $t(common.order) #{{id}} was successfully added',
        ongoingOrder: 'Ongoing $t(common.order)',
        completedOrder: '$t(common.completed) $t(common.order)',
        noOrdersYet: 'No orders yet.',
        orderHistory: '$t(common.order) $t(common.history)',
        orderCreated: '$t(common.order) Created',
        orderCreatedDesc: 'The order has been created.',
        orderAssigned: '$t(common.order) Assigned',
        orderAssignedDesc: 'The order has been assigned to {{bot}}.',
        orderInteruppted: '$t(common.order) Interrupted',
        orderInterupptedDesc: 'The order has been interrupted ({{bot}}).',
        orderCompleted: '$t(common.order) Completed',
        orderCompletedDesc: 'The order has been completed by {{bot}}.',
    },
    dashboard: {
        orderPerformance: '$t(common.order) Performance',
        botPerformance: '$t(common.bot) Performance',
        totalOrders: '$t(common.total) $t(common.orders)',
        completedOrders: '$t(common.completed) $t(common.orders)',
        totalBots: '$t(common.total) $t(common.bots)',
        idleBots: '$t(common.idle) $t(common.bots)',
        processingBots: '$t(common.processing) $t(common.bots)',
    },
    bots: {
        noBotsYet: 'No bots yet.',
        noBotsToRemove: 'No bots to remove.',
        addOne: 'Add one.',
        botAdded: 'Bot added',
        botRemoved: 'Bot removed',
        botAddedDesc: '{{name}} was successfully added',
        botRemovedDesc: '{{name}} was successfully removed',
    },
    about: {
        c1: 'This FeedMe Take Home Assessment application is created as a hobby project, a challenge, and a chance for me to learn new technologies and improve my skills.',
        c2: 'The technologies used in the development of this application:',
    },
    footer: {
        c1: 'Made with',
        c2: 'by',
    },
};
