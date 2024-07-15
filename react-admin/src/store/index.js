import { configureStore } from '@reduxjs/toolkit'
// 引入主题换肤store分库
import themeReducer from '@/store/slices/theme'

// 引入默认菜单分库
import menuReducer from '@/store/slices/menu'

export const store = configureStore({
  reducer: {
    // 主题换肤store分库
    theme: themeReducer,
    menu: menuReducer
    // 可以根据需要在这里继续追加其他分库
  },
})
