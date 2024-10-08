import { type Dict } from './en';

export const ms: Dict = {
    common: {
        dashboard: 'Papan Pemuka',
        orders: 'Pesanan',
        order: '$t(common.orders)',
        currentOrder: '$t(common.order) Semasa',
        bots: 'Bot',
        bot: '$t(common.bots)',
        colorScheme: 'Skema Warna',
        light: 'Terang',
        dark: 'Gelap',
        system: 'Sistem',
        add: 'Tambah',
        completed: 'Selesai',
        created: 'Dicipta',
        idle: 'Rehat',
        pending: 'Menunggu',
        processing: 'Diproses',
        progress: 'Kemajuan',
        regular: 'Biasa',
        remove: 'Buang',
        status: 'Status',
        vip: 'VIP',
        about: 'Tentang',
        technology: 'Teknologi',
        type: 'Jenis',
        framework: 'Kerangka',
        language: 'Bahasa',
        stateManagement: 'Pengurusan Keadaan',
        uiLibrary: 'Pustaka UI',
        styling: 'Gaya',
        animations: 'Animasi',
        routing: 'Penghalaan',
        linting: 'Pemeriksaan Kod',
        formatting: 'Pemformatan',
        internationalization: 'Penterjemahan Antarabangsa',
        total: 'Jumlah',
        time: 'Masa',
        history: 'Sejarah',
    },
    bots: {
        noBotsYet: 'Tiada bot lagi.',
        noBotsToRemove: 'Tiada bot untuk dibuang.',
        addOne: 'Tambah satu.',
        botAdded: 'Bot ditambah',
        botRemoved: 'Bot dibuang',
        botAddedDesc: '{{name}} berjaya ditambah',
        botRemovedDesc: '{{name}} berjaya dibuang',
    },
    orders: {
        vipOrder: '$t(common.order) $t(common.vip)',
        regularOrder: '$t(common.order) $t(common.regular)',
        vipOrderAdded: 'Pesanan VIP Ditambah',
        regularOrderAdded: 'Pesanan Biasa Ditambah',
        vipOrderAddedDesc: 'Pesanan Biasa #{{id}} berjaya ditambah',
        regularOrderAddedDesc: 'Pesanan VIP #{{id}} berjaya ditambah',
        ongoingOrder: '$t(common.order) Sedang Berjalan',
        completedOrder: '$t(common.order) Yang $t(common.completed)',
        noOrdersYet: 'Tiada pesanan lagi.',
        orderHistory: 'Sejarah $t(common.order)',
        orderCreated: '$t(common.order) Dicipta',
        orderCreatedDesc: '$t(common.order) telah dicipta.',
        orderAssigned: '$t(common.order) Dimulakan',
        orderAssignedDesc: '$t(common.order) telah dimulakan oleh {{bot}}.',
        orderInteruppted: '$t(common.order) Diganggu',
        orderInterupptedDesc: '$t(common.order) telah diganggu ({{bot}}).',
        orderCompleted: '$t(common.order) Selesai',
        orderCompletedDesc: '$t(common.order) telah diselesaikan oleh {{bot}}.',
    },
    dashboard: {
        orderPerformance: 'Pencapaian $t(common.order)',
        botPerformance: 'Pencapaian $t(common.bot)',
        totalOrders: '$t(common.total) $t(common.orders)',
        completedOrders: '$t(common.orders) $t(common.completed)',
        totalBots: '$t(common.total) $t(common.bots)',
        idleBots: '$t(common.bots) $t(common.idle)',
        processingBots: '$t(common.bots) $t(common.processing)',
    },
    about: {
        c1: 'Aplikasi FeedMe Take Home Assessment ini dicipta sebagai projek hobi, cabaran, dan peluang bagi saya untuk mempelajari teknologi baru dan meningkatkan kemahiran saya.',
        c2: 'Teknologi yang digunakan dalam pembangunan aplikasi ini:',
    },
    footer: {
        c1: 'Dihasilkan dengan',
        c2: 'oleh',
    },
};
